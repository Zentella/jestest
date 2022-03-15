// uni-test: pruebas para testear funciones y algoritmos(secuencia de pasos lógicos que permiten solucionar un problema)
// Este test, se utiliza para comprobar que un método concreto del código de producción funciona correctamente

// npm run test:unit
import { shallowMount } from '@vue/test-utils' // para montar un componente sin considerar sus hijos
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Registrar from '@/components/Registrar'

import { RegistroService } from '../../src/services/RegistroService'
import flushPromises from 'flush-promises'

describe('HelloWorld.vue', () => {
  // test 1
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg } // atributos del componente montado, tambn se puede usar(data{} y mocks{})
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

// usar localVue si utiliza vrouter o vuex
/*
spec: expectativa de que el resultado de un
comportamiento iguale una determinada condición (Ej:
arrayElementosEncontrados.length > 0)

Prueba Unitario: Una prueba que sirve para comprobar el correcto funcionamiento de
una unidad de código
*/
/*
Test-driven development (TDD), es una técnica
que se basa en un desarrollo de pruebas a través de las cuales debe pasar el código, si está
bien implementado, se continúa creando código enfocado hacia la siguiente prueba, sinó, se
configura hasta que pase la prueba y podamos ir a la siguiente fase. Involucra
esencialmente la práctica de escribir las pruebas primero, y generalmente estas pruebas son
pruebas unitarias.
ciclo de desarrollo:
● Elegimos una prueba.
● Sometemos el código a la prueba.
● Si da error, resolvemos el problema.
● Volvemos a realizar la prueba hasta que dé positivo y pasamos al siguiente test.
*/

/*
Behavior Driven Development (BDD), como bien lo
indica su nombre, no se trata de una técnica de testing, sino que es una estrategia de
desarrollo (así como TDD). Lo que plantea es definir un lenguaje común para el negocio y
para los técnicos, y utilizar eso como parte inicial del desarrollo y el testing. Fomenta la
colaboración entre desarrolladores, control de calidad y participantes no técnicos o de
negocios. Combina las técnicas y los principios generales de TDD con ideas del diseño.
Mientras TDD se enfoca en la prueba unitaria, BDD en cambio, se enfoca en la prueba de
más alto nivel, la prueba funcional, la de aceptación, el foco está en cumplir con el negocio y
no solo con el código.
Esta estrategia encaja bien en las metodologías ágiles, ya que generalmente en ellas se
especifican los requerimientos como historias de usuario. Estas historias de usuario
deberán tener sus criterios de aceptación, y de ahí se desprenden pruebas de aceptación
*/

/*
Jest ofrece algunas funciones especiales, como el hecho de que permite ejecutar
pruebas en paralelo, iniciando cada prueba en un proceso separado, lo cual debería
disminuir el tiempo de ejecución del set de pruebas de una aplicación, y el uso de snapshots,
que son tests que comprueban que la estructura (HTML) del componente sea igual a una
versión previamente almacenada.

expect(registrarBtn.classes('is-disabled')).toBe(true) // Estilo Jest
expect(registrarBtn.classes('is-disabled')).to.be.true // Estilo Chai
*/

/*
La API de Aserciones de Jest 
● expect(valor): Es la función utilizada cada vez que se desea evaluar un valor, Se
utiliza en conjunto con una función "matcher" para realizar una aserción sobre el
valor.
● .toBe(valor): Función matcher para comparar valores primitivos, o la identidad
referencial de dos instancias de un objeto (evaluar si es el mismo objeto y no dos del
mismo tipo). Se recomienda no utilizar para evaluar valores de punto flotante (0.1), lo
que puede ocasionar inconsistencias.
● .not: Invierte el valor lógico de una expresión a ser evaluada, se utiliza precediendo
al matcher.
Ejemplo: expect(nombre).not.toBe('Juan') Espera que el valor de nombre sea
distinto de 'Juan'.
● .toBeFalsy() y .toBeTruthy: Evalúa que el valor sea, respectivamente, Falso o
Verdadero.
Ejemplo: expect(varibaleConValorFalse).toBeFalsy().
● .toBeNull(), .toBeUndefined(), .toBeNaN(): Evalúa que el valor sea null,
undefined o NaN respectivamente.
● .toBeDefined(): Evalúa que una propiedad esté definida.
Ejemplo: let x = { a: 10 } expect(x.a).toBeDefined().
● .toEqual(valor): Compara recursivamente todas las propiedades de un objeto
para evaluar igualdad, en vez de solo evaluar la identidad referencial. En primitivos
utiliza Object.is() en vez de === para comparar.
● .toMatch(regExp|String): Evalúa si un string coincide con una expresión regular:
Ejemplo: expect(listaTareas.toString()).toMatch('/Jugar/'),
expect(usuario.email).toMatch(new RegExp(/\S+@\S+/g). Además también
encuentra un substring dentro de un String más largo.
● .toContain(valor), .toContainEqual(obj): El primero evalúa si un valor está
contenido dentro de un Array, o en el caso de un String, si el valor es un substring del
valor original. El segundo evalúa si un objeto está contenido en un array comparando
recursivamente las propiedades de un objeto.
● .toHaveLength(numero): Evalúa que la propiedad .length del Array sea igual a
numero.
● .toHaveProperty(clave, valor): Evalúa la existencia de una propiedad dentro
de un objeto, y opcionalmente su valor.
Ejemplo: expect(casa).toHaveProperty('color'),
expect(casa).toHaveProperty('color', '#00FF00').
Para objetos anidados se puede utilizar el operador.
Ejemplo: expect(casa).toHaveProperty('direccion.nroDepartamento').
● .toBeGreaterThan(n), .toBeGreaterThanOrEqual(n), .toBeLessThan(n),
.toBeLessThanOrEqual(n): Evalúa que un numero sea Mayor que, Mayor o igual
que, Menor que o Menor o igual que.
● .toThrow(valor): Evalúa si una función lanza un Error y opcionalmente evalúa el
mensaje de error.
● .resolves, .rejects: Desenvuelve la resolución o rechazo de una Promesa, para
luego ser evaluada por un matcher.
Ejemplo: expect(Promise.resolve('OK')).resolves.toBe('ok'),
expect(Promise.reject(new Error('Fail'))).rejects.toThrow('Fail')

Las siguientes funciones son utilizadas con la biblioteca de Mocks
Función                                             Evalúa
.toHaveBeenCalled()                                 Si el mock fue invocado
.toHaveBeenCalledTimes(numero)                      Cuántas veces fue invocado
.toHaveBeenCalledWith(arg1, arg2, ...)              Si fue invocado con estos argumentos
.toHaveBeenLastCalledWith(arg1, arg2, ...)          Si fue invocado con estos argumentos en la última llamada
.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....) Si fue invocado con estos argumentos en la enésima llamada
.toHaveReturned()                                   Si retornó sin errores al menos una vez
.toHaveReturnedTimes(numero)                        Si retornó sin errores N veces
.toHaveReturnedWith(valor)                          Si retornó el siguiente valor
.toHaveLastReturnedWith(valor)                      Si retornó el siguiente valor la última vez
.toHaveNthReturnedWith(nthCall, valor)              Si retornó el siguiente valor la enésima vez
*/
describe('Registrar.vue', () => {
  // test 2
  it('Permite registro', () => {
    const mockRegistrar = jest.fn()
    const wrapper = mount(Registrar, {
      methods: {
        registrar: mockRegistrar
      }
    })
    // Encontrar los campos
    wrapper.find('input[type="text"]')
      .setValue('Nuevo Usuario')
    wrapper.find('input[type="email"]')
      .setValue('nuevo@usuario.com')
    wrapper.find('input[type="password"]')
      .setValue('v3ry-C0mp7ic4t3d_p4$$w0rD_#')
    wrapper.find('select[name="movie"]')
      .findAll('option')
      .at(2) // Nunca, Diario, Semanal, Mensual
      .setSelected()
    wrapper.find('input[type="checkbox"][name="acepta-terminos"]')
      .setChecked()
    wrapper.find('button[type="submit"]')
      .trigger('click')
    // CREAR ASERCIÓN O EXPECTATIVA
    // PARA TESTEAR SI SE REALIZÓ EL REGISTRO

    // expect(mockRegistrar).toHaveBeenCalled()
    /*
    Expected number of calls: >= 1
    Received number of calls:    0
    */
  })
})

/*
Mock automático
Jest permite hacer mock automáticamente a las funciones de una dependencia externa
utilizada por el componente a testear. En el siguiente ejemplo se muestra como realizar esta
acción para el caso recién mencionado:

*/

jest.mock('../../src/services/RegistroService')
describe('Registrar.vue', () => {
  // test 3
  it('Muestra mensaje de error si servicio falla', () => {
    const wrapper = shallowMount(Registrar, {})
    // Encontrar los campos
    wrapper.find('input[type="text"]').setValue('Nuevo Usuario')
    // Etc, Etc, Etc ....
    wrapper.find('button[type="submit"]').trigger('click')
    // Ver si muestra mensaje de error, en el proximo ciclo de renderizado
    // expect(wrapper.find('span.errors').isVisible()).toBeTruthy() // err con isVisible()
    expect(wrapper.find('span.errors')).toBeTruthy()
  })

  // it('Muestra mensaje de error si servicio falla', () => {
  //   // INDICAR implementación especifica de .registrar(data)
  //   RegistroService.registrar.mockRejectedValue('Error')
  //   const wrapper = shallowMount(Registrar, {})
  //   // Encontrar los campos
  //   wrapper.find('input[type="text"]').setValue('Nuevo Usuario')
  //   // Etc, Etc, Etc ....
  //   wrapper.find('button[type="submit"]').trigger('click')
  //   // Ver si muestra mensaje de error, en el proximo ciclo de
  //   renderizado
  //   expect(wrapper.find('span.errors').isVisible()).toBeTruthy()
  // })

})

/*
Una forma común de esperar la resolución de una promesa es utilizando la biblioteca
flush-promises, que permite esperar hasta que los handlers de todas las promesas
pendientes se ejecuten.

npm install --save-dev flush-promises

● done(): Cuando la función que implementa el caso de pruebas recibe un parámetro
done, una función llamada done() estará disponible para ser invocada al momento de
terminar la prueba. Esto es útil cuando se testea con datos asíncronos, ya que es
posible indicar cuándo terminar la prueba. (preferentemente después de haber
recibido y testeado con los datos asíncronos).

● async-await: Otra posibilidad, cuando existe una expresión de promesa dentro del
test, es definir la función del test como asíncrona async y utilizar await para esperar
la resolución de la promesa. (solo es posible utilizar la palabra clave await dentro de
una función definida como async).

*/

/*
Este ejemplo muestra cómo esperar por un componente que utiliza datos asíncronos
utilizando done(), flush-primises y una notación then-catch
*/
// describe('Registrar.vue', () => {
//   it('Muestra mensaje de error si servicio falla', (done) => {
//     RegistroService.registrar.mockRejectedValue('Error')
//     const wrapper = shallowMount(Registrar, {})
//     // Encontrar los campos
//     wrapper.find('input[type="text"]').setValue('Nuevo Usuario')
//     // Etc, Etc, Etc...
//     wrapper.find('button[type="submit"]').trigger('click')
//     // Ver si muestra mensaje de error, en el proximo ciclo de
//     renderizado
//     flushPromises().then(() => {
//       expect(wrapper.find('span.errors').isVisible()).toBeTruthy()
//       done()
//     })
//   })
// })

/*
Cómo flushPromises() retorna una promesa, que se resuelve cuando los handlers de
todas las demás promesas se han ejecutado, es posible reemplazar .then() y done() con
async-await. Así el ejemplo anterior quedaría de la siguiente forma:
*/
describe('Registrar.vue', () => {
  // test 4
  it('Muestra mensaje de error si servicio falla', async () => {
    const wrapper = shallowMount(Registrar, {})

    // Etc, Etc, Etc.....
    // Ver si muestra mensaje de error, en el proximo ciclo de renderizado
    await flushPromises()
    // expect(wrapper.find('span.errors').isVisible()).toBeTruthy() // err
    expect(wrapper.find('span.errors')).toBeTruthy()

  })
})

/*
Para implementar un Mock Manual es necesario crear un directorio llamado __MOCKS__/ en
el mismo lugar donde se encuentra el módulo original, y dentro de este directorio, un archivo
con el mismo nombre que el del módulo a importar, pero que contendrá una versión
sustituta del código.
ej:
|--src/
| |--services/
| |--RegistroService.js
| |--__MOCKS__/
| |--RegistroService.js

https://jestjs.io/es-ES/docs/getting-started
https://jestjs.io/es-ES/docs/mock-function-api
https://antenna.io/blog/2019/01/mock-asynchronous-api-calls-in-vue-component-tests/
https://lmiller1990.github.io/vue-testing-handbook/jest-mocking-modules.html#mocking-modules
https://v1.test-utils.vuejs.org/guides/testing-async-components.html
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await

Mucha de la documentación de Vue relacionada a testing presenta ejemplos basados en
Jest, pero Mocha, al ser considerado un framework maduro, tiene mayor cantidad de
recursos online relacionados a su instalación y uso en general.

*/

/*
npm run test:unit
*/
