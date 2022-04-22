import { useState, useEffect } from "react";
import styles from "./timer.module.css";

const Timer = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) < 59) {
        setSeconds(
          parseInt(seconds) < 9
            ? "0" + (parseInt(seconds) + 1)
            : parseInt(seconds) + 1
        );
      } else if (parseInt(seconds) === 59) {
        if (parseInt(minutes) === 59) {
          setHours(
            parseInt(hours) < 9
              ? "0" + (parseInt(hours) + 1)
              : parseInt(hours) + 1
          );
        } else {
          setMinutes(
            parseInt(minutes) < 9
              ? "0" + (parseInt(minutes) + 1)
              : parseInt(minutes) + 1
          );
        }
        setSeconds("00");
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <div className={styles.layout}>
      <div className={styles.time}>{hours}</div>
      <div style={{ marginBottom: "10px" }} className={styles.time}>
        :
      </div>
      <div className={styles.time}>{minutes}</div>
      <div style={{ marginBottom: "10px" }} className={styles.time}>
        :
      </div>
      <div className={styles.time}>{seconds}</div>
    </div>
  );
};

export default Timer;
