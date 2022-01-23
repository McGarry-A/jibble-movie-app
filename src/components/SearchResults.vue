<template>
  <div class="card">
    <h4>{{ movie.Title }}</h4>
    <p>{{ movie.Year }}</p>
    <fa icon="star" @click="listActions.handleAddToList(movie)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listState, listActions } from "../utils/MyList";
export default defineComponent({
  props: ["movie", "index"],
  setup() {
    
    return { listActions }
  },
});
</script>


<style scoped>
</style>