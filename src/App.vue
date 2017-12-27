<template>
  <div id="app">
    <form @submit="call()">
      <button type="call">click me</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      wsData: ''
    }
  },
  methods: {
    call: function () {
      setInterval(() => {
        this.$socket.send('')
        this.$options.sockets.onmessage = (d) => {
          if (this.wsData !== d.data) {
            console.log(d)
          }
          this.wsData = d.data
        }
      }, 1000)
    }
  },
  created: function () {
    this.call()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
