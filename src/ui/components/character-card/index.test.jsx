import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import CharacterCard from "./";

jest.mock("../../../core/hooks/useProfile", () => () => ({
  status: "success",
  isLoading: false,
  isSuccess: true,
  isError: false,
  isIdle: false,
  data: {
    origin: {
      name: "origin_name",
      type: "origin_type",
      dimension: "origin_dimension",
      residentsCount: "origin_residents",
    },
    location: {
      name: "location_name",
      type: "location_type",
      dimension: "location_dimension",
      residentsCount: "location_residents",
    },
    episodes: ["Pilot", "Pilot2", "Pilot3"],
  },
  dataUpdatedAt: 1623863089157,
  error: null,
  errorUpdatedAt: 0,
  failureCount: 0,
  isFetched: true,
  isFetchedAfterMount: true,
  isFetching: false,
  isLoadingError: false,
  isPlaceholderData: false,
  isPreviousData: false,
  isRefetchError: false,
  isStale: true,
}));

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
      type: "origin_type",
      dimension: "origin_dimension",
      residentsCount: "origin_residents",
    },
    location: {
      name: "location_name",
      type: "location_type",
      dimension: "location_dimension",
      residentsCount: "location_residents",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episodesNames: ["Pilot", "Pilot2", "Pilot3"],
  };

  const queryClient = new QueryClient();

  it("renders the profile image", () => {
    const { getByTestId } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByTestId("profile-image").src).toBe(
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );
  });

  it("renders the name", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByText("Rick Sanchez")).toBeInTheDocument();
  });

  it("renders the status", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByText("Alive")).toBeInTheDocument();
  });

  it("renders the species", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByText("Human")).toBeInTheDocument();
  });

  it("renders the type", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByText("Not defined")).toBeInTheDocument();
  });

  it("renders the gender", () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );
    expect(getByText("Male")).toBeInTheDocument();
  });

  it("renders the origin when the user clicks on details button", async () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <CharacterCard {...defaultProps} />
      </QueryClientProvider>
    );

    fireEvent.click(getByText("details"));

    await waitFor(() => {
      expect(getByText("origin_name")).toBeInTheDocument();
      expect(getByText("origin_type")).toBeInTheDocument();
      expect(getByText("origin_dimension")).toBeInTheDocument();
      expect(getByText("origin_residents")).toBeInTheDocument();
    });
  });

  it("renders the location when the user clicks on details button", async () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);

    fireEvent.click(getByText("details"));

    await waitFor(() => {
      expect(getByText("location_name")).toBeInTheDocument();
      expect(getByText("location_type")).toBeInTheDocument();
      expect(getByText("location_dimension")).toBeInTheDocument();
      expect(getByText("location_residents")).toBeInTheDocument();
    });
  });

  it("renders the episodes when the user clicks on details button", async () => {
    const { getByText } = render(<CharacterCard {...defaultProps} />);

    fireEvent.click(getByText("details"));

    await waitFor(() => {
      expect(getByText("Pilot, Pilot2, Pilot3")).toBeInTheDocument();
    });
  });
});
