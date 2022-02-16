<template>
  <div>
    <div class="container mx-auto">
      <div
        class="
          grid grid-flow-row
          mt-24
          mx-6
          lg:pr-96 lg:text-left
          text-4xl text-center
          pr-0
        "
      >
        <div class="text-blue-600">
          <!-- <i class="fas fa-laptop-code" aria-hidden="true"></i> -->

          <font-awesome-icon
            icon="fa-solid fa-laptop-code"
            class="text-blue-500 text-4xl"
          />
        </div>
        <br />

        <h2
          class="text-gray-600 tracking-normal font-light text-3xl leading-18"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu.
        </h2>
        <br />
        <p class="text-gray-500 font-semibold text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum
          fugit<br />
          doloremque placeat dolorem alias. Lorem ipsum dolor sit amet
        </p>
      </div>

      <div class="grid mx-6 my-24 lg:grid-cols-3 gap-4 grid-cols-1 text-center">
        <div
          class="col-span-1 px-6 py-8 relative border border-blue-50 rounded"
        >
          <img src="/bg-circle.png" class="h-32 absolute top-1 left-1" />
          <!-- <i class="text-blue-500 text-4xl fas fa-cog" aria-hidden="true"></i> -->

          <font-awesome-icon
            icon="fa-solid fa-cog"
            class="text-blue-500 text-4xl"
          />

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
            Commerce
          </h2>
          <p class="text-gray-500 font-semibold text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
            perspiciatis cum explicabo sequi nobis? Pariatur.
          </p>

          <p class="text-right mt-12">
            <a href="#">
              <span class="text-gray-500 uppercase text-sm hover:text-blue-600"
                >Learn More</span
              >
              <!-- <i
                class="text-gray-500 fas fa-arrow-right ml-4 text-sm"
                aria-hidden="true"
              ></i> -->

              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-blue-500 text-sm"
              />
            </a>
          </p>
        </div>

        <div
          class="px-6 col-span-1 py-8 relative border border-blue-50 rounded"
        >
          <img src="/bg-circle.png" class="h-32 absolute top-1 left-1" />

          <!-- <i
            class="text-blue-500 fas fa-shopping-cart text-4xl"
            aria-hidden="true"
          ></i> -->

          <font-awesome-icon
            icon="fa-solid fa-shopping-cart"
            class="text-blue-500 text-4xl"
          />

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
            Trade
          </h2>
          <p class="text-gray-500 font-semibold text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            laudantium minus vero, cupiditate sint recusandae.
          </p>

          <p class="text-right mt-12">
            <a href="#">
              <span class="text-gray-500 text-sm uppercase hover:text-blue-600"
                >Learn More</span
              >

              <!-- <i
                class="text-gray-500 fas fa-arrow-right ml-4 text-sm"
                aria-hidden="true"
              ></i> -->
              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-blue-500 text-sm"
              />
            </a>
          </p>
        </div>

        <div
          class="px-6 col-span-1 py-8 relative border border-blue-50 rounded"
        >
          <!-- <i
            class="text-blue-500 fas fa-shopping-bag text-4xl"
            aria-hidden="true"
          ></i> -->

          <font-awesome-icon
            icon="fa-solid fa-shopping-bag"
            class="text-blue-500 text-4xl"
          />

          <img src="/bg-circle.png" class="h-32 absolute top-1 left-1" />

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
            Supply
          </h2>
          <p class="text-gray-500 font-semibold text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            distinctio, perferendis hic suscipit maxime sed.
          </p>
          <p class="text-right mt-12">
            <a href="#">
              <span class="text-gray-500 uppercase text-sm hover:text-blue-600"
                >Learn More</span
              >
              <!-- <i
                class="text-gray-500 fas fa-arrow-right ml-4 text-sm"
                aria-hidden="true"
              ></i> -->

              <font-awesome-icon
                icon="fa-solid fa-arrow-right"
                class="text-blue-500 text-sm"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>