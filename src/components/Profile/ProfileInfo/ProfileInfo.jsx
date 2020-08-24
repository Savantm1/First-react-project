import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
 return (
  <div className={styles.profile}>
   <img className={styles.img} src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="background"></img>
   <img className={styles.avatar} src={props.profile.photos.large} alt="avatar"></img>
   <div className={styles.desc}>
     <p className={styles.name}>{props.profile.fullName}</p>
     <p className={styles.description}>{props.profile.aboutMe}</p>
     <p className={styles.social}>Социальные сети</p>
     <ul className ={styles.list}>
       <li className={styles.item}>{props.profile.contacts.facebook}</li>
       <li className={styles.item}>{props.profile.contacts.vk}</li>
       <li className={styles.item}>{props.profile.contacts.twitter}</li>
       <li className={styles.item}>{props.profile.contacts.instagram}</li>
       <li className={styles.item}>{props.profile.contacts.github}</li>
     </ul>
   </div>
  </div>
 )
}

export default ProfileInfo;