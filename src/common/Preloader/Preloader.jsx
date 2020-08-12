import React from "react";
import preloader from "../../assets/images/preload.gif";
import styles from "./Preloader.module.css";

let Preloader = (props) => {
 return (
  <>
   <div className={styles.block}>
    <img src={preloader} alt="loading" className={styles.image}></img>
   </div>
  </>
 )
}


export default Preloader;