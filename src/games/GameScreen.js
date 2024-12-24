import React, { use, useContext, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, Content2Xl, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";
import { MainHeader } from "MainLandingPage";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import { PrimaryButton } from "components/misc/Buttons";
import { ReactComponent as MaxIcon } from "feather-icons/dist/icons/maximize.svg";
import { Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { gameData } from "game-config";
import gameNotFound from "images/gameNotFound.jpg";
import { AppContext } from "AppContext";
import { Cookies } from "react-cookie";
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;
const CenteredContainer = styled.div`
  ${tw`flex flex-col items-center`}
`;
  const GameContainer = styled.iframe`
  ${tw`sm:h-80 sm:w-128 md:h-96 md:w-256 xl:h-256 xl:w-512 rounded-lg shadow`}
  display: block;
  margin: 1rem auto;
`;
const FullScreenButton = tw.button`px-2 py-2 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300`;;

const FullScreenText = tw.p`hidden md:block text-center text-sm font-semibold text-gray-100`;


export default () => {
  const {userData,setUserData} = useContext(AppContext);
  const {name} = useParams();
  const gameUrl = gameData[name]?.url;
  const {title,description} = gameData[name] || {title:"Game Not Found",description:"The game you are looking for is not found."};
  const [full,setFull] = React.useState(false);
  function goFullscreen(id) {
    var element = document.getElementById(id);
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      const gameIndex = userData.gameData.findIndex((game) => game.game === name);
      if (gameIndex !== -1) {
        const cookies = new Cookies();
        const newUserData = cookies.get("userData");
        newUserData.gameData[gameIndex] = { ...newUserData.gameData[gameIndex], lastPlayed: new Date(), playtime: newUserData.gameData[gameIndex].playtime + 0.25 };
        cookies.set("userData", newUserData, { path: "/" });
        console.log("Game data updated");
        setUserData(newUserData);
      }else{
        console.log("Game data not found",userData);
      }
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(full){
      goFullscreen("game");
      setFull(false);  
    }
  }, [full]);

  return (<>
  <Container>
  <Content2Xl>
      <MainHeader />
      </Content2Xl>
      <Content2Xl>
        {title && <Heading>{title}</Heading>}
        {description && <Description>{description}</Description>}
      </Content2Xl>
  {gameUrl?<>
     <GameContainer src={gameUrl} width="100%" height="100%" allowFullScreen id="game"/>
    <CenteredContainer>
    <FullScreenButton onClick={()=>setFull(!full)} style={
      {
          position:"absolute",
          bottom:20,
          right:'13%', 
          zIndex:1000
      }
    }><Stack direction="row" alignItems='center' spacing={1}><MaxIcon/>
    <FullScreenText> Fullscreen</FullScreenText>
    </Stack></FullScreenButton>
    </CenteredContainer>
    
  </> : <CenteredContainer><img src={gameNotFound} width={"30%"} style={{borderRadius:50}}/></CenteredContainer>}
  </Container>
  <MiniCenteredFooter />
  
  </>); 
};
