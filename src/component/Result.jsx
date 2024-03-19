import { Box } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
export const Result = () => {
    const {html,css,js}=useContext(DataContext);
    const srcCode=`
    <html>  
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
   </html>
`
  return (
    <Box sx={{height:'100%'}}>
        {/* <iframe 
        srcDoc={srcCode}
        sandbox="allow-scripts"
        width='100%'
        height='100%'
         > </iframe> */}
         <iframe srcDoc={srcCode} sandbox="allow-scripts"
        width='100%'
        height='100%'  ></iframe>
    </Box>
  )
}
