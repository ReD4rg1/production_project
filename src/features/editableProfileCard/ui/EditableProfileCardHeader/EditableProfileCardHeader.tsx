import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { HStack } from "@/shared/ui/Stack";

interface ProfilePageHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation("profile");
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(updateProfileData());
    }
  }, [dispatch]);

  return (
    <HStack
      max
      justify={"between"}
      className={classNames(cls.profilePageHeader, {}, [className])}
    >
      <Text title={t("Профиль")} className={cls.title} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <div>
              <Button
                onClick={onEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                data-testid={"EditableProfileCardHeader.EditButton"}
              >
                {t("Редактировать")}
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={onSave}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
                data-testid={"EditableProfileCardHeader.SaveButton"}
              >
                {t("Сохранить")}
              </Button>
              <Button
                onClick={onCancelEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
                data-testid={"EditableProfileCardHeader.CancelButton"}
              >
                {t("Отмена")}
              </Button>
            </div>
          )}
        </div>
      )}
    </HStack>
  );
};
