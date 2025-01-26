import { useEffect } from "react";
import { AboutVideo } from "../components/videoPage/AboutVideo";
import { VideoPlayer } from "../components/videoPage/VideoPlayer";

export const VideoPage = () => {
    const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'auto' });
            /* window.scrollTo({ top: 0, behavior: 'smooth' }); */
        }
    
    useEffect(() => {
        scrollToTop();
    }, [])

    return(
        <>
            <VideoPlayer/>
            <AboutVideo/>
        </>
    );
};