<template>
  <section class="flex justify-center">
    <h1>Calender</h1>
  </section>
  <section class="flex justify-center">
    <p class="px-4" v-for="week in weeks" :key="week">{{ week }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      weeks: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    };
  },
};
</script>

<style></style>
