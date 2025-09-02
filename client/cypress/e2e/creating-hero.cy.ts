import 'cypress-file-upload'

describe('Heroes', () => {
  it('Creating a Hero', () => {
    cy.visit('http://localhost:3000')
    cy.get('li > .undefined').click()
    cy.get('.modal-container > .open').contains('Login').click()
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.get('a > .undefined').click()
    cy.get('[data-cy="nameInput"]').type('Chapolin Colorado')
    cy.get('[data-cy="priceInput"]').type('70')
    cy.get('[data-cy="fansInput"]').type('80')
    cy.get('[data-cy="savesInput"]').click().type('18')
    cy.get('[data-cy="powersSelect"]').select(['Super Strength'])
    cy.get('[data-cy="avatarFile"]').click()
    cy.get('input[type=file]').attachFile('chapolin.png')
    cy.get('.max-w-\\[100px\\]').click()
    
  })
})