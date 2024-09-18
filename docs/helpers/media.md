# Media

<table class="d:t w">
  <tbody>
    <tr><td class="whs:nw">Portrait <div class="d:i ta:c @portrait">✅</div></td></tr>
    <tr><td class="whs:nw">Landscape <div class="d:i ta:c @landscape">✅</div></td></tr>
    <tr><td class="whs:nw">Mobile <span class="d:i ta:c @m">✅</span></td></tr>
    <tr><td class="whs:nw">Tablet <span class="d:i ta:c @t">✅</span></td></tr>
  </tbody>
</table>

<div class="example d:f wrap">
  <div class="@m:fw:1 @t:fw:9">
    Some text (sm)
  </div>
  <div class="fz:s lh:n @m:fz:h1 @m:fw:1 @t:fz:h3 @t:fw:9">
    Some text zise
  </div>
  <div class="@m">
    Some text (sm)
  </div>
  <div class="d:f @t">
    Some text (md)
  </div>
</div>

### portrait / landscape

<div class="portrait">This is visible only <strong>portrait</strong> orientation.</div>
<div class="landscape">This is visible only <strong>landscape</strong> orientation.</div>


<div class="sm">This is visible only on mobile devices.</div>
<div class="sm:portrait">This is visible only on mobile devices in portrait orientation.</div>
<div class="sm:landscape">This is visible only on mobile devices in landscape orientation.</div>

<div class="sm:hide">This is hidden on mobile devices.</div>
<div class="sm:hide:portrait">This is hidden on mobile devices in portrait orientation.</div>
<div class="sm:hide:landscape">This is hidden on mobile devices in landscape orientation.</div>

<div class="md">This is visible only on tablets.</div>
<div class="md:portrait">This is visible only on tablets in portrait orientation.</div>
<div class="md:landscape">This is visible only on tablets in landscape orientation.</div>

<div class="md:hide">This is hidden on tablets.</div>
<div class="md:portrait:hide">This is hidden on tablets in portrait orientation.</div>
<div class="md:landscape:hide">This is hidden on tablets in landscape orientation.</div>
