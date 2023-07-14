import React, { useState, useRef } from 'react';

const Player = ({video}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
            >
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player;
   