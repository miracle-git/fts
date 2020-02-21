<template>
  <div>
    <p>{{fullName}}</p>
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
        fullName: 'Miracle He'
      }
    },
    watch: {
      firstName(val) {
        this.firstNameTimer && clearTimeout(this.firstNameTimer)
        this.firstNameTimer = setTimeout(() => {
          this.fullName = `${val} ${this.lastName}`
        }, 500)
      },
      lastName(val) {
        this.lastNameTimer && clearTimeout(this.lastNameTimer)
        this.lastNameTimer = setTimeout(() => {
          this.fullName = `${this.firstName} ${val}`
        }, 500)
      }
    }
  }
</script>
