import React from "react";
import styled from "styled-components/macro";
import { COLORS } from "../../constants";

const Divider = () => {
    return <Wrapper></Wrapper>
}

const Wrapper = styled.div`
  height: 1px;
  margin: 16px 0px;
  background: ${COLORS.gray[300]};
`;

export default Divider
