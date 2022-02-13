import {NavLink, Outlet} from "react-router-dom";

import './header.css';
import ThemeSwitcher from "../theme/ThemeSwitcher";
import SwitchButton from "../theme/SwitchButton";
import User from "../user/User";

const Layout = () => {
    return (
        <>
            <ThemeSwitcher>
                <div className={'header'}>
                    <SwitchButton/>
                    <div className={'navigation'}>
                        <NavLink to="/movies">Movies</NavLink>
                        <NavLink to="/genres">Genres</NavLink>
                    </div>
                    <User/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </ThemeSwitcher>
        </>
    );
};

export default Layout;
