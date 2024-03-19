import { useContext } from "react";
import Editor from "./Editor"
import { Box } from "@mui/material"
import { DataContext } from "../context/DataProvider";
export const Code = () => {
  const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
  return (
    <>
    <Box sx={{display:'flex', justifyContent:'space-between', }}>

   <Editor heading="HTML" symbol="/" color="#FF3C41" value={html} onChange={setHtml}/>
   <Editor heading="CSS" symbol="*" color="#0EBEFF"value={css} onChange={setCss}/>
   <Editor heading="JAVASCRIPT" symbol="{}" color="#FCD000" value={js} onChange={setJs}/>
    </Box>
    </>
  )
}
