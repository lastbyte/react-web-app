import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const HomeComponent = lazy(() => import("../pages/home"));
const CounterComponent = lazy(() => import("../pages/counterApp"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeComponent/>,
    },
    {
        path: "counter",
        element: <CounterComponent/>,
    },
]);

export default router;