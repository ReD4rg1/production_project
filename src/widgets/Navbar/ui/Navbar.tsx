import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props;

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={"/"}>
                {"Main"}
            </AppLink>
            <AppLink className={styles.link} theme={AppLinkTheme.SECONDARY} to={"/second"}>
                {"Second"}
            </AppLink>
        </div>
    );
};
