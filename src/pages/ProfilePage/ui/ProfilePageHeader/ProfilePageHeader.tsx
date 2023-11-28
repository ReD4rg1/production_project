import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ProfilePageHeader.module.scss";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback } from "react";
import { getUserAuthData } from "entities/User";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
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
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} className={cls.title} />
      {canEdit && (
        <div className={cls.btnWrapper}>
          {readonly ? (
            <div>
              <Button
                onClick={onEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
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
              >
                {t("Сохранить")}
              </Button>
              <Button
                onClick={onCancelEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t("Отмена")}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
