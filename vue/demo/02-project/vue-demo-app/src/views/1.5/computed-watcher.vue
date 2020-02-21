<template>
  <div>
    <p>Computed: {{fullName}}</p>
    <p>Watcher: {{fullName2}}</p>
    <p>First Name: <input type="text" v-model="firstName"/></p>
    <p>Last Name: <input type="text" v-model="lastName"/></p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: 'Miracle',
        lastName: 'He',
        fullName2: 'Miracle He'
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    },
    watch: {
      firstName(val) {
        this.fullName2 = `${val} ${this.lastName}`
      },
      lastName(val) {
        this.fullName2 = `${this.firstName} ${val}`
      }
    }
  }
</script>
