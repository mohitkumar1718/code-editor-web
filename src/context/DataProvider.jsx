import { createContext } from "react";
import { useState } from "react";

export const DataContext=createContext();

export const DataProvider = ({children}) => {

    const [html,setHtml]=useState('');
    const [css,setCss]=useState('');
    const [js,setJs]=useState('');
  return (
    <DataContext.Provider 
    value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
    }}
    >
    {children}
    </DataContext.Provider>
  )
}

