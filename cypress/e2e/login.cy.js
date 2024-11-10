// cenários de login
describe('Login', () => {

  // ganchos:
  // beforeEach -> roda antes de cada it
  // afterEach -> roda depois de cada it
  // before -> roda 1 vez antes dos its
  // after -> roda 1 vez depois dos its

  beforeEach(() => {
    cy.goHome()
  })

  // para rodar apenas 1 teste, basta adicionar .only após o it (it.only)
  it('Deve logar com sucesso', () => {

    // validacoes  
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve logar com email não cadastrado', () => {

    // validacoes  
    cy.login('404@cyskills.com.br', 'showtime')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com senha incorreta', () => {

    // validacoes
    cy.login('papito@cyskills.com.br', 'abc123456789')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com quantidade incorreta de caracteres na senha', () => {

    // validacoes
    cy.login('papito@cyskills.com.br', 'abc1')
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })

  it('Não deve logar com formato invalido no email', () => {

    // validacoes
    cy.login('www.cyskills.com.br', 'showtime')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Não deve logar sem informar o email', () => {

    // validacoes
    cy.login('', 'showtime')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem informar a senha', () => {

    // validacoes
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem informar email e senha', () => {

    // validacoes
    cy.get('[data-cy="login-button"]').click()
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

})

