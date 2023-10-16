describe('template spec', () => {
  it('passes', () => {
    cy.visit(`${Cypress.env('host')}/auth/login`);
    cy.get('[data-testId="login-email-input"]').type(Cypress.env('login_email'));
    cy.get('[data-testId="login-password-input"]').type(Cypress.env('login_password'));
  })
})