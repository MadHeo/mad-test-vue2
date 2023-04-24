<template>
  <div class="w-full h-full bg-gray-700/50 fixed p-20" v-if="isModalOn">
    <div class="w-1/2 h-1/3 rounded-md bg-white p-10">
      <button @click="isModalOn = false">X</button>
      <h4>상세페이지</h4>
      <p>상세페이지내용</p>
    </div>
  </div>

  <div class="bg-yellow-500 px-10 py-5">
    <!-- //vue의 반복문 v-for (변수명, index) in data  -->
    <!-- //vue에서 인라인에 함수 쓸 때는
        : 클론 쓰면 됨 -->
    <a class="text-white mx-5" v-for="(menuName, i) in menusName" :key="i">{{
      menuName
    }}</a>
  </div>

  <!-- <div v-for="(products, i) in products" :key="i">
        {{ logo }}
        <h4 :style="st">{{ products }}</h4>
        <p>{{ price }}만원</p>
        <button @click="countUp">허위매물 신고</button>
        <span>신고수 : {{ count }}</span>
      </div> -->

  <!-- 데이터 받을 때는 중괄호 두개 -->

  <div v-for="(oneRoomData, i) in oneRoom" :key="i">
    <img class="w-100% mt-8" :src="oneRoomData.image" alt="" />
    <h4
      class="text-red hover:bg-violet-600 cursor-pointer"
      @click="isModalOn = true"
      :style="st"
    >
      {{ oneRoomData.title }}
    </h4>
    <p>{{ oneRoomData.price }}만원</p>
    <button @click="countUp">허위매물 신고</button>
    <span>신고수 : {{ oneRoomData.count }}</span>
  </div>
</template>

<script>
import data from "../src/data";

//data 안에는 html에 바인딩 해줄 데이터가 있음
export default {
  data() {
    return {
      oneRoom: data,
      isModalOn: false,
      count: [0, 0, 0, 0, 0, 0],
      price: [60, 50, 30],
      logo: "원룸샵",
      st: "color: blue",
      products: ["역삼동 원룸", "천호동 원룸", "구로동 원룸"],
      menusName: ["Home", "Products", "About"],
    };
  },
  methods: {
    countUp() {
      this.count += 1;
      a++;
    },
  },
};
</script>

<style>
.black-bg {
}
</style>
