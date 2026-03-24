import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const move = (e) => {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = e.clientX + "px";
      star.style.top = e.clientY + "px";

      document.body.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 500);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}