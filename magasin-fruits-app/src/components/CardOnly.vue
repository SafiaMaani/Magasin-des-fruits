<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
    <article
      class="flex flex-col dark:bg-gray-900"
      v-for="(item, key) in myJson"
      v-bind:key="item.id"
    >
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <img
          alt="fruit"
          class="object-cover w-full h-52 dark:bg-gray-500"
          v-bind:src="item.image"
        />
      </a>
      <div class="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          class="text-xs tracking-wider uppercase hover:underline dark:text-violet-400"
          >{{ key }}</a
        >
        <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">
          {{ item.description }}
        </h3>
        <div
          class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400"
        >
          <span
            >Qualité: <strong>{{ item.quality }}</strong></span
          >
          <span>{{ item.price }} DH</span>
        </div>
        <div class="flex flex-col self-center">
          <button
            @click="addItemToCart(item)"
            class="px-3 py-1 bg-gray-200 rounded-lg mr-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
import json from "../data/fakeData.json";
import { mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      myJson: json,
      cart: [],
    };
  },
  computed: {
    ...mapGetters(["cartItemCount"]),
  },
  methods: {
    ...mapMutations(["addItemToCart"]),
  },
};
</script>
