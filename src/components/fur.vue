<template>
  <div id="app">
      <async-component></async-component>
    <async-component></async-component>
  </div>
</template>

<script>
import Home from './Home'
import Play from './Play'
export default {
  components: {
    AsyncComponent: () => ({
      // The component we want to load.
      component: Play,
      // The component to use as a placeholder while the
      // async component is loading.
      loading: Home,
      // The component to render instead if there is an error
      // loading the async component.
      error: Home,
      // The delay before the loading component is shown.
      delay: 50,
      // If this timeout is reached, the async component is considered
      // to have failed loading.
      timeout: 3000
    })
  },
  name: 'app',
}
</script>