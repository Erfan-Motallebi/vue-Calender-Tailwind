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
          v-for="day in startDay()"
          :key="day"
        ></p>
        <p
          class="text-center my-2"
          style="width: 14.28%"
          v-for="day in daysOfMonth()"
          :key="day"
          :class="[currentDay(day) ? 'currentDayStyle' : '']"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex justify-between">
        <button class="px-2 mt-2 active:bg-green-400" @click="prev()">
          Previous
        </button>
        <button class="px-2 mt-2 active:bg-green-400" @click="next()">
          Next
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonth: new Date().toLocaleString("default", { month: "long" }),
      currentMonthDays: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      weeks: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    };
  },
  methods: {
    daysOfMonth() {
      return new Date(this.currentYear, this.currentMonthDays, 0).getDate();
    },
    prev() {
      return this.currentMonthDays--;
    },
    next() {
      return this.currentMonthDays++;
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonthDays - 1, 0).getDay();
    },
    currentDay(day) {
      return new Date().getDate() == day;
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

@layer components {
  .currentDayStyle {
    @apply border rounded-lg shadow-lg bg-indigo-600 text-red-500 hover:bg-opacity-40 hover:bg-red-900;
  }
}
</style>
