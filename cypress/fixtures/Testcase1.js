/// <reference types="cypress" />


describe('My TestSuite', () => {
    it('Verify Page Title - Positive', () => 
    {
      cy.visit('https://www.amazon.in/')
    })

    it('Verify Page Title - Negative', () => 
    {
      cy.visit('http://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce M store')
    })

    it('Navigate to Login Screen', () => 
    {
      cy.get('.ico-login').click()
      cy.title().should('eq','nopCommerce M store')
    })

    it('UserName', () => 
    {
      cy.get('#Email').type("")
    })

    it('Password', () => 
    {
      cy.get('[type=password]')
    })

    it('Click Submit button', () => 
    {
      cy.get('Input[class=login-button]')
      cy.title().should('eq','nopCommerce M store')
    })
  })