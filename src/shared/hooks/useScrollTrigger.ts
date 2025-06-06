import {useEffect, useState} from "react";

export const useScrollTrigger = (threshold = 0) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScroll;
};