<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="button">
      <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
