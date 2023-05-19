<template>
  <div class="bg-white shadow-md">
    <div class="navbar px-72 mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-[#572589]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
          >
            <router-link to="/">
              <li><a>Home</a></li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="navbar-center cursor-pointer">
        <img class="h-20" src="../assets/Bitmap.png" alt="Logo" />
        <a class="text-xs -ml-2 text-[#572589]">Game Store</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle" @click="search = 1">
          <svg
            v-show="search === 0"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-[#572589]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div
          v-show="search === 1"
          class="bg-gray-100 w-56 rounded-full p-2 px-4 flex justify-between"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-[#572589]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button @click="search = 0">
            <svg fill="none" viewBox="0 0 25 25" class="h-5 w-5 text-gray-400">
              <path
                fill="currentColor"
                d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
              />
            </svg>
          </button>
        </div>
        <button @click="flag = flag + 1" class="btn-circle btn-ghost">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="{1.5}"
              stroke="currentColor"
              class="w-6 h-6 text-[#572589]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
  <div
    v-show="flag % 2 !== 0"
    class="absolute right-[18rem] bg-white shadow-lg p-10 z-10 w-96 -mt-6"
  >
    <div>
      <div>
        <h5 class="text-sm text-left">Please add your account details</h5>
      </div>
      <p class="relative text-[11px] text-[#444242] mt-3 -mb-3">
        Username / Email
      </p>
      <div class="relative z-0">
        <input
          type="text"
          id="floating_standard"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_standard"
          class="absolute text-lg text-[#444242] top-3 -z-10 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Type your username here</label
        >
      </div>
      <p class="relative text-[11px] text-[#444242] mt-5 -mb-3">Password</p>
      <div class="relative z-0 mb-2">
        <input
          type="text"
          id="floating_standard"
          class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="floating_standard"
          class="absolute text-lg text-[#444242] top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Type your password</label
        >
      </div>
      <h6 class="absolute text-[#572589] text-[14.4px] right-8">
        Forget Password?
      </h6>
      <div class="relative mt-8">
        <button
          class="bg-[#572589] text-white text-[14px] w-full px-4 py-1 mt-3"
        >
          LOGIN
        </button>
      </div>
      <p class="text-center mt-5 text-[#572589] text-[14.4px]">
        Dont have an account? sign up!
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Navbar",
  setup() {
    let flag = ref(0);
    let search = ref(0);
    return {
      flag,
      search,
    };
  },
};
</script>

<style scoped></style>
