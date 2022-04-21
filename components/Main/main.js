import Play from '../Button/Play';
import styles from './main.module.css';
import {bonfire, wind, rainy, sun} from '../../public/images/index'
import StudyRoom from '../StudyRoom/studyRoom';

const Main = () => {
    return(
        <div className={styles.layout}>
            <div className={styles.studyRoom}>
                <StudyRoom/>
            </div>
            <div className={styles.workSpace}>
                <div className={styles.playerLayout}>
                    <Play image={bonfire}/>
                    <Play image={sun}/>
                    <Play image={wind}/>
                    <Play image={rainy}/>
                </div>
            </div>
        </div>
    )
}

export default Main;