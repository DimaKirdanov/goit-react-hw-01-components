import PropTypes from 'prop-types';
import styles from './friendList.module.css';

export default function FriendListItem({ isOnline = false, avatar, name, id }) {
  const className = isOnline
    ? styles.status
    : styles.status + ' ' + styles.offline;
  return (
    <li key={id} className={styles.itemFriend}>
      <span className={className}>{isOnline}</span>
      <img className={styles.avatarFriends} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
