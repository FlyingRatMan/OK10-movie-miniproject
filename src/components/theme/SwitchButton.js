import {useDispatch} from "react-redux";

import {toggle} from '../../store/themeSlice';
import './theme.css';

const SwitchButton = () => {
    const  dispatch = useDispatch();

    const onThemeClick = () => {
        dispatch(toggle());
    };

    return (
        <div>
            <button onClick={onThemeClick} className={'switch-btn'}>Change theme</button>
        </div>
    );
};

export default SwitchButton;
