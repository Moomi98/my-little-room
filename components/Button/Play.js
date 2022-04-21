import Image from 'next/image';
import styles from './play.module.css'

const Play = ({image}) => {
    return(
        <div className={styles.layout}>
            <Image className={styles.playImage} src={image} width={30} height={30}/>
        </div>
    )
}

export default Play;