<template>
  <div>
    <div class="container mx-auto">
      <div class="grid grid-flow-row mx-6 mt-12">
        <div class="text-center">
          <h2
            class="text-gray-600 tracking-normal font-light text-3xl leading-18"
          >
            Latest Blog
          </h2>
          <p class="text-gray-500 font-light py-6 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-5 mt-10 grid-cols-1">
          <div class="grid col-span-1">
            <img
              src="/blog-one.jpg"
              class="h-64 hover:opacity-80 transition cursor-pointer"
            />
            <p class="text-gray-500 font-light text-base pt-2">
              23 August, 2021
            </p>
            <h2
              class="
                text-gray-600
                tracking-normal
                font-light
                text-xl
                py-4
                leading-18
              "
            >
              Lorem ipsum dolor sit.
            </h2>
            <p class="text-gray-500 font-light text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              tempora itaque voluptatum.
            </p>
          </div>
          <div class="grid col-span-1">
            <img
              src="/blog-two.jpg"
              class="h-64 hover:opacity-80 transition cursor-pointer"
            />
            <p class="text-gray-500 font-light text-base pt-2">
              23 August, 2021
            </p>
            <h2
              class="
                text-gray-600
                tracking-normal
                font-light
                text-xl
                py-4
                leading-18
              "
            >
              Lorem ipsum dolor sit.
            </h2>
            <p class="text-gray-500 font-light text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              tempora itaque voluptatum.
            </p>
          </div>
          <div class="grid col-span-1">
            <img
              src="/blog-three.jpg"
              class="h-64 hover:opacity-80 transition cursor-pointer"
            />
            <p class="text-gray-500 font-light text-base pt-2">
              23 August, 2021
            </p>
            <h2
              class="
                text-gray-600
                tracking-normal
                font-light
                text-xl
                py-4
                leading-18
              "
            >
              Lorem ipsum dolor sit.
            </h2>
            <p class="text-gray-500 font-light text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              tempora itaque voluptatum.
            </p>
          </div>
        </div>
        <div class="py-16 text-center">
          <button
            class="
              px-10
              py-3
              align-middle
              border-solid border border-blue-600
              uppercase
              bg-blue-50
              tracking-widest
              text-gray-600
              rounded-md
              text-sm
              font-semibold
              hover:bg-blue-500 hover:text-white hover:border-blue-500
            "
          >
            Go To Blog
          </button>
        </div>
      </div>
    </div>

    <!-- Testimonial Section -->
    <div class="container mx-auto">
      <div
        class="
          grid
          lg:grid-cols-6
          mx-6
          py-16
          border-solid border-b-2 border-blue-500
          md:grid-cols-1
        "
      >
        <div class="grid col-span-4">
          <h2
            class="
              text-gray-600
              italic
              tracking-normal
              font-light
              text-4xl
              py-4
              px-12
              leading-18
            "
          >
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            unde, ducimus dolores accusamus, consectetur veniam excepturi"
          </h2>
        </div>

        <div class="grid col-span-2 relative">
          <div
            class="
              flex
              items-center
              justify-center
              md:items-start md:justify-start
            "
          >
            <img src="/avatar.jpg" class="h-20 rounded-full px-6" />
            <div class="flex flex-col">
              <p class="text-gray-500 font-light text-lg">John Doe</p>
              <p class="text-gray-500 font-light text-sm">
                System Engineer, IPDC
              </p>
            </div>
          </div>
          <img src="/bg-circle.png" class="h-32 absolute right-14 top-6" />
        </div>
      </div>
    </div>
  </div>
</template>