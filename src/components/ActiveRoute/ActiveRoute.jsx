import { NavLink } from "react-router-dom";
import './ActiveRoute.css'

const ActiveRoute = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive ? "  text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9" : "bg-[#6ebe3b] hover:bg-white text-white hover:text-[#6ebe3b] border border-[#6ebe3b]  px-1 md:px-2 py-1 md:mx-2 mx-1 font-semibold h-9"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;