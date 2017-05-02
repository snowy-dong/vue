<template>
  <div class="header">
    <img :src="msg"/>
    <h1>I am header</h1>
  </div>
</template>

<script>
export default {
  name: 'header',
   data() {
    return {
      msg: require('../../resource/img/brand@2x.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
