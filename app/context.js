"use client";
import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);
export default function DataProvider({ children, data }) {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <DataContext.Provider value={{ data, open, toggleSidebar }}>
      {children}
    </DataContext.Provider>
  );
}
