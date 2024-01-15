import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./RatingCard.module.scss";
import { memo, useCallback, useState } from "react";
import { Card } from "@/shared/ui/Card/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { StarRating } from "@/shared/ui/StarRating/StarRating";
import { Text } from "@/shared/ui/Text/Text";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Input, InputStyle } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/Drawer/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  hasFeedback?: boolean;
  feedbackTitle?: string;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, onAccept, hasFeedback, onCancel, feedbackTitle, title } =
    props;
  const { t } = useTranslation();
  const [starsCount, setStarsCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const isMobile = useDevice();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
        inputStyle={InputStyle.CONSOLE}
      />
    </>
  );

  return (
    <Card className={classNames(cls.RatingCard, {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
              {t("Отправить")}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t("Закрыть")}
              </Button>
              <Button onClick={acceptHandle}>{t("Отправить")}</Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
