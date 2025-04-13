"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import cn from "classnames";

import { useMounted } from "@/shared";
import { VideoPlayerProps } from "./VideoPlayer.types";

import "video.js/dist/video-js.css";
import "./VideoPlayer.scss";
import styles from "./VideoPlayer.module.scss";

const VideoPlayer = ({ src }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const playerRef = useRef<Player | null>(null);

    const { mounted } = useMounted();

    useEffect(() => {
        if (mounted && videoRef.current && !playerRef.current) {
            playerRef.current = videojs(videoRef.current, {
                controls: true,
                autoplay: false,
                fluid: true,
                responsive: true,
                sources: [
                    {
                        src: src,
                        type: "video/mp4"
                    },
                    {
                        src: src,
                        type: "video/webm"
                    }
                ]
            });
        }

        return () => {
            playerRef.current?.dispose();
            playerRef.current = null;
        };
    }, [src, videoRef, mounted]);

    return (
        <div className={styles.video}>
            <video
                ref={videoRef}
                id="video-js"
                className={cn(styles.video__player, "video-js")}
                playsInline
            />
        </div>
    );
};

export default VideoPlayer;
