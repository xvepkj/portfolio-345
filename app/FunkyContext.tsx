'use client';

import { createContext } from "react";

export const FunkyContext = createContext({
  isFunky: false,
  toggleFunky: () => {}
});
