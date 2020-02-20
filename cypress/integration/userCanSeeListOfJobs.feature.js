describe('User can see list of projects', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    it('displays first project', () => {
      cy.get('#jobs-1').within(() => {
        cy.get('.job_header').should('contain', 'Comeon');;
        cy.get('job_period').should('exist');
        cy.get('.description').should('contain', 'Part of a test organisation where I both do manual testing and test automation using Cypress.');
      })
    });
  
    it('displays second project', () => {
      cy.get('#project-2').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'UI Design');
        cy.get('.description').should('contain', 'Designing user interfaces is fun. I want to learn more about that...');
      })
    });
  
    it('displays third project', () => {
      cy.get('#project-3').within(() => {
        cy.get(('.image')).should('exist');
        cy.get('.ui.header').should('contain', 'Mobile UX');
        cy.get('.description').should('contain', "I like to design for the mobile platform. The challenges to build UI's for smartphones is challenging but extremely rewarding.");
      })
    });  
  });