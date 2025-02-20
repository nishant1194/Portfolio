import React, { useState, useEffect } from "react";

const ScrambledText = ({ text, duration = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const characters = "!@#$%^&*():{};|,.<>/?";

  useEffect(() => {
    let timeout;
    let frame = 0;
    const totalFrames = Math.round(duration / 50); // 50ms per frame

    const scrambleText = () => {
      frame++;
      const progress = frame / totalFrames;

      if (progress >= 1) {
        setDisplayedText(text);
        return;
      }

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " " || Math.random() > progress) {
            return char;
          }
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join("");

      setDisplayedText(scrambled);
      timeout = setTimeout(scrambleText, 50);
    };

    scrambleText();

    return () => clearTimeout(timeout);
  }, [text, duration, characters]);

  return <h1 style={{ fontFamily: "Outfit", fontSize: "4rem" }}>{displayedText}</h1>;
};

const IntroPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#0b1338", color: "white" }}>
      <ScrambledText text="Welcome to My Website" duration={2000} />
    </div>
  );
};

export default IntroPage;