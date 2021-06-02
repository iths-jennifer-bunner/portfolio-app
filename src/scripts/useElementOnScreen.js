import { useState, useEffect, useRef } from "react";

export const useElementOnScreen = (options) => {
  const containerRef = useRef();
  const containerRef2 = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  const callbackFunction2 = (entries) => {
    const [entry2] = entries;
    setIsVisible2(entry2.isIntersecting);
  };

  useEffect(() => {
    const current = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [containerRef, options]);
  useEffect(() => {
    const current2 = containerRef2.current;
    const observer2 = new IntersectionObserver(callbackFunction2, options);

    if (containerRef2.current) observer2.observe(containerRef2.current);
    return () => {
      if (current2) observer2.unobserve(current2);
    };
  }, [containerRef2, options]);
  return [containerRef, containerRef2, isVisible, isVisible2];
};
