// en los unitest se realizan pruebas a nivel funcional del codigo
import { createLocalVue } from '@vue/test-utils' // crea un simil de vue
import Vuex from 'vuex' // importar vuex para testear store
import storeConfig from './mocks/store-config' // simula todo el store real creado en la app

const localVue = createLocalVue() // generar una instancia
localVue.use(Vuex) // esta instancia usará vuex
const store = new Vuex.Store(storeConfig) // pasar como argumento el objeto(storeConfig) q simula el store

describe("Tests de vuex de otr arch test", () => { // funcion callback

    const pizza = { cant: 1, id: "P003" } // pizza estatica, simulacion de un payload q pasaremos a addToCar

// test unitari para probar q pizzas se agregen al carro
    it('Acción para agregar una pizza al carrito', () => {
        expect(store.state.carrito).toHaveLength(0) // cantidad en cero del carrito(vacio), porq aun no se han agregado pizzas
        // expect(store.state.carrito).toHaveLength(1) // para probar que erra
        
/*
expect(received).toHaveLength(expected)
expect(store.state.carrito).toHaveLength(1)
    Expected length: 1 // esperaba 1
    Received length: 0 // pero no hay
    Received array:  []
*/
        store.dispatch('addToCart', pizza.id) // pasamos como payload el id de la pizza estatica, (dispatch es como el boton agregar)
        expect(store.state.carrito).toEqual([pizza]) // se espera q el carrito contenga el array creado de la pizza estatica
        // test pass
    })

    /*
    npm run test:unit
    */

    //test unitario para probar incremento en el carrito
    // en este momento , ya está inc la pizza en el carrito, gracias al test anterior
    it('Acción para aumentar la cantidad de una pizza en el carrito', () => {
        store.dispatch('plus', pizza.id)//dispatch para ejecutar funcion plus, ya q hay una pizza cant sería 2
        expect(store.state.carrito[0].cant).toBe(2) // la cantidad debe ser 2, en el primer elemento[0] del carrito
        // expect(store.state.carrito[0].cant).toBe(3) // probando falla
        /*
        expect(received).toBe(expected) // Object.is equality
        expect(store.state.carrito[0].cant).toBe(3)

        Expected: 3 // esperaba 3
        Received: 2 // pero hay 2
        */
    })

})