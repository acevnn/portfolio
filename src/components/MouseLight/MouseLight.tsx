import { useEffect, useState } from "react";
import styles from "./MouseLight.module.scss";

export default function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={styles["mouse-light"]}
      style={{
        background: `radial-gradient(
  600px circle at ${position.x}px ${position.y}px,
  rgba(173, 216, 255, 0.2),
  transparent 80%
)`,
      }}
    />
  );
}
