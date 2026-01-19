<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import range from 'loadsh/range'
import HelloWorld from '@/components/HelloWorld.vue'
import Worker from '@/test.worker'
import SumWorker from '@/workers/sum.worker'
import RightWorker from '@/workers/sumRight.worker'

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
    const wSum = new SumWorker()
    wSum.onmessage = ({ data }) => console.log('sum', data)
    wSum.postMessage(range(1, 100000))
    const wRight = new RightWorker()
    wRight.onmessage = ({ data }) => console.log('right', data)
    wRight.postMessage('hello')
  }
}
</script>
