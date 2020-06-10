import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
 return (
  <div className={styles.profile}>
   <img className={styles.img} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="background"></img>
   <img className={styles.avatar} src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg" alt="avatar"></img>
   <p className={styles.desc}>descriptions</p>
  </div>
 )
}

export default ProfileInfo;