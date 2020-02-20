describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#projects-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#project-1').within(() => {
        cy.get('.image').should('exist');
        cy.get('.ui.header').should('contain', 'My First Website');
        cy.get('.description').should('contain', 'Personal site project made during CraftAcademy Bootcamp.');
      })
    });
  
    it('displays second project', () => {
      cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'React Chat');
        cy.get('.description').should('contain', 'React chat application created in React and deployed to firebase. Uses google to authenticate users.');
      })
    });
  
    it('displays third project', () => {
      cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'BMI Calculator');
        cy.get('.description').should('contain', "Built a Calculator that calculates height and weight into BMI and assign a classification of body health.");
      })
    });  
  });