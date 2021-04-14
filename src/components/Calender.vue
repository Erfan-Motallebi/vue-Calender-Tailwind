<template>
  <div class="w-full flex">
    <div class="m-auto my-10">
      <h1 class="my-3 text-center">Calender</h1>
      <section class="flex justify-between">
        <h2 class="mx-6">{{ currentMonth }}</h2>
        <h2 class="mx-6">{{ currentYear }}</h2>
      </section>
      <section class="flex my-5">
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="week in weeks"
          :key="week"
        >
          {{ week }}
        </p>
      </section>
      <section class=" flex flex-wrap">
        <p
          class="text-center my-2"
          style="width: 14.28%"
          v-for="day in daysOfMonth()"
          :key="day"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex justify-between">
        <button>Previous</button>
        <button>Next</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().toLocaleString("default", { month: "long" }),
      currentYear: new Date().getFullYear(),
      weeks: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    };
  },
  methods: {
    daysOfMonth() {
      return new Date(this.currentYear, new Date().getMonth() + 1, 0).getDate();
    },
  },
};
</script>

<style>
@layer base {
  body {
    @apply bg-bodyColor;
  }
}
</style>
