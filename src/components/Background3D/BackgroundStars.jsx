import React, { useEffect, useRef } from "react";
import "./BackgroundStars.css";

const Star = (w, h, speedRange = [0.2, 1.6]) => {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    z: Math.random() * 1, // depth 0..1
    size: Math.random() * 1.5 + 0.2,
    speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
  };
};

const BackgroundStars = ({ starCount = 160 }) => {
  const canvasRef = useRef(null);
  const rafRef = useRef();
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    // init stars
    starsRef.current = Array.from({ length: starCount }, () => Star(w, h));

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      // re-seed some stars so they fit the new viewport
      starsRef.current = starsRef.current.map((s) => ({
        ...s,
        x: Math.random() * w,
        y: Math.random() * h,
      }));
    };

    window.addEventListener("resize", resize);

    // draw loop
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // gradient background subtle
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0b0f14");
      g.addColorStop(1, "#0b0f14");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // draw stars
      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];

        // move stars toward bottom-right for parallax effect
        s.x += s.speed * (0.6 + s.z);
        s.y += s.speed * (0.2 + s.z * 0.8);
        s.z += 0.0008 * s.speed; // slight 'coming closer' illusion

        // respawn if outside
        if (s.x > w + 20 || s.y > h + 20) {
          starsRef.current[i] = Star(w, h);
          continue;
        }

        // star glow
        const rad = s.size * (1 + s.z * 2);
        const alpha = 0.6 + s.z * 0.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(s.x, s.y, rad, 0, Math.PI * 2);
        ctx.fill();

        // tiny tail for motion
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.08})`;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.speed * 6, s.y - s.speed * 3);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [starCount]);

  return <canvas className="bg-stars-canvas" ref={canvasRef} />;
};

export default BackgroundStars;
