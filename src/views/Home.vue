<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Worker from '@/test.worker'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted () {
    const w = new Worker()
    w.onmessage = event => {
      console.log('From worker', event)
    }
    w.postMessage('Test')
  }
}
</script>
