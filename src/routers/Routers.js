import Home from "../pages/Home";
import SingUp from "../pages/SingUp";
import ToDo from "../pages/ToDo";
import GuestGuard from "../components/GuestGuard"
import AuthGuard from "../components/AuthGuard"



const ROUTES = {
    HOME: "/",
    SINGUP: "signup",
    TODO: "todo",
};

const ROUTES_CONFIG = [
    {
        path: ROUTES.HOME,
        guard: GuestGuard,
        page: Home
    }, {
        path: ROUTES.SINGUP,
        guard: GuestGuard,
        page: SingUp
    }, {
        path: ROUTES.TODO,
        guard: AuthGuard,
        page: ToDo
    }
]

export default ROUTES;
export { ROUTES_CONFIG };
