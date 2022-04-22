import Play from "../Button/Play";
import { bonfire, wind, rainy, sun } from "../../public/images/index";
import styles from "./controller.module.css";
import { useState, useEffect, useRef } from "react";

const Controller = () => {
  const [audio, setAudio] = useState(null);
  const [music, setMusic] = useState(null);

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio());
    } else {
      audio.src = `../../audios/${music}.mp3`;
      audio.load();
      audio.play();
      audio.loop = true;
    }
  }, [music]);

  return (
    <div className={styles.layout}>
      <Play
        image={bonfire}
        musicName={"bonfire"}
        setCurrentMusic={setMusic}
        currentMusic={music}
      />
      <Play
        image={sun}
        musicName={"sun"}
        setCurrentMusic={setMusic}
        currentMusic={music}
      />
      <Play
        image={wind}
        musicName={"wind"}
        setCurrentMusic={setMusic}
        currentMusic={music}
      />
      <Play
        image={rainy}
        musicName={"rainy"}
        setCurrentMusic={setMusic}
        currentMusic={music}
      />
    </div>
  );
};

export default Controller;
