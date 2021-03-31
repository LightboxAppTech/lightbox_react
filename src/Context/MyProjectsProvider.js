import React, { useContext, useEffect, useState } from "react";
import { kBaseUrl } from "../constants";
import { useSocket } from "./SocketProvider";
import { UserContext } from "./UserContext";

const MyProjectsContext = React.createContext();

export function useMyProjects() {
  return useContext(MyProjectsContext);
}

export function MyProjectsProvider({ children }) {
  const [myprojects, setMyProjects] = useState([]);
  const socket = useSocket();
  const { userProfile } = useContext(UserContext);

  return (
    <MyProjectsContext.Provider
      value={{
        myprojects,
        setMyProjects,
      }}
    >
      {children}
    </MyProjectsContext.Provider>
  );
}
