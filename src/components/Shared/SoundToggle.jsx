import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./SoundToggle.css";
import flute from "../../assets/flute.mp3";

const SoundToggle = ({ volume = 0.25 }) => {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const h = new Howl({
      src: [flute],
      loop: true,
      volume,
      html5: true,
      onend: () => {},
    });
    setSound(h);

    // cleanup
    return () => {
      h.unload();
    };
  }, [volume]);

  const toggle = () => {
    if (!sound) return;
    if (playing) {
      sound.pause();
      setPlaying(false);
    } else {
      sound.play();
      setPlaying(true);
    }
  };

  return (
    <button
      aria-label={playing ? "Turn sound off" : "Turn sound on"}
      className={`sound-toggle ${playing ? "on" : "off"}`}
      onClick={toggle}
    >
      {playing ? <FaVolumeUp /> : <FaVolumeMute />}
    </button>
  );
};

export default SoundToggle;
