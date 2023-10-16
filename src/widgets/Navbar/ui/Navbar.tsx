import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={"/"}>
                    {t("Главная")}
                </AppLink>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={"/second"}>
                    {t("Второстепенная")}
                </AppLink>
            </div>
        </div>
    );
};
