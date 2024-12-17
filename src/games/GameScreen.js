import React, { use, useEffect } from "react";
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
  ${tw`sm:h-80 w-128 md:h-96 w-256 rounded-lg shadow`}
  display: block;
  margin: 1rem auto;
`;
const FullScreenCountainer = styled.div`
  ${tw`w-full`}
  height: 100vh;
`;
export default ({
  heading = "TITLE",
  description = "description",
}) => {
  const gameUrl = "https://gr5finance.netlify.app";

  const [full,isFull] = React.useState(false);


  return (<>
    <Container>
      <Content2Xl>
      <MainHeader />
      </Content2Xl>
      <ContentWithPaddingXl>
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
      </ContentWithPaddingXl>
     {/* <iframe src="%PUBLIC_URL%/games/index.html"></iframe> */}
     {full ?<FullScreenCountainer>
     <iframe src={gameUrl} width="100%" height="100%" />
    </FullScreenCountainer> : 
    <GameContainer src={gameUrl} />
    }
    <CenteredContainer>
    <PrimaryButton onClick={()=>isFull(!full)}>{full ? "Exit Full Screen" : "Full Screen"}</PrimaryButton>
    </CenteredContainer>
    </Container>
    <MiniCenteredFooter />
  </>);
};
