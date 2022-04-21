import {useRef, useEffect} from 'react';

const StudyRoom = () => {

    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        const context = canvas?.getContext('2d');
        
        const image = new Image();
        image.src = "../../images/rainy.png";
        image.onload = () => {
            context.drawImage(image, 200, 200, 100, 100);
        }

    }, [canvasRef]);

    return (
        <canvas ref={canvasRef} width={500} height={500}>
        </canvas>
    )

}

export default StudyRoom;