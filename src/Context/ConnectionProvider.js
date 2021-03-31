import React, { useContext, useEffect, useState } from "react";
import { kBaseUrl } from "../constants";

const ConnectionContext = React.createContext();

export function useConnections() {
  return useContext(ConnectionContext);
}

export function ConnectionProvider({ children }) {
  const [connections, setConnections] = useState([]);
  const [invites, setInvites] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(kBaseUrl + "myconnections", {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setConnections(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetch(kBaseUrl + "request_received", {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setInvites(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    fetch(kBaseUrl + "suggest_connection", {
      credentials: "include",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <ConnectionContext.Provider
      value={{
        connections,
        setConnections,
        invites,
        setInvites,
        suggestions,
        setSuggestions,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}
