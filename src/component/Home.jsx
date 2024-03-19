import { Header } from "./Header"
import { Code } from "./Code"
import { Result } from "./Result"
import { Box } from "@mui/material"
const Home = () => {
  return (
    <Box sx={{height:'100%'}}>
      <Header/>
      <Code/>
      <Result/>
    </Box>
  )
}

export default Home