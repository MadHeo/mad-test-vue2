<template>
  <div class="bg-yellow-500 px-10 py-5">
    <NuxtLink
      :to="menuName"
      class="text-white mx-5"
      v-for="(menuName, i) in menusName"
      :key="i"
      >{{ menuName }}
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menusName: ["home", "products", "game", "new", "count"],
    };
  },
};
</script>

<style>
.black-bg {
}
</style>
