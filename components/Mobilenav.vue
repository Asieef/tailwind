<template>
  <div>
    <div>
      <img src="/bg-circle.png" class="h-24 absolute top-4 left-2" />
    </div>
    <div class="grid grid-flow-col grid-cols-1 px-12 py-8">
      <div class="col-span-1 p-4">
        <NuxtLink to="/">
          <img src="/logo.png" class="h-8 w-38" />
        </NuxtLink>
      </div>

      <div
        class="col-span-1"
        @click="showMenu"
        :class="['transition duration-150 ease-in-out']"
      >
        <font-awesome-icon
          icon="fa-solid fa-bars"
          class="text-blue-500 text-4xl"
        />
      </div>
    </div>

    <div
      class="
        text-lg text-white
        tracking-widest
        font-semibold
        border
        bg-blue-500
        mx-4
        my-2
        transition-all
        ease-in-out
        delay-150
      "
      v-show="isHidden"
    >
      <ul>
        <li
          class="block p-4 hover:bg-gray-600 text-white border-b border-white"
        >
          <NuxtLink class="block" to="/">Home</NuxtLink>
        </li>
        <li
          class="block p-4 hover:bg-gray-600 text-white border-b border-white"
        >
          <NuxtLink class="block" to="/pricing">Pricing</NuxtLink>
        </li>
        <li
          class="block p-4 hover:bg-gray-600 text-white border-b border-white"
        >
          <NuxtLink class="block" to="/packages">Packages</NuxtLink>
        </li>
        <li
          class="block p-4 hover:bg-gray-600 text-white border-b border-white"
        >
          <NuxtLink class="block" to="/company">Company</NuxtLink>
        </li>
        <li
          class="block p-4 hover:bg-gray-600 text-white border-b border-white"
        >
          <NuxtLink class="block" to="/quote">Quote</NuxtLink>
        </li>
        <li class="block p-4 hover:bg-gray-600 text-white">
          <NuxtLink class="block" to="/support">Support</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
    };
  },

  methods: {
    showMenu() {
      this.isHidden = !this.isHidden;
    },
  },
};
</script>