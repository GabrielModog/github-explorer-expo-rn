describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have welcome screen", async () => {
    await expect(
      element(by.text("Melhores repositórios do Github ⭐️"))
    ).toBeVisible();
  });

  it("should see first item in the homescreen list", async () => {
    await expect(element(by.text("react"))).toBeVisible();
  });

  it("should tap in ther first item in the list", async () => {
    await element(by.text("react")).tap();
    await element(by.text("24/05/2024")).atIndex(1).tap();
    await expect(element(by.text("24/05/2024"))).toBeVisible();
  });
});
