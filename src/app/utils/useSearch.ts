"use client"
import { useContext } from "react";
import SearchContext from "../context/searchValue";

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
