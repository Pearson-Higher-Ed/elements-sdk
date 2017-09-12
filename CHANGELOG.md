<a name="0.0.1"></a>
## 0.0.1 (2017-09-12)


### Bug Fixes

* remove elements dependency ([1fc70d4](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/1fc70d4))


### Features

* **buttons:** Standardized rule for button class names ([69d19fd](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/69d19fd))


### BREAKING CHANGES

* **buttons:** Long button class name no longer supported.

Example: Before:
```js
<button class="pe-btn">Default</button>
<button class="pe-btn__cta">Call To Action</button>
<button class="pe-btn__primary--btn_xlarge">Primary</button>
```

After:

```js
<button class="pe-btn">Default</button>
<button class="pe-btn pe-btn-cta">Call To Action</button>
<button class="pe-btn pe-btn-primary pe-btn-xl">Primary</button>
```



