import Box from '@mui/material/Box';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import '../App.css'
import { useState } from 'react';


const Editor = ({heading,symbol,color,value,onChange}) => {
  const [toggle,setToggel]=useState(true);
  return (
    <Box sx={{background:'black', color:'white', flexBasis:'0', paddingX:'8px', flexGrow:toggle?'1':'0'  }}> 
        <Box sx={{display:'flex', justifyContent:'space-between' }}>
             <Box sx={{backgroundColor:'#31363F ', color:'white', padding:'5px', marginRight:'5px', display:'flex'}}>
                <Box sx={{paddingX:'5px', marginRight:'5px', display:'flex', justifyContent:'center', backgroundColor:color, borderRadius:'5px'}} >{symbol}</Box>
                  {heading}
                 </Box>
             <Box><CloseFullscreenIcon
             onClick={()=>{setToggel(!toggle)}}
              className='controlled-editor'
             /></Box>
        </Box>
        <CodeMirror
         value={value}
          options={{
            theme: 'material',
            lineNumbers: true
          }
          }
          onBeforeChange={(editor, data, value) => {
            onChange(value);
  }}
        />
    </Box>
  )
}

export default Editor