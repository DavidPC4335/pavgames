import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import { AppContext } from "AppContext";
import userIcon from "images/userIcon.png";
import { Cookies } from "react-cookie";
import { Stack } from "@mui/material";
const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;
const ClearBtn = styled.button`
  ${tw`mt-4 px-8 py-2 rounded bg-red-500 text-white font-bold hover:bg-red-700 transition duration-300`}
`;
const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const getIcon = (playtime) => {
  if(playtime <= 0){
    return FastIconImage;
  }
  else if(playtime < 15){
    return SimpleIconImage;
  }
  else if(playtime < 60){
    return ReliableIconImage;
  }
  else{
    return CustomizeIconImage;
  }
}


export default ({
  cards = null,
  heading = "Your Player Info",
  subheading = "",
  description = "Below are your personal game data such as playtime, achievements, and more."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */
  const {userData} = useContext(AppContext);
  const [defaultCards,setDefaultCards] = React.useState([]);
  useEffect(() => {
    if(userData){
      const gameData = userData.gameData;
      const cards = gameData.map((game) => {
        return {
          imageSrc: getIcon(game.playtime),
          title: game.game,
          description: [`Playtime: ${game.playtime} Minutes`,`${game.lastPlayed?`Last played: ${new Date(game.lastPlayed).toDateString()}`:''}`],
        }
      }
      );
      const sortedCards = cards.sort((a, b) => b.description[0].split(' ')[1]-a.description[0].split(' ')[1]);
      setDefaultCards(sortedCards);
    }
  }, [userData]);

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <img src={userIcon} alt="" width={'100px'}/>
        <Heading style={{textAlign: 'center'}}> 
                
              {heading}</Heading>
        {description && (Array.isArray(description)? description.map((des)=>{
          console.log(description);
          return <Description>{des}</Description>
          
          }):<Description>{description}</Description>)}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                {Array.isArray(card.description)? card.description.map((des)=><p>{des}</p>):<p>{card.description}</p>}
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {defaultCards.length > 0?<div style={{ textAlign: 'center', padding: '20px' }}>
        <ClearBtn onClick={()=>{const cookies = new Cookies();cookies.remove("userData");setDefaultCards([]);

        }}>Clear User Data</ClearBtn>
      </div>:<Heading style={{textAlign: 'center'}}>User Data Cleared!</Heading>}
    </Container>
  );
};
