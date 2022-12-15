import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { FAMILIES, QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
};

const MobileHeader = () => {
  return (
    <MobileHeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </MobileHeaderWrapper>
  );
};

const DesktopHeader = () => {
  return (
    <DesktopHeaderWrapper>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <Logo />
          <Subscription>
            <DesktopButton>Subscribe</DesktopButton>
            <SubscribeText>Already a subscriber?</SubscribeText>
          </Subscription>
        </Row>
      </SuperHeader>
    </DesktopHeaderWrapper>
  );
};

const DesktopButton = styled(Button)`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const MobileHeaderWrapper = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeaderWrapper = styled.header`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const Subscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 8px;
  align-items: center;
`;

const SubscribeText = styled.div`
  font-family: ${FAMILIES.serif};
  font-style: italic;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
