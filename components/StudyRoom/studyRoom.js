import { useRef, useEffect } from "react";
import { window } from "../../public/images/index";
import Img from "next/image";
import styles from "./studyRoom.module.css";

const StudyRoom = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const context = canvas?.getContext("2d");

    const image = new Image();
    image.src = "../../images/rainy.png";
    image.onload = () => {
      context.drawImage(image, 200, 200, 100, 100);
    };
  }, [canvasRef]);

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500}></canvas>
      <Img
        className={styles.window}
        src={window}
        width={400}
        height={300}
      ></Img>
    </div>
  );
};

export default StudyRoom;
