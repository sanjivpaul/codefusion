import React, { useEffect, useState } from "react";
import "./Typewriter.css"; // Import your CSS here

const Typewriter = ({ phrases, period }) => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = phrases[loopNum % phrases.length];

  useEffect(() => {
    const tick = () => {
      const fullText = currentPhrase;
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

    //   let delta = 200 - Math.random() * 100;
      let delta = 200;

      if (isDeleting) {
        delta /= 2;
      }

      // Logic to control when to switch to deleting
      if (!isDeleting && updatedText === fullText) {
        delta = period;
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        delta = 500; // Pause before starting the next phrase
      }

      setTimeout(tick, delta);
    };

    const timeoutId = setTimeout(() => {
      tick();
    }, 1000); // Initial delay before starting

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, currentPhrase, period]);

  return (
    <h1>
      <a href="#" className="typewrite">
        <span className="wrap">{text}</span>
      </a>
    </h1>
  );
};

export default Typewriter;
