import React from "react";
import styled from "styled-components/macro";

import Header from "../Header";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Footer from "../Footer";
import Spacer from "../Spacer";
import MainStoryGrid from "../MainStoryGrid";
import SpecialtyStoryGrid from "../SpecialtyStoryGrid";

const App = () => {
  return (
    <>
      <Header />
      <MaxWidthWrapper as="main">
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </MaxWidthWrapper>
      <Spacer size={64} />
      <Footer />
    </>
  );
};

export default App;
