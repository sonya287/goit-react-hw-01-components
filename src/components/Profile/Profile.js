import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default-image.png';

import styles from './Profile.module.css';

const Profile = ({ src, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={src} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.moreInfo}>@{tag}</p>
        <p className={styles.moreInfo}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.stat_list}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.stat_list}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.stat_list}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.defaultProps = {
  src: defaultImage,
};
Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
