///<reference types ="cypress"/>

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("https://lucent-beignet-410bc6.netlify.app/");
  });

  it("Should display the clients", () => {
    cy.get(".l_container").should("be.visible");
    cy.get(".container").should("be.visible");
    cy.get(".p_container").should("be.visible");
  });
  it("Should display the clients Details on click", () => {
    cy.contains("View Details").click();
    cy.get(".d_area").should("be.visible");
  });
  it("On click button should toggle", () => {
    cy.contains("View Details").click();
    cy.contains("Hide Details").should("be.visible");
    cy.contains("Hide Details").click();
    cy.contains("View Details").should("be.visible");
  });
});
