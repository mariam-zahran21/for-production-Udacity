describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("happy path: navigates to Card Sets page", () => {
    cy.get('[data-cy="nav-card-sets"]').click();

    cy.get('[data-cy="study-set-header"]')
      .should("exist")
      .and(($el) => {
        expect($el.text().trim()).to.not.equal("");
      });
  });

  it("happy path: navigates to About page", () => {
    cy.get('[data-cy="nav-about"]').click();

    cy.get('[data-cy="about_page"]')
      .should("exist")
      .and(($el) => {
        expect($el.text().trim()).to.not.equal("");
      });
  });

  it("happy path: navigates to Home page", () => {
    cy.get('[data-cy="nav-home"]').click();

    cy.get('[data-cy="home_header"]')
      .should("exist")
      .and(($el) => {
        expect($el.text().trim()).to.not.equal("");
      });
  });
});