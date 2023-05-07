<template>
  <div
    class="w-screen h-screen fixed bg-gray-100 flex justify-center items-center p-20"
    v-if="isModalOn"
  >
    <div
      class="w-full h-full rounded-md bg-white p-10 flex justify-center items-center flex-col"
    >
      <button @click="isModalOn = false">X</button>
      <div></div>

      <img class="w-50 h-50" src="/webb1.jpg" alt="" />
      <h4>책 제목</h4>
      <p>책 저자</p>
    </div>
  </div>
  <div>
    <input type="text" />
    <button @click="isModalOn = true">책 찾기</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOn: false,
    };
  },
  methods: {},
};
</script>

<style>
.test {
}
</style>
