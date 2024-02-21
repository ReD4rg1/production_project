import { memo, useCallback, useState } from "react";
import { Card } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { StarRating } from "@/shared/ui/deprecated/StarRating";
import { Text } from "@/shared/ui/deprecated/Text";
import { Modal } from "@/shared/ui/deprecated/Modal";
import { Input, InputStyle } from "@/shared/ui/deprecated/Input";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/deprecated/Drawer";

interface RatingCardProps {
  className?: string;
  title?: string;
  hasFeedback?: boolean;
  feedbackTitle?: string;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    hasFeedback,
    onCancel,
    feedbackTitle,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [starsCount, setStarsCount] = useState(rate);
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
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
        inputStyle={InputStyle.CONSOLE}
      />
    </>
  );

  return (
    <Card data-testid="RatingCard" className={className}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button
              data-testid="RatingCard.Send"
              fullWidth
              onClick={acceptHandle}
              size={ButtonSize.L}
            >
              {t("Отправить")}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button
                data-testid="RatingCard.Close"
                onClick={cancelHandle}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t("Закрыть")}
              </Button>
              <Button data-testid="RatingCard.Send" onClick={acceptHandle}>
                {t("Отправить")}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
