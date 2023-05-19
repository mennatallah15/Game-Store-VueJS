<template>
  <div class="w-full flex gap-2 bg-white py-5 px-2 text-black">
    <div v-for="g in games.slice(0, 14)" :key="g.id">
      <div
        v-if="g.id === 2341"
        class="py-2 px-3 rounded-full text-center w-[100px] border-2 bg-[#572589] text-white"
      >
        <p>Adventure</p>
      </div>
      <div
        v-else-if="g.id !== 2341"
        class="py-2 px-3 rounded-full text-center w-[100px] border-2 border-[#D2D2D2]"
      >
        <p>{{ g.type }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "Category",
  setup() {
    let games = inject("games");
    return {
      games,
    };
  },
};
</script>

<style scoped></style>
