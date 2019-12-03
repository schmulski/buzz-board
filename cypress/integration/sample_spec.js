import { exportAllDeclaration } from "@babel/types";

describe("My first Test", function() {
  it("Finds an element", function() {
    cy.visit("http://localhost:3000/");
  });

  it("has the correct title", () => {
    cy.title().should("equal", "Buzz Board");
  });
});
