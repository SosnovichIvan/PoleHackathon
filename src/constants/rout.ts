import React from "react";
import Main from "pages/Main";
import { MAIN_PATH, REGISTER_PATH } from "constants/path";
import { Login } from "pages/Login";
import { Register } from "pages/Register";

interface Rout {
  path: string;
  Element: React.FC;
  isAuthValue: boolean;
}

export const routs: Rout[] = [
  {
    path: MAIN_PATH,
    Element: Login,
    isAuthValue: false,
  },
  {
    path: REGISTER_PATH,
    Element: Register,
    isAuthValue: false,
  },
  {
    path: MAIN_PATH,
    Element: Main,
    isAuthValue: true,
  },
];