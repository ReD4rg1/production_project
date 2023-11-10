import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country/model/types/country";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";

const reducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);
  const { t } = useTranslation("profile");

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
    [ValidateProfileError.NO_DATA]: t("Нет данных"),
    [ValidateProfileError.INCORRECT_CITY]: t("Неверное название города"),
    [ValidateProfileError.INCORRECT_AGE]: t("Неверный возраст"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      "Неправильные имя или фамилия"
    ),
  };

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstname = useCallback(
    (value: string = "") => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value: string = "") => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string = "") => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (value: Country = Country.Kazakhstan) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency = Currency.KZT) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string = "") => {
      const validatedValue = value.replace(/\D+/gm, "");
      dispatch(
        profileActions.updateProfile({ age: Number(validatedValue || 0) })
      );
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string = "") => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string = "") => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
              key={err}
            />
          ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeCity={onChangeCity}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeAge={onChangeAge}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
