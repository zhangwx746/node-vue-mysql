<template>
  <div class="slot">
    <p>this is slot outer</p>
    <sl>this is slot inner</sl>
    <sl>
      <p slot="one">this is one</p>
      <template slot-scope="a">
        <p v-if="a != '赤赤'">{{ a }}</p>
        <button @click="btnClick(a)">{{ a.value }}</button>
      </template>
    </sl>
  </div>
</template>

<script>
import sl from '@/components/slot/slot'
export default {
  data () {
    return {}
  },
  components: {
    sl
  },
  methods: {
    btnClick (a) {
      console.log(a)
    }
  }
}
</script>
