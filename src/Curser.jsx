import React, { useEffect, useState } from "react";

const Curser = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const scrollX = window.scrollX || 0;
      const scrollY = window.scrollY || 0;
      setCursorPosition({
        x: event.clientX + scrollX,
        y: event.clientY + scrollY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const textElements = document.querySelectorAll("p, h1, h2, h3, span, a, li");
    textElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      textElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div
      className="curser"
      style={{
        top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        width: isHovering ? "50px" : "20px",
        height: isHovering ? "50px" : "20px",
      }}
    ></div>
  );
};

export default Curser;
