import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import s from './FriendListItem.module.css';

const FriendListItem = ({
    avatar = 'defaultImage',
    name,
    isOnline
}) => {
    return (
        <>
            <span className={s.status} style={{backgroundColor: isOnline ? "green" : "red"}}>{isOnline}</span>
    <img className={s.avatar} src={avatar ?? defaultImage} alt="" width="48" />
    <p className={s.name}>{name}</p>
    </>);
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;