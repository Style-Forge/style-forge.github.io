<template>
  <div class="sf-var-violet sf-var-skyblue content d:f m:a h y:i $grow:1 $basis:0 ta:c">
    <div class="cols:2 ta:l @tab:d:f:y @tab:ta:c @mob:d:f:y @mob:ta:c">
      <div class="col ta:c @dsk:hide @tab:col:2 @mob:col:2">
        <picture class="pos:r d:ib">
          <img class="obj-fit:contain" src="/images/main.svg" alt="">
        </picture>
      </div>
      <main class="col @tab:col:2 @mob:col:2">
        <div class="px:md">
          <h1 class="sf-c-txt-violet:50">Style-Forge</h1>
          <p class="fz:h3">CSS Framework</p>
          <p>Themes, utilities, colors, form validation, flexbox, and grid for creating responsive websites</p>
          <a class="sf-button bd:c:ii radius:md mt:lg px:md sf-c-txt-violet">Documentation</a>
        </div>
      </main>
      <div class="col:1 ta:c @tab:col:2 @tab:hide @mob:col:2 @mob:hide">
        <picture class="pos:r d:ib">
          <img class="obj-fit:contain" src="/images/main.svg" alt="">
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'main',
  head() {
    return {
      meta: [
        { name: 'robots', content: 'index, follow' }
      ]
    }
  }
}
</script>

<style scoped>
@import 'style-forge.form/src/button.css';

@import 'style-forge.helpers/src/border.css';
@import 'style-forge.helpers/src/display.css';
@import 'style-forge.helpers/src/margin.css';
@import 'style-forge.helpers/src/padding.css';
@import 'style-forge.helpers/src/position.css';
@import 'style-forge.helpers/src/radius.css';

@import 'style-forge.media/src/text.css';

@import 'style-forge.colors/src/colors/10/violet.css';
@import 'style-forge.colors/src/colors/10/skyblue.css';

.content {
  max-width: 1024px;
}

h1 {
  font-size: 3.5em;
  background: linear-gradient(-45deg, hsl(var(--sf-c-violet-50)) 35%, hsl(var(--sf-c-skyblue-50)) 65%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media only screen and (min-width: 1025px) {
  h1 {
    background: linear-gradient(-45deg, hsl(var(--sf-c-violet-50)) 50%, hsl(var(--sf-c-skyblue-50)));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

picture::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;

  content: '';

  max-width: 512px;
  max-height: 512px;

  background: linear-gradient(-45deg, hsl(var(--sf-c-violet-50)) 50%, hsl(var(--sf-c-skyblue-50)) 50%);
  filter: blur(4em);

  border-radius: 50%;

  text-align: center;
  background-blend-mode: color;
}

picture img {
  max-width: 320px;
  max-height: 320px;
}
@media only screen and (max-width: 600px) {
  picture img {
    max-width: 240px;
    max-height: 240px;
  }
}
</style>
