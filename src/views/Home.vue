<template>
  <div class="home">
    <div class="data-entry">
      <input type="text" placeholder="Movie Title" v-model="searchForm.title" />
      <button @click="fetchData(searchForm.title, 1)">Search</button>
    </div>
    <div v-if="state.movieData < 1">
      <h1>Your results will appear here</h1>
    </div>
    <div v-else class="list-container">
      <div
        class="card-container"
        v-for="(movie, index) in state.movieData"
        :key="index"
      >
        <search-results :movie="movie" :index="index" color="gray" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SearchResults from "@/components/SearchResults.vue";
import { reactive } from "@vue/reactivity";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Home",
  components: {
    SearchResults,
  },
  setup() {
    // interface MovieInterface {
    //   title: string,
    //   year: number,
    //   imdbID: string
    // }

    // interface MovieDataInterface {
    //   data: Array<MovieInterface>
    // }

    const state = reactive({
      movieData: [],
      pageNumber: Number,
    });

    const searchForm = reactive({ title: "" });
    const fetchData = async (title: string, page: number) => {
      const response = await fetch(
        `https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`
      );
      const data = await response.json();
      state.movieData = data.data;
      state.pageNumber = data.page;
    };

    return { searchForm, fetchData, state };
  },
});
</script>


<style scoped>
.list-container {
  display: flex;
  justify-content: center;
  width:100%;
  flex-wrap: wrap;
  margin: 100px auto;
  max-width: 1440px;
}
</style>