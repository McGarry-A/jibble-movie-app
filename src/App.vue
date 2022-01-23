<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/list">My List</router-link>
  </div>
  <router-view/>
</template>


<script lang="ts">
import { reactive } from '@vue/reactivity'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    const state = reactive({
      title: "",
      page: 1
    })

    const fetchData = (title: string, page: number) => {
      fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`)
    }

    return { state, fetchData }
  },
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
