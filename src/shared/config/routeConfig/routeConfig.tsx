import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {SecondPage} from "pages/SecondPage";

export enum AppRoutes {
    MAIN = 'main',
    SECOND = 'second',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.SECOND]: "/second",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.SECOND]: {
        path: RoutePath.second,
        element: <SecondPage />,
    },
}