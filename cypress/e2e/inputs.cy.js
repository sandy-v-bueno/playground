describe('Input fields', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
    })

    it('Deve preencher o campo texto', () => {
        
        cy.goTo('/input-fields', 'Input Fields')

        cy.get('[data-cy="fullname"]')
            .type('Fernando Papito')

        cy.get('input[name="email"]')
            .type('papito@cyskills.com.br')

        cy.get('#number') // para pegar por "id" do elemento usa #
            .type(1234567890)

        cy.get('input[type="date"]')
            .type('2021-01-31')

    })

})
