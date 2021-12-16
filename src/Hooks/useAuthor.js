import { useState } from "react";

export const useAuthor = () => {
  const [author, setAuthor] = useState("");
  return { author, setAuthor };
};
