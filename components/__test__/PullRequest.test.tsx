import { render, screen } from "@testing-library/react-native";

import PullRequest from "../pull-requests/PullRequest";

const repository_mock = {
  id: "3",
  title: "Lorem Ispum 3",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultrices metus. Vivamus commodo faucibus molestie.",
  username: "primorico",
  author: "PrimoRico",
  createdAt: new Date("2024-05-24T17:44:32.916Z").toISOString(),
};

describe("<PullRequest /> component", () => {
  test("Should have a title", async () => {
    render(<PullRequest {...repository_mock} />);

    const titleElm = await screen.getByText("Lorem Ispum 3");

    expect(titleElm).toBeTruthy();
  });

  test("Should have a go description", async () => {
    const expectedText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultrices metus. Vivamus commodo faucibus molestie.";
    render(<PullRequest {...repository_mock} />);

    const descriptionElm = await screen.getByText(expectedText);

    expect(descriptionElm).toBeTruthy();
  });

  test("Should have an avatar", async () => {
    render(<PullRequest {...repository_mock} />);

    const avatarElm = await screen.findByTestId("avatar");

    expect(avatarElm).toBeTruthy();
  });

  test("Should have a date", async () => {
    render(<PullRequest {...repository_mock} />);

    const dateElm = await screen.getByText("24/05/2024");

    expect(dateElm).toBeTruthy();
  });
});
