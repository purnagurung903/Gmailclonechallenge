import React from "react";
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header(){
  return (
    <Wrapper>
      <LogoWrapper>

        <Menu>
           <MenuIcon />
        </Menu>
        <Logo>
        <img src="https://cdn.vox-cdn.com/thumbor/ttJ6TTVOWTTi2p3EaeeLfS4fUS8=/0x0:1320x880/1400x933/filters:focal(555x335:765x545):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg" />
        </Logo>

      </LogoWrapper>
      <SearchWrapper>

        <SearchBarWrapper>
           <SearchIcon />
           <input type="text" placeholder="Search mail" />
           <ExpandMoreIcon />
        </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
          <HelpOutlineIcon />
          <SettingsIcon />
          <AppsIcon />
          <AccountCircleIcon />
        </IconsWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
display: grid;
grid-template-columns: 270px auto 170px;
border-bottom: 1px solid lightgray;
height: 70px;
align-items: center;
`
const LogoWrapper = styled.div`
height: 45px;
display: grid;
grid-template-columns: 25% auto;
`
const Logo = styled.div`
display: flex;
height: 45px;
`
const Menu = styled.div`
display: grid;
place-items: center;
`
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div`
background-color: #f1f3f4;
width: 100%;
max-width: 750px;
display: grid;
grid-template-columns: 10% auto 7%;
place-items: center;
height: 45px;
border-radius: 6px;

.MuiSvgIcon-root{
  color: #5f6368;
}
input {
  width: 100%;
  height: 30px;
  background: none;
  border: none;
  font-size: 18px;

  :focus{
    outline: none;
  }
}
`
const IconsWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, auto);
.MuiSvgIcon-root{
  color: #5f6368;
}
`