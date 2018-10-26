<template>
    <div id="links">
        <router-link class="spacing" to="/">Home</router-link>
        <router-link class="spacing" to="/piano">Piano</router-link>
                <router-link class="spacing" to="/notepicker">Note Peacker</router-link>
        <router-link class="spacing" to="/demo">Demo</router-link>
        <router-link class="spacing" to="/pitch">Pitch</router-link>
    </div>
</template>

<script>
export default {
    name: "navigation"
}
</script>
<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
  #links{
      float: left;
  }
</style>