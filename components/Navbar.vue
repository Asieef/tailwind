<template>
  <div>
    <div>
      <img src="/bg-circle.png" class="h-32 absolute top-8 left-2" />
    </div>
    <div class="grid grid-flow-col grid-cols-10 mt-16 mx-6 h-16 z-20">
      <div class="col-span-4">
        <img src="/logo.png" class="h-8 w-38" />
      </div>
      <div
        class="
          col-span-6
          text-right
          lg:text-base
          text-gray-600
          tracking-widest
          font-semibold
          md:text-xs
          hidden
          md:block
        "
      >
        <!-- <div class="basis-3/4 block text-right lg:hidden md:hidden">
          <i class="text-blue-500 text-4xl fas fa-bars" aria-hidden="true"></i>
        </div> -->

        <ul>
          <li class="inline-block px-4">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="inline-block px-4">
            <NuxtLink to="/pricing">Pricing</NuxtLink>
          </li>
          <li class="inline-block px-4">
            <NuxtLink to="/packages">Packages</NuxtLink>
          </li>
          <li class="inline-block px-4">
            <NuxtLink to="/company">Company</NuxtLink>
          </li>
          <li class="inline-block px-4">
            <NuxtLink to="/quote">Quote</NuxtLink>
          </li>
          <li class="inline-block px-4">
            <NuxtLink to="/support">Support</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="hidden lg:block">
        <button
          class="
            px-10
            flex
            align-middle
            py-2
            bg-blue-600
            tracking-widest
            text-white
            rounded-md
            basis-1/8
            text-sm
            font-semibold
            hover:bg-gray-600
          "
        >
          Get Price
        </button>
      </div>
    </div>
  </div>
</template>