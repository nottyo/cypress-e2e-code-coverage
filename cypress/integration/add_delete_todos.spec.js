/// <reference types="Cypress" />

describe('Add Todo', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('should be able to add new todo', () => {
        const firstTodo = 'Writing a blog'
        const secondTodo = 'Running'
        cy.get('[data-at="new-todo"]').type(`${firstTodo}{enter}`)
          .type(`${secondTodo}{enter}`)
        cy.get('[data-at="todoText"]').eq(0).should('contain', firstTodo)
        cy.get('[data-at="todoText"]').eq(1).should('contain', secondTodo)
        cy.get('[data-at="removeTodoBtn"]').should('have.length', 2)
    })

    it.skip('should be able to delete todo', () => {
        const todoText = 'To be deleleted'
        cy.get('[data-at="new-todo"]').type(`${todoText}{enter}`)
        cy.get('[data-at="removeTodoBtn"]').click()
        cy.get('[data-at="noTodo"]').should('contain', 'No Anything Todo')
    })
})