describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays latest employment', () => {
      cy.get('#employment-1').within(() => {
        cy.get('.jobheader').should('contain', 'Comeon');
        cy.get('.jobperiod').should('exist');
        cy.get('.jobdescription').should('contain', 'Part of a test organisation where I both do manual testing and test automation using Cypress.');
      })
    });
  
    it('displays second latest employment', () => {
      cy.get('#employment-2').within(() => {
        cy.get('.jobheader').should('contain', 'Ongame');
        cy.get('.jobperiod').should('exist');
        cy.get('.jobdescription').should('contain', 'Part of a test organisation where I both did manual testing as well as load testing with LoadRunner and Jmeter.');
      })
    });
  
    it('displays third latest employment', () => {
      cy.get('#employment-3').within(() => {
        cy.get('.jobheader').should('contain', 'Telenor');
        cy.get('.jobperiod').should('exist');
        cy.get('.jobdescription').should('contain', 'Together with business decided acceptance criteria for accepting deliverables from outsourced code production, and in accordance to that.');
      })
    });  
  });