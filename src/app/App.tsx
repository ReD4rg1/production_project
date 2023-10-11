import "./styles/index.scss";
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={"/"}>{"Main"}</Link>
            <Link to={"/second"}>{"Second"}</Link>
            <button onClick={() => toggleTheme()}>Поменять оформление</button>
            <AppRouter/>
        </div>
    );
};