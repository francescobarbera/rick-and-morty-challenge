import styled from "styled-components";

import CharacterCardComponent from "../../components/character-card";

export const Container = styled.section`
  padding: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 16px;
`;

export const CharacterCard = styled(CharacterCardComponent)``;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
