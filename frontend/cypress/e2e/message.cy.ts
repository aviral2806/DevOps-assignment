describe('Message API', () => {
  it('displays message from backend', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Call Message API').click();

    cy.contains('Hello from FastAPI backend!').should('exist');

    cy.wait(5000);
    cy.contains('Hello from FastAPI backend!').should('not.exist');
  });
});
