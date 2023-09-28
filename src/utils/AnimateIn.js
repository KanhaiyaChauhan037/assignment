import React from "react";
import { useInView } from "react-intersection-observer";

const AnimateIn = ({
  threshold = 0.15,
  triggerOnce = false,
  distance = 100,
  direction,
  sign,
  ...remainingProps
}) => {
  const [ref, inView] = useInView({ threshold, triggerOnce });

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 300ms, transform 1.5s",
        opacity: inView ? 1 : 0,
        transform: `${direction}(${inView ? 0 : distance}px)`,
      }}
      {...remainingProps}
    />
  );
};

export default AnimateIn;