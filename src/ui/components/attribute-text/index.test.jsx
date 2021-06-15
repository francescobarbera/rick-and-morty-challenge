import { cleanup, render } from "@testing-library/react";
import React from "react";

import AttributeText from "./";

describe("CharacterCard component", () => {
  afterEach(cleanup);

  it("renders the label", () => {
    const { getByText } = render(
      <AttributeText label={"my_label"} value={"my_value"} />
    );
    expect(getByText("my_label")).toBeInTheDocument();
  });

  it("renders the value", () => {
    const { getByText } = render(<AttributeText value={"my_value"} />);
    expect(getByText("my_value")).toBeInTheDocument();
  });

  it("does not render labela and value if value is not provided", () => {
    const { queryByText } = render(<AttributeText label={"my_label"} />);
    expect(queryByText("my_label")).not.toBeInTheDocument();
    expect(queryByText("my_value")).not.toBeInTheDocument();
  });
});
