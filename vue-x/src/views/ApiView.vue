<template>
  <div class="api">
    <img alt="Vue logo" src="../assets/logo.png">
    <counter />
    <CounterSquared />
    <Button />
    <input v-model="colorCode" type="text" placeholder="Enter color code">
  </div>
</template>
<script>

export default {
  name: 'ApiView',
  computed: {
      colorCode: {
        get() {
          return this.$store.state.colorCode
        },
        set(newValue) {
          return this.$store.commit('setColorCode', newValue)
        }
      }
  },
  components: {
    'counter' : require('@/components/Counter.vue').default ,
    'CounterSquared' : require('@/components/CounterSquared.vue').default,
    'Button' : require('@/components/button.vue').default,
  }
}
</script>
