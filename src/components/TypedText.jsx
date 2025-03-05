import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hi, I'm Shiva Prasad Battula!"],
      typeSpeed: 50,
      backSpeed: 25,
    //   loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return <span ref={typedRef} className="text-xl font-bold text-blue-600"></span>;
};

export default TypedText;
