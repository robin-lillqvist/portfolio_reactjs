describe('User can see About me page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#about-tab').click();
    })
  
    it('displays first section', () => {
        cy.get('.ui.header').should('contain', 'About Me');
        cy.get('.about_headline').first().should('contain', 'Background');
        cy.get('.svg_image').should('exist');

    });
});