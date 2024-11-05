import React, { useEffect, useState } from "react";

export const BasicSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const minValue = 0;
  const maxValue = 3;
  const step = 1;

  const handleNext = () => {
    setSliderValue((prevValue) => Math.min(prevValue + step, maxValue));
  };

  const handlePrev = () => {
    setSliderValue((prevValue) => Math.max(prevValue - step, minValue));
  };

  useEffect(() => {
    setSliderValue(minValue);

    const interval = setInterval(() => {
      setSliderValue((prevValue) => {
        if (prevValue + step > maxValue) {
          return minValue;
        }
        return prevValue + step;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <p>value: {sliderValue}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
