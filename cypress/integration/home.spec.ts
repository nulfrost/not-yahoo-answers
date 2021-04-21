describe("Testing the home page", () => {
  it("Should land on the home page on first load", () => {
    cy.visit("/");
  });
});

export {};
