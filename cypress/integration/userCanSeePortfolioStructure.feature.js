describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3000');
      cy.get('#header').should('contain', 'My Portfolio');
      cy.get('#footer > a').should('have.attr', 'href').and('contain', 'https://www.linkedin.com/in/robinlillqvist/');
      cy.get('.hello').should('contain', 'Hello, I\'m');
      cy.get('.hello.differentcolor').should('contain', 'Robin Lillqvist');
    })
  })