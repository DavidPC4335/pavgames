import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/UserData.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import { Content2Xl } from "components/misc/Layouts";
import { MainHeader } from "MainLandingPage";


export default () => {
  return (
    <AnimationRevealPage>

        <Content2Xl style={{paddingBottom: "10px"}}>
            <MainHeader />
            </Content2Xl>
      <Features />
      <MiniCenteredFooter />
    </AnimationRevealPage>
  );
}
