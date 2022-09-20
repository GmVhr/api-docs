context('Verifying that the code examples react tab actually switches examples', () => {
    it('Should find the examples tab, click a different language, and verify that the example switched.', () => {
        cy.visit('/docs/voice/bxml/pause/')
        cy.get('div.language-xml')
          .should('be.visible')
        cy.get('div.language-java')
          .should('not.be.visible')                  
        cy.get('li.tabs__item')
          .contains("Java")
          .click()
        cy.get('div.language-java')
        .should('be.visible')
        cy.get('div.language-xml')
        .should('not.be.visible')         
      })
})
