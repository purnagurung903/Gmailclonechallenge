import React from "react";
import styled from "styled-components";
import Compose from "../buttons/Compose"
function Sidebar() {
  return (
    <Wrapper>
     <ComposeWrapper>
       <Compose />
     </ComposeWrapper>
     <SideBUttonWrapper>
       {/* all the buttons*/ }
     </SideBUttonWrapper>
     <MeetWrapper>
       {/*google meet stuff */}
     </MeetWrapper>
     <HangoutsWrapper>
       {/*hangout stuff */}
     </HangoutsWrapper>
     <ButtonIconsWrapper>
       
     </ButtonIconsWrapper>
    </Wrapper>

  )
}

export default Sidebar;

const Wrapper = styled.div``
const ComposeWrapper = styled.div``
const SideBUttonWrapper = styled.div``
const MeetWrapper = styled.div``
const HangoutsWrapper = styled.div``
const ButtonIconsWrapper = styled.div``