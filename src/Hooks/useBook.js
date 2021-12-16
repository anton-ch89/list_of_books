import { useState } from "react";

export const useBook = () => {
  const [book, setBook] = useState("");
  return { book, setBook };
};
