import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Input, InputStyle } from "shared/ui/Input/Input";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input placeholder={"Введите логин"} inputStyle={InputStyle.CONSOLE} />
      <Input placeholder={"Введите пароль"} />
      <Button className={cls.loginBtn} theme={ButtonTheme.CLEAR}>
        {t("Войти")}
      </Button>
    </div>
  );
};
