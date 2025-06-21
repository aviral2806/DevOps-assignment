

describe('Health API', () => {
    it('displays health status when clicking button', () => {
      cy.visit('http://localhost:3000');
  
      cy.contains('Call health endpoint').click();
  
      cy.contains('ok').should('exist');
  
      // Should disappear after 5s
      cy.wait(5000);
      cy.contains('ok').should('not.exist');
    });
  });
  