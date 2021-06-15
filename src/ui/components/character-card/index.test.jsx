import { cleanup, render } from "@testing-library/react";
import React from "react";

import CharacterCard from "./";

describe("CharacterCard component", () => {
  afterEach(cleanup);

  const defaultProps = {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "Not defined",
    gender: "Male",
    origin: {
      name: "origin_name",
      type: "origin_tyoe",
      dimension: "origin_dimension",
      residentsCount: "origin_residents",
    },
    location: {
      name: "location_name",
      type: "location_tyoe",
      dimension: "location_dimension",
      residentsCount: "location_residents",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episodesNames: ["Pilot", "Pilot2", "Pilot3"],
  };

  it("renders the profile image", () => {
    const { getByTestId } = render(<CharacterCard {...defaultProps} />);
    expect(getByTestId("profile-image").src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });

  it("renders the name", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("renders the status", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Alive")).toBeInTheDocument();
  });

  it("renders the species", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Human")).toBeInTheDocument();
  });

  it("renders the type", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Not defined")).toBeInTheDocument();
  });

  it("renders the gender", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Male")).toBeInTheDocument();
  });

  it("renders the origin", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("origin_name")).toBeInTheDocument();
    expect(getByText("origin_tyoe")).toBeInTheDocument();
    expect(getByText("origin_dimension")).toBeInTheDocument();
    expect(getByText("origin_residents")).toBeInTheDocument();
  });

  it("renders the location", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("location_name")).toBeInTheDocument();
    expect(getByText("location_tyoe")).toBeInTheDocument();
    expect(getByText("location_dimension")).toBeInTheDocument();
    expect(getByText("location_residents")).toBeInTheDocument();
  });

  it("renders the episodes", () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);
    expect(getByText("Pilot, Pilot2, Pilot3")).toBeInTheDocument();
  });
});
