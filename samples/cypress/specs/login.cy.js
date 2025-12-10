
// Cypress example
// Place inside cypress/e2e or cypress/integration depending on version
describe('Login flow - Cypress', () => {
  it('logs in successfully', () => {
    cy.visit('https://example.com/login')
    cy.get('input[name=email]').type('user@example.com')
    cy.get('input[name=password]').type('senha123')
    cy.get('button[type=submit]').click()
    cy.url().should('include','/dashboard')
  })
})
