import React, { useRef } from 'react';

const Player = ({video}) => {
    // const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    // const togglePlay = () => {
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };

    return (
            <iframe
                ref={videoRef}
                width="100%"
                height="600px"
                controls
                title='charity video'
                src={video}
            />
    )
}

export default Player;
   