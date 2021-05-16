import React, { useState, useEffect } from 'react';

export const useMediaQuery = (mediaQuery) => {
  const [isVerified, setIsVerified] = useState(
    !!window ? !!window.matchMedia(mediaQuery).matches : false
  );

  useEffect(() => {
    const doStuff = () => {
      const mediaQueryList = window.matchMedia(mediaQuery);
      const documentChangeHandler = () => setIsVerified(!!mediaQueryList.matches);

      mediaQueryList.addListener(documentChangeHandler);

      documentChangeHandler();
      return () => {
        mediaQueryList.removeListener(documentChangeHandler);
      };
    };
    if (window) {
      doStuff();
    }
  }, [mediaQuery]);

  return isVerified;
};
