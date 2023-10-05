import "./styles/index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {SecondPageAsync} from "./pages/SecondPage/SecondPage.async";
import {Suspense} from "react";

export default function App() {
    return (
        <div className={"app"}>
            <Link to={"/"}>{"Main"}</Link>
            <Link to={"/second"}>{"Second"}</Link>
            <Suspense fallback={<div>{"...Loading"}</div>}>
                <Routes>
                    <Route path={"/"} Component={MainPageAsync}/>
                    <Route path={"/second"} Component={SecondPageAsync}/>
                </Routes>
            </Suspense>
        </div>
    );
};