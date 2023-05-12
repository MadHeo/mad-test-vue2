<template>
  <button id="counter" @click="increment">{{ count }}</button>
  <div></div>
  <button id="counter" @click="increment2">{{ count2 }}</button>
  <p>{{ now2 }}</p>
  <p>{{ now() }}</p>
  <div>
    <button @click="awesome = !awesome">전환</button>
    <h1 v-show="awesome">Vue는 정말 멋지죠!</h1>
    <h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
    <h1 v-else>아뇨</h1>
  </div>
  <li v-for="(value, key, index) in myObject">{{ key }} : {{ value }}</li>
  <h4 class="bg-red-300 w-20 h-20">{{ title }}</h4>
</template>

<script>
import { nextTick } from "vue";

export default {
  props: ["title"],
  data() {
    return {
      count: 0,
      count2: 1,
      awesome: true,
      classObject: {
        active: true,
        "text-danger": false,
      },
      myObject: {
        title: "Vue에서 목록을 작성하는 방법",
        author: "홍길동",
        publishedAt: "2016-04-10",
      },
    };
  },
  methods: {
    async increment() {
      this.count++;

      // 아직 DOM 업데이트되지 않음.
      console.log(document.getElementById("counter").textContent); // 0

      await nextTick();
      // 이제 DOM 업데이트됨.
      console.log(document.getElementById("counter").textContent + "next"); // 1
    },

    now() {
      return Date.now();
    },
  },
  computed: {
    increment2() {
      this.count2++;
    },
    now2() {
      return Date.now();
    },
  },
};
</script>

<style>
.bodu {
}
</style>
