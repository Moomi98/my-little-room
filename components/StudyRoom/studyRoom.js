import {useRef, useEffect} from 'react';
import { rainy } from '../../public/images';

const StudyRoom = () => {

    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        
        const image = new Image();
        image.src = rainy;
        image.onload = () => {
            context.drawImage(image, 0, 0, 500, 500);
        }
    }, []);

    return (
        <canvas ref={canvasRef}>
        </canvas>
    )

}

export default StudyRoom;