<template>
  <div>
    <div class="container mx-auto z-50">
      <div
        class="
          grid
          lg:grid-cols-2
          mt-32
          mx-6
          md:grid-cols-1
          text-center
          lg:text-left
        "
      >
        <div class="grid col-span-1">
          <h4 class="text-blue-600 tracking-widest font-semibold text-xl">
            About Our Company
          </h4>
          <br /><br />
          <h2
            class="text-gray-600 tracking-normal font-light text-4xl leading-18"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatu.
          </h2>
          <br /><br />
          <p class="text-gray-500 font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio illum
            fugit doloremque placeat dolorem alias. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A, qui.
          </p>
          <br /><br />
          <div class="py-6">
            <button
              class="
                px-8
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
              Reqeust A Price
            </button>
          </div>
        </div>

        <div class="lg:col-span-1 lg:block hidden">
          <img src="/company.svg" class="object-cover h-96 mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>