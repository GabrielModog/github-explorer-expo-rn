import { render, screen } from "@testing-library/react-native";

import Repository from "../repositories/Repository";

const repository_mock = {
  id: "1",
  title: "Lorem Ispum 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultrices metus. Vivamus commodo faucibus molestie.",
  username: "primorico",
  author: "PrimoRico",
  forks: 24,
  stars: 123,
};

describe("<Repository /> component", () => {
  test("Should have a title", async () => {
    render(<Repository {...repository_mock} />);

    const titleElm = await screen.getByText("Lorem Ispum 1");

    expect(titleElm).toBeTruthy();
  });

  test("Should have a go description", async () => {
    const expectedText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et ultrices metus. Vivamus commodo faucibus molestie.";
    render(<Repository {...repository_mock} />);

    const descriptionElm = await screen.getByText(expectedText);

    expect(descriptionElm).toBeTruthy();
  });

  test("Should have an avatar", async () => {
    render(<Repository {...repository_mock} />);

    const avatarElm = await screen.findByTestId("avatar");

    expect(avatarElm).toBeTruthy();
  });

  test("Should have a forks count", async () => {
    render(<Repository {...repository_mock} />);

    const forksCountElm = await screen.getByText("24");

    expect(forksCountElm).toBeTruthy();
  });

  test("Should have a stars count", async () => {
    render(<Repository {...repository_mock} />);

    const starsCountElm = await screen.getByText("123");

    expect(starsCountElm).toBeTruthy();
  });
});
