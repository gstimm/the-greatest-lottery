/// <reference types="cypress" />

describe('New Bet', () => {
  it.skip('should be able to create a new user.', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[href="/signup"] > .sc-jrsJWt').click();
    cy.get('[placeholder="Name"]').type('Gabriel');
    cy.get('[placeholder="Email"]').type('gabriel10@test.com');
    cy.get('[placeholder="Password"]').type('123123123');
    cy.get('[placeholder="Password Confirmation"]').type('123123123');

    cy.intercept('POST','**/users').as('createUser');

    cy.get('form > .sc-jrsJWt').click();

    cy.wait('@createUser').then((xhr) => {
      expect(xhr.response.statusCode).be.eq(200);
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body).has.property('user');
      expect(xhr.response.body.user).has.property('name');
      expect(xhr.response.body.user).has.property('email');
      expect(xhr.response.body.user).has.property('id');
      expect(xhr.response.body.token).is.not.null;
      expect(xhr.response.body.user.name).is.not.null;
      expect(xhr.response.body.user.email).is.not.null;
      expect(xhr.response.body.user.id).is.not.null;
    })
  });

  it.skip('should be able to login on application.', () => {
    cy.visit('http://localhost:3000/');

    const email = Cypress.env('createdUserEmail');
    const password = Cypress.env('createdUserPassword');

    cy.get('[type="text"]').type(email);
    cy.get('[type="password"]').type(password);

    cy.intercept('POST', '**/login').as('session');

    cy.get('.jvvwCv').click();

    cy.wait('@session').then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200);
      expect(xhr.response.body).has.property('token');
      expect(xhr.response.body.token).is.not.null;
      expect(xhr.response.body).has.property('user');
      expect(xhr.response.body.user).is.not.null;
      expect(xhr.response.body.user).has.property('id');
      expect(xhr.response.body.user.id).is.not.null;
      expect(xhr.response.body.user).has.property('name');
      expect(xhr.response.body.user.name).is.not.null;
      expect(xhr.response.body.user).has.property('email');
      expect(xhr.response.body.user.email).is.not.null;
    })
  });

  // it('should be able to create a mega-sena bet with random numbers.', () => {

  //   cy.get('.new-game-link > a > .sc-jrsJWt').click();
  // });
});
