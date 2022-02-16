<template>
  <div>
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 mt-24 grid-cols-1 mx-6">
        <div class="lg:grid col-span-1 hidden">
          <img src="/mail.svg" class="object-cover h-96 mx-auto" />
        </div>
        <div class="grid col-span-1">
          <div>
            <h2
              class="
                text-gray-600
                tracking-normal
                font-light
                text-3xl
                leading-18
              "
            >
              Create An Account Connect With Us Today
            </h2>
            <p class="text-gray-500 font-light text-base py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              accusamus ex. Aliquid adipisci consequuntur suscipit officiis
              praesentium dolores, exercitationem expedita?.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <input
              type="text"
              value="Name"
              class="
                mt-1
                block
                w-full
                px-3
                py-4
                bg-white
                border border-slate-300
                rounded-md
                text-sm
                shadow-sm
                placeholder-slate-400
                focus:outline-none focus:border-blue-500
              "
            />

            <input
              type="text"
              value="Address"
              class="
                mt-1
                block
                w-full
                px-3
                py-4
                bg-white
                border border-slate-300
                rounded-md
                text-sm
                shadow-sm
                placeholder-slate-400
                focus:outline-none focus:border-blue-500
              "
            />

            <input
              type="text"
              value="Phone Number"
              class="
                mt-1
                block
                w-full
                px-3
                py-4
                bg-white
                border border-slate-300
                rounded-md
                text-sm
                shadow-sm
                placeholder-slate-400
                focus:outline-none focus:border-blue-500
              "
            />
          </div>

          <div class="py-16">
            <button
              class="
                px-14
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
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>