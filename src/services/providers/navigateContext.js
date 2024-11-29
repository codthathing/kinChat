import React, { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";


export const NavigateContext = createContext();

export const NavigateContextProvider = ({ children }) => {
  const [showPreLoad, setShowPreLoad] = useState(false);
  const [accounts, setAccounts] = useLocalStorage("accounts", []);
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [showPages, setShowPages] = useState({ profile: false, search: false, invite: false });


  return <NavigateContext.Provider value={{ accounts, setAccounts, showSideMenu, setShowSideMenu, showPreLoad, setShowPreLoad, showPages, setShowPages }}>{children}</NavigateContext.Provider>;
};
