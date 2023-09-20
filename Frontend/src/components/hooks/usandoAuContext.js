import { AuContext } from "../context/AuContext";
import { useContext } from "react";

export const usandoAuContext = () => {
  const context = useContext(AuContext)

  if(!context) {
    throw Error('Sorry, but the usandoAuContext has to be in the AuContextProvider')
  }
  return context
}