"use client";

import { useState, useEffect } from "react";

function useClientSide() {
  const [isClientSide, setIsClientSide] = useState(false);

  useEffect(() => {
    setIsClientSide(true);
  }, []);

  return isClientSide;
}

const ClientSide = ({ children }) => {
  const isClientSide = useClientSide();

  return isClientSide && children;
};

export default ClientSide;
