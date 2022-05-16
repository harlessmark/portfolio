import { useState, useEffect } from "react";

type Props = {
  children: JSX.Element;
  initialState: boolean;
  thresholdValue: number;
}

/**
 * A custom hook to show or hide a component based on scrollY value.
 *
 * @param {JSX} children - The component to show or hide
 * @param {number} thresholdValue - The threshold in which to show or hide the component
 * @param {boolean} initialState - The initial state of the component
 * @returns component or undefined
 */
const UseDisplay = (props: Props): JSX.Element | null => {
  const [show, setShow] = useState(props.initialState || false);
  const [threshold] = useState(props.thresholdValue);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > threshold ? setShow(true) : setShow(false);
    });
  });

  if (!show) return null;

  return props.children;
};

export default UseDisplay;
