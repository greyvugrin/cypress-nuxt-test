/// <reference types="cypress" />

context('Nuxt Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('shows nuxt hello world', () => {
    // https://on.cypress.io/type
    cy.get('.title')
      .contains('cypress-nuxt-test')
    
    cy.get('.subtitle')
      .contains('Nuxt.js')
  })
})
