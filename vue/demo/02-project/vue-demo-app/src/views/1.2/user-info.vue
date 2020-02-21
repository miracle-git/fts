<template>
  <div>
    <select placeholder="区号" :value="phoneInfo.areaCode" @change="handleAreaCodeChange">
      <option value="+86">+86</option>
      <option value="+88">+88</option>
    </select>
    <input type="number" placeholder="手机号" :value="phoneInfo.phone" @input="handlePhoneChange">
    <input type="number" placeholder="邮编" :value="zipCode" @input="handleZipCodeChange">
  </div>
</template>

<script>
  export default {
    methods: {
      handleAreaCodeChange(e) {
        this.$emit('change', {
          ...this.phoneInfo,
          areaCode: e.target.value
        })
      },
      handlePhoneChange(e) {
        this.$emit('change', {
          ...this.phoneInfo,
          phone: e.target.value
        })
      },
      handleZipCodeChange(e) {
        this.$emit('update:zipCode', e.target.value)
      }
    },
    model: {
      prop: 'phoneInfo', // 默认value
      event: 'change' // 默认input
    },
    props: {
      phoneInfo: Object,
      zipCode: String
    }
  }
</script>
