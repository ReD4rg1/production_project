import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {SecondPageAsync} from "./pages/SecondPage/SecondPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";

export default function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={"/"}>{"Main"}</Link>
            <Link to={"/second"}>{"Second"}</Link>
            <button onClick={() => toggleTheme()}>Поменять оформление</button>
            <Suspense fallback={<div>{"...Loading"}</div>}>
                <Routes>
                    <Route path={"/"} Component={MainPageAsync}/>
                    <Route path={"/second"} Component={SecondPageAsync}/>
                </Routes>
            </Suspense>
        </div>
    );
};