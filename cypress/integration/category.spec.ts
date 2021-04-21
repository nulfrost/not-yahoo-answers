describe("Testing the /category route", () => {
  beforeEach(() => {
    cy.visit("/category/travel");
  });

  it("Should render a list of questions based on the category", () => {
    cy.contains("My question title");
    cy.get("[data-cy=question-category]").should("contain", "travel");
  });
  it("Should be able to sort the questions", () => {
    cy.get("[data-cy=question-sort]").select("oldest");
    cy.get("div article:first h2").should("contain", "My question title");
  });
  it("Should be able to filter the questions", () => {
    cy.get("[data-cy=question-filter]").type("my question title");
    cy.should("not.contain", "Travel question");
  });
});

export {};
