import {AppBar,Toolbar, styled} from '@mui/material';
const Container=styled(AppBar)`
background:#060606;
height:9vh;
`
export const Header = () => {
    const logo="https://blog.codepen.io/wp-content/uploads/2023/09/logo-white.png";
  return (
    <Container position="static" >
        <Toolbar>
            <img src={logo} style={{width: 40}} alt="logo" />
        </Toolbar>
    </Container>
  )
}
