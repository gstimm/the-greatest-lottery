// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("createUser", () => {
  cy.request({
      method: 'POST',
      url: 'http://localhost:3333/users',
      body: {
        name: "Test",
        email: "test4@test.com",
        password: "123123123",
        password_confirmation: "123123123"
      }
  }).then(response => {
    expect(response.status).be.eq(200);
    expect(response.body).has.property('token');
    expect(response.body).has.property('user');
    expect(response.body.user).has.property('name');
    expect(response.body.user).has.property('email');
    expect(response.body.user).has.property('id');
    expect(response.body.token).is.not.null;
    expect(response.body.user.name).is.not.null;
    expect(response.body.user.email).is.not.null;
    expect(response.body.user.id).is.not.null;

    Cypress.env('createdUserEmail', 'test4@test.com');
    Cypress.env('createdUserPassword', '123123123');
  });
})

Cypress.Commands.add("loginUser", () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3333/login',
    body: {
      email: Cypress.env('createdUserEmail'),
      password: Cypress.env('createdUserPassword'),
    }
}).then(response => {
    expect(response.status).to.eq(200);
    expect(response.body).has.property('token');
    expect(response.body.token).is.not.null;
    expect(response.body).has.property('user');
    expect(response.body.user).is.not.null;
    expect(response.body.user).has.property('id');
    expect(response.body.user.id).is.not.null;
    expect(response.body.user).has.property('name');
    expect(response.body.user.name).is.not.null;
    expect(response.body.user).has.property('email');
    expect(response.body.user.email).is.not.null;
  })
})
