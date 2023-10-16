import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import AuthLayout from "../layouts/main";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ResetPassword from "../pages/auth/ResetPassword";
import NewPassword from "../pages/auth/NewPassword";

//suspense display a component when loaded, until then display a loading screen
const Loadable = (Component) => (props) => {
	return (
		<Suspense fallback={<LoadingScreen />}>
			<Component {...props} />
		</Suspense>
	);
};

export default function Router() {
	return useRoutes([
		{
			path: "/auth",
			element: <AuthLayout />,
			children: [
				{ path: "login", element: <Login /> },
				{ path: "register", element: <Register /> },
				{ path: "reset-password", element: <ResetPassword /> },
				{ path: "new-password", element: <NewPassword /> },
			],
		},

		{
			path: "/",
			element: <DashboardLayout />,
			children: [
				{ element: <Navigate to={DEFAULT_PATH} replace />, index: true },
				{ path: "app", element: <GeneralApp /> },
				{ path: "settings", element: <Settings /> },

				{ path: "404", element: <Page404 /> },
				{ path: "*", element: <Navigate to="/404" replace /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
}

const GeneralApp = Loadable(
	lazy(() => import("../pages/dashboard/GeneralApp"))
);

const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const ResetPasswordPage = Loadable(
	lazy(() => import("../pages/auth/ResetPassword"))
);
const NewPasswordPage = Loadable(
	lazy(() => import("../pages/auth/NewPassword"))
);

const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
