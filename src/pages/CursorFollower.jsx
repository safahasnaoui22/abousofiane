import "./CursorFollower.css";
import React, { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      elements.forEach(element => {
        if (element.matches('.letter')) {
          element.classList.add('hovered');
        } else {
          element.classList.remove('hovered');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div className="cursor-follower" style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CursorFollower;

