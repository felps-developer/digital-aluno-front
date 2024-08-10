import { Outlet } from "react-router-dom";

const PageLayout = () => {
    return (
        <>
            {/* Header component */}
            <Outlet />
            {/* Footer component */}
        </>
    );
}
 
export default PageLayout;