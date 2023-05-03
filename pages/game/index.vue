<template>
  <button class="border bg-red-200 p-5" @click="show = !show">클릭</button>
  <div class="w-screen h-screen flex justify-center items-center">
    <transition name="imgAnim">
      <img v-if="show" src="/webb1.jpg" alt="" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.imgAnim-enter-active,
.imgAnim-leave-active {
  transition: opacity 0.5s ease;
}
.imgAnim-enter-from,
.imgAnim-leave-to {
  opacity: 0;
}
</style>
