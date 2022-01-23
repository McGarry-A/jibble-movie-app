<template>
  <div>
    <h1>Your List</h1>
  </div>
  <div class="list-container">
    <div class="list-items" v-for="(movie, index) in listArray" :key="index">
      <search-results :movie="movie" key="index" color="yellow" />
    </div>
  </div>
</template>

<script lang="ts">
import SearchResults from "@/components/SearchResults.vue";
import { defineComponent } from "vue";
import { MovieInterface, listState } from "../utils/MyList";
export default defineComponent({
  name: "List",
  setup() {
    let listArray: MovieInterface[] = [];
    for (let i = 0; i < listState.length; i++) {
      listArray.push(listState[i]);
    }

    return { listState, listArray };
  },
  components: {
    SearchResults,
  },
});
</script>


<style scoped>

.list-container {
  display: flex;
  justify-content: center;
  width:100%;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1440px;
}

</style>