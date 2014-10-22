anglicize
=========

Inspired from `[azer/anglicize](https://github.com/azer/anglicize)`.
Converted a bower project

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install anglicize --save
```

This shell command will fetch `azer/anglicize`

### bower

```shell
bower install anglicize --save
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/anglicize/dist/anglicize.js"></script>
```

Then `anglicize` is ready:

```javascript
anglicize('ÂÇİĞÖŞÜÑ âçığöşüñ');
//=> ACIGOSUN acigosun
```