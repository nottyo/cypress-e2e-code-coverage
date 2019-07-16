/// <reference types="Cypress" />

describe('UI Test', () => {

    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('should display new-todo input field', () => {
        cy.get('[data-at="new-todo"]').should('be.visible')
    })

    it.skip('should be skipped', () => {
        cy.get('[data-at="removeTodoBtn"]').should('be.visible')
    })
})