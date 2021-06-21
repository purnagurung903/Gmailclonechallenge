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

        <div>
           <MenuIcon />
        </div>
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
grid-template-columns: 25% auto;`
const Logo = styled.div`
display: flex;
height: 45px;
`
const SearchWrapper = styled.div``
const SearchBarWrapper = styled.div``
const IconsWrapper = styled.div``