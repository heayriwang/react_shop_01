import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const MainYoutube = () => {


    const option = {
        width: '100%',
        heigh: '600',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 0,
            loof: 1,
            showinfo: 0,

        },
    }


    return (
        <>
            <YouTube videoId="2g811Eo7K8U" opts={option} />

        </>
    )
}

export default MainYoutube;