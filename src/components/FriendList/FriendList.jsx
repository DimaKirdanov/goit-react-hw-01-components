import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import FriendListItem from './FriendListItem';
export default function FriendList({ friends }) {
      console.log(friends);
    return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
