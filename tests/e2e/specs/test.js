// https://docs.cypress.io/api/introduction/api.html
/*
El propósito de llevar a cabo tests
end-to-end es identificar las dependencias del sistema y garantizar que la información
correcta se transmita entre varios componentes del sistema y sistemas.

El test end-to-end implica garantizar que los componentes integrados de una aplicación
funcionen como se espera. Toda la aplicación se prueba en un escenario del mundo real,
como la comunicación con la base de datos, la red, el hardware y otras aplicaciones.
 */

// test 1
describe('My First Test', () => { // test ok
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

/*
Prueba end-to-end: Un tipo de test que se ocupa de probar la aplicación final “de
principio a fin”
*/

// ************************************************************
// acá se realizan test en funcion a la experiencia del usuario
describe('Tests del carrito', () => {
  it('Botón para agregar usuario', () => {
    // cy.visit('/') // cy de cypress, visitar ruta raiz home 
    cy.visit('/')
    const boton = cy.get('.resp .boton .bt.bt-enviar') // buscar dentro de home, dentro de clase resp y la clase boton, la clase (bt bt-enviar)ambas clases de la etiqueta juntas
    boton.click({ force: true })//hacer clic
    // cy.visit('/carrito')//visitar ruta carrito
    cy.contains("h6", "Mario")//ver q exista h6 con nombre Mario
  })

  it('Botón para eliminar edad', () => {
    cy.get('#boton').click() // clic en el id boton osea a minus(-)
    cy.contains("h5").should('not.exist')//ver q h5 quede vacio
    // cy.get("h5").should('not.exist') // corroborar q h5 ya no exista
  })
})// estos test 2e2 corresponden a la experiencia del usuario

/*
npm run test:e2e
*/