<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      <!-- use data variable  -->
      <!-- {{ count }}  -->

      <!-- direct use from store  -->
      {{ getCount }}
    </div>

    <div class="button">
      <button @click="decrementAction">-</button>
      <button @click="incrementAction">+</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCounterStore } from '@/store/counter';
export default {
  name: 'HomeView',
  data() {
    return {
      // count: useCounterStore().count,
    }
  },
  computed: {
        ...mapState(useCounterStore, ['getCount']),
    },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement']),
    incrementAction() {
      useCounterStore().increment();
      // this.count = useCounterStore().count;
    },
    decrementAction() {
      useCounterStore().decrement();
      // this.count = useCounterStore().count;
    },
  }
}
</script>
