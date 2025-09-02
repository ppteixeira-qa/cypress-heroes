import 'cypress-file-upload'

describe('Heroes', () => {
  it.only('Creating a Real Hero', () => {
    cy.visit('http://localhost:3000')
    cy.get('li > .undefined').click()
    cy.get('.modal-container > .open').contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.get('a > .undefined').click()
    cy.get('[data-cy="nameInput"]').type('Goku')
    cy.get('[data-cy="priceInput"]').type('120')
    cy.get('[data-cy="fansInput"]').type('80')
    cy.get('[data-cy="savesInput"]').click().type('25')
    cy.get('[data-cy="powersSelect"]').select(['Fireball', 'Flying', 'Super Strength', 'Super Speed'])
    cy.get('[data-cy="avatarFile"]').click()
    cy.get('input[type=file]').attachFile('goku.png')
    cy.get('.max-w-\\[100px\\]').click()
    cy.wait(1000)
    cy.get('nav > .flex > :nth-child(2) > .undefined').click()

  })
})