import React from "react";

import useProfiles from "../../../core/hooks/useProfiles";
import { Container, CharacterCard, Loader } from "./styled";

const Root = () => {
  const profiles = useProfiles();

  if ((profiles.isIdle || profiles.isFetching) && !profiles.data) {
    return <Loader>{"...caricamento"}</Loader>;
  }

  return (
    <Container>
      {profiles.data.results.map((profile) => (
        <CharacterCard key={profile.id} {...profile} />
      ))}
    </Container>
  );
};

export default Root;
