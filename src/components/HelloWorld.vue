<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-input v-model="inp"></el-input>
    <el-button type="primary" @click="com">发射内容</el-button>
    <p class="show" v-if="pShow"></p>
    <p class="hide" v-else></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: 'Welcome to Your Vue.js App',
    pShow: false
  },
  data () {
    return {
      inp: ''
    }
  },
  methods: {
    com () {
      console.log(this.inp)
      this.$emit('com', this.inp)
      this.inp = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
.show {
  width: 300px;
  height: 50px;
  background-color: #42b983;
}
.hide {
  width: 300px;
  height: 50px;
  background-color: violet;
}
</style>
