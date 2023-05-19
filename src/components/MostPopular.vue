<template>
  <div class="w-[60%] mx-auto">
    <div class="flex flex-col justify-center items-center mt-20 text-black">
      <div class="mb-5 flex justify-between w-full">
        <p class="text-[17px]">Most Popular</p>
        <a href="" class="text-[#572589] text-[16p]">SEE ALL</a>
      </div>
      <div class="flex gap-5">
        <div v-for="g in games.slice(5, 10)" :key="g.id">
          <div class="w-[165px] h-[220px]">
            <router-link :to="`/games/${g.id}`">
              <img
                class="rounded h-40 object-center object-cover"
                :src="g.image"
                alt="image of the game"
            /></router-link>
            <p class="line-clamp-2 mt-3">{{ g.title }}</p>
            <router-link :to="`/games/${g.id}`"> <ButtonVue /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./Button.vue";
import { inject, toRefs } from "vue";
export default {
  name: "MostPopular",
  components: { ButtonVue },
  setup() {
    let games = inject("games");
    return {
      games,
    };
  },
};
</script>

<style scoped></style>
