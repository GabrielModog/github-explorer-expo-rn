import { render, screen } from "@testing-library/react-native";

import PullRequest from "../PullRequest";

const repository_mock = {
  title: "Lorem Ispum",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultrices metus. Vivamus commodo faucibus molestie.",
  username: "primorico",
  author: "PrimoRico",
  createdAt: new Date().toISOString(),
};

describe("<PullRequest /> component", () => {
  test("Should have a title", async () => {
    render(<PullRequest {...repository_mock} />);

    const titleElm = await screen.findByTestId("title");

    expect(titleElm).toBeTruthy();
  });

  test("Should have a go description", async () => {
    render(<PullRequest {...repository_mock} />);

    const descriptionElm = await screen.findByTestId("description");

    expect(descriptionElm).toBeTruthy();
  });

  test("Should have an avatar", async () => {
    render(<PullRequest {...repository_mock} />);

    const avatarElm = await screen.findByTestId("avatar");

    expect(avatarElm).toBeTruthy();
  });

  test("Should have a date", async () => {
    render(<PullRequest {...repository_mock} />);

    const dateElm = await screen.findByTestId("date");

    expect(dateElm).toBeTruthy();
  });
});
