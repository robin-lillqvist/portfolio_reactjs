describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays a job card', () => {
      cy.get('#employment-1').within(() => {
        cy.get('h2.ui.header').first().should('contain', 'Comeon');
        cy.get('h2.ui.header').first().should('contain', 'Software Tester');
        cy.get('div.ui.top.right.attached.label').should('exist');
        cy.get('.jobdescription').should('contain', 'Cypress.');
      })
    });

    it('displays second job card', () => {
      cy.get('#employment-2').within(() => {
        cy.get('h2.ui.header').first().should('contain', 'Ongame');
        cy.get('h2.ui.header').first().should('contain', 'QA Engineer');
        cy.get('div.ui.top.right.attached.label').should('exist');
        cy.get('.jobdescription').should('contain', 'LoadRunner');
      })
    });

    it('displays third job card', () => {
          cy.get('#employment-3').within(() => {
            cy.get('h2.ui.header').first().should('contain', 'Telenor');
            cy.get('h2.ui.header').first().should('contain', 'Acceptance Tester');
            cy.get('div.ui.top.right.attached.label').should('exist');
            cy.get('.jobdescription').should('contain', 'outsourced');
          })
        });
        
  });