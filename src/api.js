import axios from "axios";
export async function getAllgames() {
  let games;
  const options = {
    method: "GET",
    url: "https://gamerpower.p.rapidapi.com/api/filter",
    params: {
      platform: "epic-games-store.steam.android",
      type: "game.loot",
    },
    headers: {
      "X-RapidAPI-Key": "fb93f5e53emshc08d7a7abe9a55dp15a4cdjsn5e8a8335a76d",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    games = response.data;
  } catch (error) {
    console.error(error);
  }
  console.log(games);
  return { games };
}
