import { useRef, useEffect } from "react";
import Img from "next/image";
import styles from "./studyRoom.module.css";
import { cats } from "../../public/assets";
import nightSky from "../canvasSources/nightSky";

const StudyRoom = () => {
  const canvasRef = useRef(null);

  const onResize = (canvas) => {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    // window.addEventListener("resize", () => {
    //   onResize(canvas);
    // });

    const context = canvas?.getContext("2d");

    const catImage = new Image();
    const windowImage = new Image();
    const nightSkyImage = new Image();
    catImage.src = "../../images/cat1.png";
    windowImage.src = "../../images/window.png";
    nightSkyImage.src = "../../images/nightSky.png";

    catImage.onload = () => {
      context.drawImage(catImage, 500, 500, 300, 300);
    };

    nightSky(context);

    windowImage.onload = () => {
      context.drawImage(windowImage, 200, 200, 300, 150);
    };
    let i = 0;

    const cat = setInterval(() => {
      catImage.src = cats[i];
      context.clearRect(500, 500, 300, 300);
      context.drawImage(catImage, 500, 500, 300, 300);
      i = i === 1 ? 0 : 1;
    }, 800);

    return () => clearInterval(cat);
  }, []);

  return <canvas ref={canvasRef} width={1200} height={800}></canvas>;
};

export default StudyRoom;
