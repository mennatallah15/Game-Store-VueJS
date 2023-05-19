<template>
  <div>
    <CategoryVue />
    <FeaturedGamesVue /> <MostRecommendationVue />
    <MostPopularVue />
    <!-- <div v-for="g in games.slice(5, 10)" :key="g.id">{{ g.title }}</div> -->
  </div>
</template>

<script>
import FeaturedGamesVue from "../FeaturedGames.vue";
// import { getAllgames } from "../../api";
import MostRecommendationVue from "../MostRecommendation.vue";
import MostPopularVue from "../MostPopular.vue";
import { inject } from "vue";
import CategoryVue from "../Category.vue";
// import axios from "axios";
export default {
  name: "Home",
  components: {
    FeaturedGamesVue,
    MostRecommendationVue,
    MostPopularVue,
    CategoryVue,
  },
  setup() {
    let games = inject("games");
    console.log("games from", games);
    return {
      games,
    };
  },

  data() {
    return {
      //   games: [],
    };
  },
};
</script>

<style scoped></style>
