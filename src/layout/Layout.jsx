import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export function Layout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <>
            <Outlet />
            <Footer />
            <ScrollToTop/>
        </>
    );
}