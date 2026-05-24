describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to Card Sets page when clicking Card Sets", () => {
    cy.get('[data-cy="nav-card-sets"]').click();

    cy.get('[data-cy="study-set-header"]')
      .should("exist")
      .and("contain", "Study Set Library");
  });

  it("should navigate to About page when clicking About", () => {
    cy.get('[data-cy="nav-about"]').click();

    cy.get('[data-cy="about_page"]')
      .should("exist")
      .and("contain", "About Study Night");
  });

  it("should navigate to Home page when clicking Home", () => {
    cy.get('[data-cy="nav-card-sets"]').click();

    cy.get('[data-cy="nav-home"]').click();

    cy.get('[data-cy="home_header"]')
      .should("exist")
      .and("contain", "Study Night");
  });
});