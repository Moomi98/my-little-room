import Play from "../Button/Play";
import { bonfire, wind, rainy, sun } from "../../public/images/index";
import styles from "./controller.module.css";
import { useState, useEffect, useRef } from "react";

const Controller = () => {
  const [audio, setAudio] = useState(null);
  const [music, setMusic] = useState(null);
  const playRefs = useRef([]);

  const setButtionBrightness = () => {
    playRefs.current.forEach((playButton) => {
      console.log(playButton);
    });
  };

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio());
    } else {
      audio.src = `../../audios/${music}.mp3`;
      audio.load();
      audio.play();
      audio.loop = true;
      setButtionBrightness();
    }
  }, [music]);

  return (
    <div className={styles.layout}>
      <Play
        mref={(e) => (playRefs.current[0] = e)}
        image={bonfire}
        musicName={"bonfire"}
        setMusic={setMusic}
      />
      <Play
        mref={(e) => (playRefs.current[1] = e)}
        image={sun}
        musicName={"sun"}
        setMusic={setMusic}
      />
      <Play
        mref={(e) => (playRefs.current[2] = e)}
        image={wind}
        musicName={"wind"}
        setMusic={setMusic}
      />
      <Play
        mref={(e) => (playRefs.current[3] = e)}
        image={rainy}
        musicName={"rainy"}
        setMusic={setMusic}
      />
    </div>
  );
};

export default Controller;
