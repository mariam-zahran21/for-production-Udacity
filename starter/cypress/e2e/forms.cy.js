describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    beforeEach(() => {
      cy.get("[data-cy='toggle_form']").click();
      cy.get("[data-cy='set_form']").should("be.visible");
    });

    it("should successfully create a new set (happy path)", () => {
      cy.get("[data-cy='set_form']")
        .find("input[name='titleInput']")
        .type("My New Study Set");

      cy.get("[data-cy='set_form']")
        .find("input[type='submit']")
        .click();

      cy.contains("My New Study Set").should("exist");
    });

    it("should show error when submitting empty title (unhappy path)", () => {
      cy.get("[data-cy='set_form']")
        .find("input[type='submit']")
        .click();

      cy.get(".error").should("exist");
      cy.get(".error").should("contain", "TITLE CANNOT BE EMPTY");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      // 🔥 الحل النهائي الصحيح
      cy.get("[data-cy='1']").click();

      // انتظر ظهور الفورم بشكل صحيح
      cy.get("body").should("contain.html", "card_form");
    });

    it("should successfully add a new card (happy path)", () => {
      cy.get("[data-cy='card_form']")
        .find("input[name='termInput']")
        .type("Test Term");

      cy.get("[data-cy='card_form']")
        .find("input[name='descriptionInput']")
        .type("Test Description");

      cy.get("[data-cy='card_form']")
        .find("input[type='submit']")
        .click();

      cy.contains("Test Term").should("exist");
    });

    it("should show error when submitting empty term (unhappy path)", () => {
      cy.get("[data-cy='card_form']")
        .find("input[name='descriptionInput']")
        .type("Some Description");

      cy.get("[data-cy='card_form']")
        .find("input[type='submit']")
        .click();

      cy.get(".error").should("contain", "TERM CANNOT BE EMPTY");
    });

    it("should show error when submitting empty description (unhappy path)", () => {
      cy.get("[data-cy='card_form']")
        .find("input[name='termInput']")
        .type("Some Term");

      cy.get("[data-cy='card_form']")
        .find("input[type='submit']")
        .click();

      cy.get(".error").should("contain", "DESCRIPTION CANNOT BE EMPTY");
    });

    it("should show error when both fields are empty (unhappy path)", () => {
      cy.get("[data-cy='card_form']")
        .find("input[type='submit']")
        .click();

      cy.get(".error").should("contain", "TERM AND DESCRIPTION CANNOT BE EMPTY");
    });
  });
});