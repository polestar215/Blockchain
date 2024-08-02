import { useState, useEffect, useCallback } from "react";
import { throttle } from "../utils";

const useHeaderStyle = ({ sideMenu, top, sizeThreshold } = {}) => {
  const [isTop, setIsTop] = useState(top);
  const [showSide, setShowSide] = useState(sideMenu);

  const handleWindowScroll = useCallback(() => {
    const topScroll = window.scrollY < 100;
    if (topScroll !== isTop) {
      setIsTop(topScroll);
    }
  }, [isTop]);

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth > sizeThreshold && showSide) {
      setShowSide((prevState) => !prevState);
    }
  }, [showSide, sizeThreshold]);

  const throttledHandleWindowScroll = throttle(handleWindowScroll);
  const throttledHandleWindowResize = throttle(handleWindowResize);

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleWindowScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleWindowScroll);
    };
  }, [throttledHandleWindowScroll]);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleWindowResize);
    return () => {
      window.removeEventListener("resize", throttledHandleWindowResize);
    };
  }, [throttledHandleWindowResize]);

  useEffect(() => {
    if (showSide) {
      document.querySelector("#__next").className = "blur";
    } else {
      document.querySelector("#__next").className = "";
    }
  }, [showSide]);

  return { isTop, showSide, setShowSide };
};

export default useHeaderStyle;
