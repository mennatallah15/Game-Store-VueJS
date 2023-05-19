<template>
  <Navbar v-if="!$route.meta.hideNavbar" />
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { onMounted, ref, provide } from "vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    // const { games } = getAllgames();
    let games = ref([]);
    async function getAllgames() {
      const options = {
        method: "GET",
        url: "https://gamerpower.p.rapidapi.com/api/filter",
        params: {
          platform: "epic-games-store.steam.android",
          type: "game.loot",
        },
        headers: {
          "X-RapidAPI-Key":
            "fb93f5e53emshc08d7a7abe9a55dp15a4cdjsn5e8a8335a76d",
          "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        games.value = response.data;
      } catch (error) {
        console.error(error);
      }
      console.log(games.value);
    }
    onMounted(() => {
      getAllgames();
    });
    provide("games", games);
    console.log(games);
    return { games };
  },
};
</script>

<style></style>
