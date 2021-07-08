import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={styles.item} key={id}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
};
export default FriendsList;
