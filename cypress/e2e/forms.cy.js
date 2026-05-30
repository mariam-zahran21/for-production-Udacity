describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get('[data-cy="nav-card-sets"]').click();
  });

  describe("Create Set Form", () => {
    beforeEach(() => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').should("be.visible");
    });

    it("happy path: creates a new set", () => {
      cy.get('[data-cy="set_form"]')
        .find('input[name="titleInput"]')
        .type("My New Study Set");

      cy.get('[data-cy="set_form"]')
        .find('input[type="submit"]')
        .click();

      cy.get('[data-cy="form-error"]').should("not.exist");

      cy.contains("My New Study Set").should("be.visible");
    });

    it("should show error when submitting empty title (unhappy path)", () => {
      cy.get('[data-cy="set_form"]')
        .find('input[type="submit"]')
        .click();

      cy.get('[data-cy="form-error"]')
        .should("be.visible")
        .and("contain", "TITLE CANNOT BE EMPTY");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.get('[data-cy="card-set-1"]').click();

      cy.get('[data-cy="card_form"]').should("be.visible");
    });

    it("should successfully add a new card (happy path)", () => {
      cy.get('[data-cy="card_form"]')
        .find('input[name="termInput"]')
        .type("Test Term");

      cy.get('[data-cy="card_form"]')
        .find('input[name="descriptionInput"]')
        .type("Test Description");

      cy.get('[data-cy="card_form"]')
        .find('input[type="submit"]')
        .click();

      cy.contains("Test Term").should("be.visible");
    });

    it("should show error when submitting empty term (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .find('input[name="descriptionInput"]')
        .type("Some Description");

      cy.get('[data-cy="card_form"]')
        .find('input[type="submit"]')
        .click();

      cy.get('[data-cy="form-error"]')
        .should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show error when submitting empty description (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .find('input[name="termInput"]')
        .type("Some Term");

      cy.get('[data-cy="card_form"]')
        .find('input[type="submit"]')
        .click();

      cy.get('[data-cy="form-error"]')
        .should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });

    it("should show error when both fields are empty (unhappy path)", () => {
      cy.get('[data-cy="card_form"]')
        .find('input[type="submit"]')
        .click();

      cy.get('[data-cy="form-error"]')
        .should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
    });
  });
});