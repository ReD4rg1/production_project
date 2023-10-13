import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.links)}>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={"/"}>
                    {"Main"}
                </AppLink>
                <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={"/second"}>
                    {"Second"}
                </AppLink>
            </div>
        </div>
    );
};
