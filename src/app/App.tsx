import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {SecondPage} from "pages/SecondPage";
import {Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={"/"}>{"Main"}</Link>
            <Link to={"/second"}>{"Second"}</Link>
            <button onClick={() => toggleTheme()}>Поменять оформление</button>
            <Suspense fallback={<div>{"...Loading"}</div>}>
                <Routes>
                    <Route path={"/"} Component={MainPage}/>
                    <Route path={"/second"} Component={SecondPage}/>
                </Routes>
            </Suspense>
        </div>
    );
};