import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriensList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={s.list}>
            {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */
                friends.map(friend => (
                    <li key={friend.id} className={s.item}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
        </ul>
    );
};

FriendList.protoTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
};

export default FriendList;