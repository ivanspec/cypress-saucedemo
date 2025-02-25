describe('Login Sauce Demo', () => {
  it('User can see login page', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.contains('Swag Labs');
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="login-credentials"] > h4').should('have.text', 'Accepted usernames are:');
    cy.get('[data-test="login-password"] > h4').should('have.text', 'Password for all users:');
  });

  it('Users can login with the correct credentials', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.contains('Products').should('be.visible');
  });

  it('User try login with locked out user', () => {
    cy.login('locked_out_user', 'secret_sauce');
    cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });
});
