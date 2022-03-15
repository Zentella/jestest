<template>
    <div class="resp">
      <!-- <form
        id="app"
        @submit="checkForm"
        action="https://jsonplaceholder.typicode.com/users"
        method="post"
      > -->

      <form
        id="app"
        
      >
        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
          <ul>
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </p>

        <p>
          <label for="nombre">Nombre</label>
          <input
            id="nombre"
            v-model="nombre"
            type="text"
            name="nombre"
          >
        </p>
        <p>
          <label for="age">Edad</label>
          <input
            id="age"
            v-model="age"
            type="number"
            name="age"
            min="0">
        </p>
        <p>
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email">
        </p>
        <p>
          <label for="password">password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password">
        </p>
        <p>
          <label for="movie">Película favorita</label>
          <select
            id="movie"
            v-model="movie"
            name="movie"
          >
            <option>Star Wars</option>
            <option>Vanilla Sky</option>
            <option>Atomic Blonde</option>
          </select>
        </p>
        <input type="checkbox" id="checkbox" v-model="checked" name="acepta-terminos">
        <label for="checkbox">{{ checked }}</label>
        <p class="boton">
          <button
          class="bt bt-enviar"
            type="submit"
            value="Enviar"
            @click="checkForm"
          >Enviar
          </button>
        </p>

      </form>
      <div>
        <h6 class="mb-0 text-capitalize p-2">{{ user }}</h6>
        <h5>{{ edad }}</h5>
        <button id="boton" @click="del">-</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Registrar',

    data() {
    return {
    errors: [],
    nombre: 'Mario',
    age: 50,
    email: null,
    password: null,
    movie: null,
    checked: false,
    user: null,
    edad: null 
    }
  },

  methods:{
    del(){
      this.edad = null
    },

    checkForm: function (e) {
      this.user = this.nombre
      this.edad = this.age
      //   if (this.nombre) {
      // // if (this.nombre && this.age) {

      //   return true;
      // }

      this.errors = []

      if (!this.nombre) {
        this.errors.push('El nombre es obligatorio.')
      }
      if (!this.age) {
        this.errors.push('La edad es obligatoria.')
      }

      e.preventDefault();
    }
  }
}
</script>

<style scoped>
.bt-enviar {
  background: burlywood;
}
</style>