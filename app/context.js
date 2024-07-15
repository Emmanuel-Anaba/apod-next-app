"use client";
import { createContext, useContext } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export default function DataProvider({ children, data }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
