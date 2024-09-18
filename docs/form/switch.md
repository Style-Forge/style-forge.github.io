---
title: Switch
titleTemplate: Style-Forge.Form
description: "Versatile component for easy creation, styling, and state management of switch toggles in web apps."

head:
  - - meta
    - name: keywords
      content: style-forge, switch, toggle, input, styling, web development, frontend, switch elements, switch styles, responsive
  - - meta
    - property: og:title
      content: "Switch | Style-Forge.Form"
  - - meta
    - property: og:description
      content: "Versatile component for easy creation, styling, and state management of switch toggles in web apps."
  - - meta
    - property: og:url
      content: https://style-forge.dev/form/switch.html
  - - meta
    - name: twitter:title
      content: "Switch | Style-Forge.Form"
  - - meta
    - name: twitter:description
      content: "Versatile component for easy creation, styling, and state management of switch toggles in web apps."
---

# Switch

This section presents the switch element that can be used in HTML forms. Each example includes the HTML code and styling using the `sf-switch` class.

<actions @disabled="x => disabled = x" :showLoading="false" />

## Switch

<label class="sf-switch">
  <input v-model="checked" type="checkbox" :disabled="disabled" /> <span>Some text</span>
</label>

<highlight lang="html">
&lt;label class="sf-switch"&gt;
  &lt;input type="checkbox"{{ checked ? ' checked' : null }}{{ isDisabled }} /&gt; &lt;span&gt;Some text&lt;/span&gt;
&lt;/label&gt;
</highlight>

## Switch multiple (radio)

<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_radio" type="radio" value="off" checked :disabled="disabled" /><span>off</span></label>
    <label><input name="switch_radio" type="radio" value="on" :disabled="disabled" /><span>on</span></label>
  </div>
  <p class="sf-switch-description">Some text</p>
</div>

<highlight lang="html">
&lt;div class="sf-switch multiple"&gt;
  &lt;div class="sf-switch-toggle"&gt;
    &lt;label&gt;&lt;input name="switch_radio" type="radio" value="off" checked{{ isDisabled }} /&gt;&lt;span&gt;off&lt;/span&gt;&lt;/label&gt;
    &lt;label&gt;&lt;input name="switch_radio" type="radio" value="on"{{ isDisabled }} /&gt;&lt;span&gt;on&lt;/span&gt;&lt;/label&gt;
  &lt;/div&gt;
  &lt;p class="sf-switch-description"&gt;Some text&lt;/p&gt;
&lt;/div&gt;
</highlight>

## Switch multiple (checkbox)

<div class="sf-switch multiple">
  <div class="sf-switch-toggle">
    <label><input name="switch_checkbox" type="checkbox" value="off" :disabled="disabled" /><span>off</span></label>
    <label><input name="switch_checkbox" type="checkbox" value="on" :disabled="disabled" /><span>on</span></label>
  </div>
  <div class="sf-switch-description">Some text</div>
</div>

<highlight lang="html">
&lt;div class="sf-switch multiple"&gt;
  &lt;div class="sf-switch-toggle"&gt;
    &lt;label&gt;&lt;input name="switch_checkbox" type="checkbox" value="off"{{ isDisabled }} /&gt;&lt;span&gt;off&lt;/span&gt;&lt;/label&gt;
    &lt;label&gt;&lt;input name="switch_checkbox" type="checkbox" value="on"{{ isDisabled }} /&gt;&lt;span&gt;on&lt;/span&gt;&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="sf-switch-description"&gt;Some text&lt;/div&gt;
&lt;/div&gt;
</highlight>

## Conclusion

Using this example, you can create forms with switch elements. All elements are styled using the `sf-switch` class for a consistent look and feel.

<script setup>
import { ref, computed } from 'vue';

import 'style-forge.form/src/var.css';

import 'style-forge.form/src/loading.css';
import 'style-forge.form/src/checkbox-radio.css';

import 'style-forge.form/src/switch.css';

const checked = ref(true);
const disabled = ref(false);
const isDisabled = computed(() => disabled.value ? ' disabled' : null);
</script>
