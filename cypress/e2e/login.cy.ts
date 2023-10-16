describe('Checking Login Page', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('host')}/auth/login`);
  })
  it('Checking All Buttons Exists', () => {
    cy.get('[data-testid="login-submit-button"]');
    cy.get('[data-testid="login-register-button"]');
    cy.get('[data-testid="login-forgot-password-button"]');
  })
  it('Checking User Input', () => {
    cy.get('[data-testid="login-email-input"]').type(Cypress.env('login_email'));
    cy.get('[data-testid="login-password-input"]').type(Cypress.env('login_password'));
  })
})