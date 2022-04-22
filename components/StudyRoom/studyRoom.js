import { useRef, useEffect } from "react";
import { window } from "../../public/images/index";
import Img from "next/image";
import styles from "./studyRoom.module.css";
import { cats } from "../../public/assets";

const StudyRoom = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const context = canvas?.getContext("2d");

    const catImage = new Image();
    const windowImage = new Image();
    catImage.src = "../../images/cat1.png";
    windowImage.src = "../../images/window.png";
    catImage.onload = () => {
      context.drawImage(catImage, 500, 500, 300, 300);
    };
    windowImage.onload = () => {
      windowImage.style.backgroundColor = "blue";

      context.drawImage(windowImage, 200, 200, 300, 150);
    };

    let i = 0;
    console.log("!!!!!!!");

    const cat = setInterval(() => {
      catImage.src = cats[i];
      context.clearRect(500, 500, 300, 300);
      context.drawImage(catImage, 500, 500, 300, 300);
      i = i === 1 ? 0 : 1;
    }, 800);

    return () => clearInterval(cat);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={1200} height={800}></canvas>
      {/* <Img className={styles.window} src={window} width={300} height={150} /> */}
    </div>
  );
};

export default StudyRoom;
