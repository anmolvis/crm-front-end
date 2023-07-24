import Dashboard from "../Pages/Employee/Dashboard/Dashboard";

export const routes = [
    {
        featureTitle: "dashboard",
        permissionAllowed: ["view"],
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        featureTitle: "payment-link",
        permissionAllowed: ["view"],
        path: "/payment-link",
        element: <Dashboard />,
    },
    {
        featureTitle: "payment-link",
        permissionAllowed: ["create"],
        path: "/payment-link/:pageType",
        element: <Dashboard />,
    },
    {
        featureTitle: "payment-link",
        permissionAllowed: ["view", "edit"],
        path: "/payment-link/:pageType/:id",
        element: <Dashboard />,
    },
];
