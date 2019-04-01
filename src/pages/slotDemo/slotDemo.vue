<template>
  <div class="slot">
    <p>this is slot outer</p>
    <sl>this is slot inner</sl>
    <sl>
      <p slot="one">this is one</p>
      <template slot-scope="a">
        <p>{{ a }}</p>
        <button v-if="a.value != '赤赤'" @click="btnClick(a)">{{ a.value }}</button>
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
