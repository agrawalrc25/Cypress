///<reference types = "cypress"/>

describe('Nokia Website', () => {
  
    it('Launch Nokia site', () => {

      cy.visit('https://demo.nopcommerce.com/')
      cy.title().should('eq','nopCommerce demo store')

      cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch")   //search box
       
      cy.get("[type='submit']").click()    // Clicking on search button

       cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()

       cy.get('#product_enteredQuantity_4').clear(2).type('3')    //Its updating quantity

       cy.get('#add-to-cart-button-4').click()   // Add to cart button
       
       cy.wait(5000)

       cy.get('#topcartlink > a > span.cart-label').click() //Shoping cart
       cy.wait(3000)

       cy.get('.product-unit-price').contains('$1,800.00')

    })

  })
