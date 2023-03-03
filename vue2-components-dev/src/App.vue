<template>
  <div class="app-container" id="app">
    <p> vue 2 study</p> 
    <router-link to="/home">Home</router-link>|
    <router-link to="/about">About</router-link>
    <p @click="$store.commit('add')">{{ $store.state.counter }}</p>
    <p @click="$store.dispatch('add')">async{{ $store.state.counter }}</p>
    <p>double: {{ $store.getters.doubleCounter }}</p> 
    <router-view></router-view>  
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>