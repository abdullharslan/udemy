<template>
    <form>
      <label for="email">Email</label>
      <input type="email" v-model="email" id="email" />
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" />
      <button type="submit" @click.prevent="login">Login</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          const { data } = await this.$axios.post('/api/login', {
            email: this.email,
            password: this.password
          })
          // handle successful login
        } catch (error) {
          // handle login error
        }
      }
    }
  }
  </script>
  
  