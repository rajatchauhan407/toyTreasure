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
            <iframe
                ref={videoRef}
                width="100%"
                height="500px"
                controls
                title='charity video'
                // src="https://www.youtube.com/embed/7sDY4m8KNLc"
                src={video}

            />
                {/* <source src={video} type="video/mp4" /> */}
        </div>
    )
}

export default Player;
   