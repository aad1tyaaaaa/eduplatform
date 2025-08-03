import React, { useEffect, useRef } from "react";

const TRAIL_COUNT = 5;
const TRAIL_SIZE = 30;
const CURSOR_SIZE = 40;

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const trailPos = useRef(
    Array(TRAIL_COUNT).fill({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    document.addEventListener("mousemove", onMouseMove);

    let animationFrameId: number;

    const animate = () => {
      trailPos.current = trailPos.current.map((pos, i) => {
        const target = i === 0 ? mousePos.current : trailPos.current[i - 1];
        const dx = target.x - pos.x;
        const dy = target.y - pos.y;
        const newX = pos.x + dx * 0.2;
        const newY = pos.y + dy * 0.2;

        if (trailRefs.current[i]) {
          trailRefs.current[i].style.transform = `translate3d(${newX}px, ${newY}px, 0) translate(-50%, -50%)`;
        }

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-purple-600 opacity-80"
        style={{
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          mixBlendMode: "difference",
          transition: "transform 0.1s ease-out",
          transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          className="fixed top-0 left-0 pointer-events-none z-40 rounded-full bg-purple-400 opacity-50"
          style={{
            width: TRAIL_SIZE - i * 5,
            height: TRAIL_SIZE - i * 5,
            mixBlendMode: "difference",
            transition: "transform 0.1s ease-out",
            transform: `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`,
          }}
        />
      ))}
    </>
  );
};
