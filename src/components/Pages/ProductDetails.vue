<template>
  <div class="flex flex-col items-center text-black">
    <img
      class="rounded mt-8 w-[60%] object-fill h-64"
      src="../../assets/Group7.jpg"
      alt="Featured Game"
    />
    <div class="w-[60%] mt-8">
      <h3>Subway Surfers</h3>
      <h5>SYBO Games</h5>
      <h6 class="text-gray-400">300k Downloads</h6>
      <p class="my-3">
        DASH as fast as you can! <br />
        DODGE the oncoming trains! <br />
        <br />
        Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog.
        <br />
        <br />
        ★ Grind trains with your cool crew! <br />
        ★ Colorful and vivid HD graphics!
      </p>
      <h6>Read more</h6>
    </div>
    <MostRecommendationVue />
  </div>
</template>

<script>
import MostRecommendationVue from "../MostRecommendation.vue";
export default {
  name: "ProductDetails",
  components: {
    MostRecommendationVue,
  },
};
</script>

<style scoped></style>
