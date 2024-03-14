import React, { createContext } from "react";
import ParentComponent from "./ParentComponent";

export const GrandContext = createContext();

export const GrandParentComponent = () => {
  const data = "Hello da My G'Son"
  return (
    <div className="box border-2 border-neutral-900 p-3 m-2">
      <h3 className="font-bold">GrandParentComponent</h3>
      <GrandContext.Provider value={data}>
      <ParentComponent  />
      </GrandContext.Provider>
    </div>
  );
};
