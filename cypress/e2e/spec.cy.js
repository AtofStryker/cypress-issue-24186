describe('24186', () => {
  it('allows for all allowable characters in text field number', () => {
    cy.visit('cypress/fixtures/index.html')
    cy.get('input').type('A21e-+')
    cy.get('input').should('have.value','A21e-+')
  })
})