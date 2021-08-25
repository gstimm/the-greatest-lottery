/// <reference types="cypress" />
import '../support/commands';

describe('New Bet', () => {
  it('should be able to create a new user.', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[href="/signup"] > .sc-jrsJWt').click();
    cy.get('[placeholder="Name"]').type('Test');
    cy.get('[placeholder="Email"]').type('test@test.com');
    cy.get('[placeholder="Password"]').type('123123123');
    cy.get('[placeholder="Password Confirmation"]').type('123123123');

    cy.intercept('POST','http://localhost:3333/users').as('createUser');

    cy.get('form > .sc-jrsJWt').click();

    Cypress.env('createdUserEmail', 'test@test.com');
    Cypress.env('createdUserPassword', '123123123');

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
      expect(Cypress.env()).to.have.property('createdUserEmail', 'test@test.com');
      expect(Cypress.env()).to.have.property('createdUserPassword', '123123123');
    })
  });

  it('should be able to login on application.', () => {
    const email = Cypress.env('createdUserEmail');
    const password = Cypress.env('createdUserPassword');

    cy.get('[type="text"]').type(email);
    cy.get('[type="password"]').type(password);

    cy.intercept('POST', 'http://localhost:3333/login').as('session');

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

      Cypress.env('authUserID', xhr.response.body.user.id);
      Cypress.env('authToken', xhr.response.body.token);
    })
  });

  it('should be able to create a mega-sena bet with random numbers.', () => {
    cy.get('.new-game-link > a > .sc-jrsJWt').click();

    cy.intercept('POST', 'http://localhost:3333/bets', (req) => {
      req.headers['authorization'] = `Bearer ${Cypress.env('authToken')}`
    }).as('bets');

    cy.get('.bjhbpI').click();

    for(let index = 0; index < 7; index++) {
      cy.get('.left-buttons > :nth-child(1)').click();
      cy.get('.noMym').click();
    }
    cy.visit('http://localhost:3000/new-bet');

    cy.get('.button-container > .sc-jrsJWt').click();

    cy.wait('@bets').then((xhr) => {
      expect(xhr.request.headers.authorization).to.eq(`Bearer ${Cypress.env('authToken')}`);
      expect(xhr.response.statusCode).to.eq(200);
    })
  });

  it('should be able to log out.', () => {
    cy.get('[href="/"] > .sc-jrsJWt').click();
  });

  it('should be able to delete user.', () => {
    cy.deleteUser();
  });
});
