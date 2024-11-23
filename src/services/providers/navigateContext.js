import React, { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

localStorage.clear();
export const NavigateContext = createContext();
let perAccFromLocal = JSON.parse(localStorage.getItem("perAccount")) || {};

export const NavigateContextProvider = ({ children }) => {
  const [showPreLoad, setShowPreLoad] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [toPass, setToPass] = useState("");
  const [searchAccount, setSearchAccount] = useState(false);
  const [inviteFriends, setInviteFriends] = useState(false);
  const [accounts, setAccounts] = useLocalStorage("accounts", []);
  const [perProfile, setPerProfile] = useState(perAccFromLocal);
  useEffect(() => {
    localStorage.setItem("perAccount", JSON.stringify(perProfile));
  }, [perProfile]);
  const [profile, setProfile] = useState(false);

  return <NavigateContext.Provider value={{ accounts, setAccounts, perProfile, setPerProfile, profile, setProfile, searchAccount, setSearchAccount, inviteFriends, setInviteFriends, showLogin, setShowLogin, showLoginPass, setShowLoginPass, toPass, setToPass, showPreLoad, setShowPreLoad }}>{children}</NavigateContext.Provider>;
};
