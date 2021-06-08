<template>
<div>
    <h2 :class="$attrs.class">1111111111</h2>
    <h2 :='$attrs'>2222222222</h2>
</div>
</template>

<script>
export default {
    inheritAttrs:false,
  data () {
    return {
    }
  }
}
</script>

<style  scoped>

</style>
