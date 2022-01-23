<template>
  <div class="list">
    <h1>Your List</h1>
  </div>
  <div class="list-items" v-for="(movie, index) in listArray" :key="index">
    <search-results :movie="movie" key="index"/>
  </div>
</template>

<script lang="ts">
import SearchResults from "@/components/SearchResults.vue";
import { defineComponent } from "vue";
import { MovieInterface, listState } from "../utils/MyList";
export default defineComponent({
  name: "List",
  setup() {

    let listArray: MovieInterface[] = []

    for (let i=0; i<listState.length; i++){
      listArray.push(listState[i])
    }

    return {listState, listArray}
  },
  components: {
    SearchResults,
  },
});

</script>
