<template>
  <div>
    <user-info v-model="phoneInfo"
               :zip-code.sync="zipCode"/>
    <user-info :phone-info="phoneInfo"
               :zip-code="zipCode"
               @change="val => phoneInfo = val"
               @update:zipCode="val => zipCode = val"/>
  </div>
</template>

<script>
  import UserInfo from '@/views/1.2/user-info'

  export default {
    data() {
      return {
        phoneInfo: {
          areaCode: '+86',
          phone: ''
        },
        zipCode: ''
      }
    },
    components: {
      UserInfo
    }
  }
</script>
