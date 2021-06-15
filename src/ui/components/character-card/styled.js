import styled from "styled-components";

import AttributeTextComponent from "../attribute-text/index.jsx";

export const Container = styled.article`
  padding: 0.5em;
  min-height: 16em;
  background-color: #f9bf1e;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 16px;
  color: #392c21;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 1em 0;
`;

export const AttributeText = styled(AttributeTextComponent)`
  margin-bottom: 1em;
`;
