import Image from "next/image";
import styles from "./play.module.css";
import { useState } from "react";

const Play = ({ image, musicName, setMusic }) => {
  const handleMusic = () => {
    setMusic(musicName);
  };

  return (
    <div className={styles.layout} onClick={handleMusic}>
      <Image className={styles.playImage} src={image} width={30} height={30} />
    </div>
  );
};

export default Play;
