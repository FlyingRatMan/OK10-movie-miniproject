import user from './user.png';
import './user.css';

const User = () => {
    return (
        <div className={'user'}>
            <img
                src={user}
                alt='user'
                width={'50px'}
            />
            <h3>User Name</h3>
        </div>
    );
};

export default User;
