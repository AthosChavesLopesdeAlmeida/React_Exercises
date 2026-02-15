import { useContext } from "react";
import { AppContext } from "./context";

const useGlobalContext = () => {
  const context = useContext(AppContext)
  
  if (context === undefined) {
    throw new Error('useGlobalContext deve ser usado dentro de AppProvider')
  }
  
  return context
}

export default useGlobalContext;