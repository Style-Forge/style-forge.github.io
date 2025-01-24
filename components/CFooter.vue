<template>
  <footer class="ta:c p p fz:small op:30 $mt:2">
    <p class="mt:0">Released under the <a href="https://opensource.org/license/MIT" target="_blank">MIT License</a></p>
    <p>Copyright © 2023-present Dmitrii Sagalov</p>
  </footer>
</template>

<script>
export default {
  name: 'CFooter'
}
</script>

<style scoped>
@import 'style-forge.helpers/src/op.css';

footer {
  border-top: 1px solid hsl(var(--sf-c-black) / .2);
}
</style>
