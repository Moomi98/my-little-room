import Play from "../Button/Play";
import styles from "./main.module.css";
import StudyRoom from "../StudyRoom/studyRoom";
import Controller from "../Controller/Controller";

const Main = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.studyRoom}>
        <StudyRoom />
      </div>
      <div className={styles.workSpace}>
        <Controller />
      </div>
    </div>
  );
};

export default Main;
