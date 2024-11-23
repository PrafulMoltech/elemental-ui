import { lazy } from "react";

const Form = lazy(() => import("../../pages/gettingStarted/GettingStarted"));

export const ComponentNavigation = [

    {
        id: "Form",
        path: "/Form",
        exact: true,
        title: "",
        component: Form,
        text: "Form",
    },
];


