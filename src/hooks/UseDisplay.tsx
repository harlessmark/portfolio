import { useState, useEffect } from "react";

/**
 * A custom hook to show or hide a component based ono scrollY value.
 *
 * @param {JSX} component - The component to show or hide
 * @param {number} thresholdValue - The threshold in which to show or hide the component
 * @param {boolean} initialState - The initial state of the component
 * @returns component or undefined
 */
const UseDisplay = (
  component: JSX.Element,
  thresholdValue: number,
  initialState: boolean = false
): JSX.Element | undefined => {
  const [show, setShow] = useState(initialState);
  const [threshold, _] = useState(thresholdValue); // eslint-disable-line no-unused-vars

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > threshold ? setShow(true) : setShow(false);
    });
  });

  if (!show) return;

  return component;
};

export default UseDisplay;
