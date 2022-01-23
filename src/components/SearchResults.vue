<template>
  <div class="card">
    <h4>{{ movie.Title }}</h4>
    <p>{{ movie.Year }}</p>
    <fa icon="star" id="star" color="white" @click="listActions.handleAddToList(movie)" class="star-icon" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { listActions } from "../utils/MyList";
export default defineComponent({
  props: ["movie", "index"],
  setup() {
    return { listActions };
  },
});
</script>


<style scoped>
.card {
  margin: 10px 20px;
  padding: 2em 1em;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>