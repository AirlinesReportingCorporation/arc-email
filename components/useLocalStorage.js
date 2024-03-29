import React, { useState, useEffect } from "react";

import ARCLogo from "./ARCLogo";
import TACLink from "./TACLink";
import TACJumbo from "./TACJumbo";
import TACBottom from "./TACBottom";



function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = localStorage.getItem(key);
  const lastSaved = JSON.parse(saved);
  return lastSaved || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
