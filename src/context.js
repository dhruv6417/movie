import React, { useContext, useState } from "react";
import useFetch from "./useFetch";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("thriller");
  const { isLoading, isError, movie } = useFetch({ query });
  // console.log("re-render");
  return (
    <AppContext.Provider value={{ query, movie, setQuery, isLoading, isError }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
