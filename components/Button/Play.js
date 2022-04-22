import Image from "next/image";
import styles from "./play.module.css";
import { useState, useEffect, useRef } from "react";

const Play = ({ image, musicName, currentMusic, setCurrentMusic }) => {
  const [isPlay, setIsplay] = useState(false);
  const [music, setMusic] = useState(null);
  const buttonRef = useRef();

  const handleMusic = (e) => {
    setCurrentMusic(musicName);
    setIsplay(true);
  };

  useEffect(() => {
    if (!music) {
      setMusic(musicName);
    } else if (currentMusic !== music) {
      setIsplay(false);
    }
  }, [currentMusic]);

  useEffect(() => {
    if (isPlay) {
      buttonRef.current.style.border = `2px solid black`;
      buttonRef.current.style.filter = `opacity 1`;
    } else {
      buttonRef.current.style.border = `2px solid #d3d3d3`;
      buttonRef.current.style.filter = `opacity(0.5) drop-shadow(0 0 0 white)`;
    }
  }, [isPlay]);

  return (
    <div ref={buttonRef} className={styles.layout} onClick={handleMusic}>
      <Image className={styles.playImage} src={image} width={30} height={30} />
    </div>
  );
};

export default Play;
