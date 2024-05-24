import { render, screen } from "@testing-library/react-native";

import BackButton from "../BackButton";

describe("<BackButton /> component", () => {
  test("Should have a title", async () => {
    render(<BackButton title="Title Example" handleGoBack={jest.fn()} />);

    const titleOutput = await screen.findByTestId("title");

    expect(titleOutput).toBeTruthy();
  });

  test("Should have a go back button", async () => {
    render(<BackButton title="Title Example" handleGoBack={jest.fn()} />);

    const goBackBtn = await screen.findByTestId("goBackBtn");

    expect(goBackBtn).toBeTruthy();
  });
});
