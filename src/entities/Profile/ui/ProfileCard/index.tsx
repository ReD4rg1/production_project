import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input, InputStyle } from "shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { HStack, VStack } from "shared/ui/Stack";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: () => void;
  onChangeFirstname?: () => void;
  onChangeAge?: () => void;
  onChangeCity?: () => void;
  onChangeCurrency?: () => void;
  onChangeCountry?: () => void;
  onChangeAvatar?: () => void;
  onChangeUsername?: () => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeAvatar,
    onChangeCity,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <HStack
        max
        justify={"center"}
        className={classNames(cls.profileCard, {}, [className, cls.loading])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        max
        justify={"center"}
        className={classNames(cls.profileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap={"8"}
      max
      className={classNames(cls.profileCard, mods, [className])}
    >
      <HStack max justify={"center"}>
        <Avatar src={data?.avatar} />
      </HStack>
      <Input
        className={cls.input}
        value={data?.first}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeFirstname}
        readonly={readonly}
        placeholder={t("Ваше имя")}
      />
      <Input
        className={cls.input}
        value={data?.lastname}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeLastname}
        readonly={readonly}
        placeholder={t("Ваша фамилия")}
      />
      <Input
        className={cls.input}
        value={data?.age}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeAge}
        readonly={readonly}
        placeholder={t("Ваш возраст")}
      />
      <Input
        className={cls.input}
        value={data?.city}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeCity}
        readonly={readonly}
        placeholder={t("Ваш город")}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
      <Input
        className={cls.input}
        value={data?.avatar}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeAvatar}
        readonly={readonly}
        placeholder={t("Ссылка на аватар")}
      />
      <Input
        className={cls.input}
        value={data?.username}
        inputStyle={InputStyle.CONSOLE}
        onChange={onChangeUsername}
        readonly={readonly}
        placeholder={t("Имя пользователя")}
      />
    </VStack>
  );
};
