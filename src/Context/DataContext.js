import { React, useState, createContext } from "react";

export const DataContext = createContext();

export function DataProvider(props) {
  const [data, setData] = useState({});

  return (
    <div>
      <DataContext.Provider value={[data, setData]}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
}
