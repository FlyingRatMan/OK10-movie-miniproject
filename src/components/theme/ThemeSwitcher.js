import {useSelector} from "react-redux";
import {useEffect} from "react";

const ThemeSwitcher = ({children}) => {
    const {theme} = useSelector(state => state);
    useEffect(() => {
        document.body.className = theme.isLight ? '' : 'dark';
    }, [theme]);

    return (
        <>
            {children.map(child => child)}
        </>
    );
};

export default ThemeSwitcher;
