import PropTypes from "prop-types";
import React, { useState } from "react";
import { v4 } from "uuid";

import useProfile from "../../../core/hooks/useProfile";
import { AttributeText, Container, Name, Img, ImgContainer } from "./styled";

const CharacterCard = ({
  id,
  name,
  status,
  species,
  type,
  gender,
  image,
  origin,
  location,
  episode,
}) => {
  const [requestId, setRequestId] = useState("");
  const [areDetailsOpen, toggleDetails] = useState(false);
  const profile = useProfile(origin.url, location.url, episode, requestId);
  console.log("profile", profile);

  return (
    <Container>
      {!areDetailsOpen ? (
        <ImgContainer>
          <Img data-testid={"profile-image"} src={image}></Img>
        </ImgContainer>
      ) : null}
      <Name>{name}</Name>
      <AttributeText label={"status"} value={status} />
      <AttributeText label={"species"} value={species} />
      <AttributeText label={"type"} value={type} />
      <AttributeText label={"gender"} value={gender} />
      {areDetailsOpen && !profile.isIdle && !profile.isFetching ? (
        <>
          <AttributeText
            label={"origin name"}
            value={profile.data.origin.name}
          />
          <AttributeText
            label={"origin type"}
            value={profile.data.origin.type}
          />
          <AttributeText
            label={"origin dimension"}
            value={profile.data.origin.dimension}
          />
          <AttributeText
            label={"origin residents number"}
            value={profile.data.origin.residentsCount}
          />
          <AttributeText
            label={"location name"}
            value={profile.data.location.name}
          />
          <AttributeText
            label={"location type"}
            value={profile.data.location.type}
          />
          <AttributeText
            label={"location dimension"}
            value={profile.data.location.dimension}
          />
          <AttributeText
            label={"location residents number"}
            value={profile.data.location.residentsCount}
          />
          <AttributeText
            label={"episodes"}
            value={profile.data.episodes.join(", ")}
          />
        </>
      ) : null}
      <button
        onClick={() => {
          if (!areDetailsOpen) {
            setRequestId(v4());
          }
          toggleDetails(!areDetailsOpen);
        }}
      >
        {"details"}
      </button>
    </Container>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
  type: PropTypes.string,
  gender: PropTypes.string,
  image: PropTypes.string,
  originUrl: PropTypes.shape({
    url: PropTypes.string,
  }),
  location: PropTypes.shape({
    url: PropTypes.string,
  }),
  episode: PropTypes.arrayOf(PropTypes.string),
};

export default CharacterCard;
