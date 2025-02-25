describe('Login Sauce Demo', () => {
  it('Users can login with the correct credentials', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.contains('Products').should('be.visible');
    cy.get('[data-test="inventory-list"]').should('be.visible');
    cy.get('[data-test="inventory-item"]').then(($items) => {
      expect($items.length).to.equal(6);
    });

    // add cart backpack item
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible');
    cy.scrollTo('top');
    cy.get('[data-test="shopping-cart-badge"]').click();

    // checkout on cart
    cy.contains('Your Cart').should('be.visible');
    cy.get('[data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99');
    cy.get('[data-test="checkout"]').click();

    // Fill Information Address
    cy.contains('Checkout: Your Information').should('be.visible');
    cy.get('[data-test="firstName"]').type('Mock');
    cy.get('[data-test="lastName"]').type('Spec');
    cy.get('[data-test="postalCode"]').type('12345');
    cy.get('[data-test="continue"]').click();

    // Fill Information Address
    cy.contains('Checkout: Overview').should('be.visible');
    cy.get('[data-test="finish"]').click();

    // success order
    cy.contains('Thank you for your order!').should('be.visible');
    cy.get('[data-test="pony-express"]').should('be.visible');
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
    cy.get('[data-test="complete-text"]').should(
      'have.text',
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
    );
    cy.get('[data-test="back-to-products"]').click();

    // user will back to list product
    cy.contains('Products').should('be.visible');
    cy.get('[data-test="inventory-list"]').should('be.visible');
    cy.get('[data-test="inventory-item"]').then(($items) => {
      expect($items.length).to.equal(6);
    });
  });
});
