describe('Radio Buttons', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/radio', 'Radio Buttons')
    })

    it('Deve selecionar o framework que usamos no curso', () => {

        cy.contains('label', 'Cypress')
            .click()

    })

})

