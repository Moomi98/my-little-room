import styles from "./volumeController.module.css";

const VolumeController = ({ audio }) => {
  const handleVolume = (e) => {
    audio.volume = e.target.value * 0.01;
  };

  return (
    <input
      className={styles.volumeController}
      type="range"
      min="0"
      max="100"
      step="1"
      onInput={handleVolume}
    />
  );
};

export default VolumeController;
