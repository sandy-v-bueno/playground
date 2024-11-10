describe('IFrame ', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.goTo('/iframe', 'IFrame')
    })

    it('Deve preencher um nome em uma página que tem iframe', () => {

     cy.get('[data-cy="iframe-inputs"]')
        .then(($iframe)=>{
            const $body = $iframe.contents().find('body')

            cy.wrap($body)
                .find('#fullname')
                .type('Sandy Bueno')
        })


    })
})
