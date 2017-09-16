<a name="0.0.1"></a>
## 0.0.1 (2017-09-16)


### Bug Fixes

* remove elements dependency ([1fc70d4](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/1fc70d4))
* **buttons:** Fix button component with new styling ([46e9b94](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/46e9b94))
* **buttons:** Remove duplicated CSS rules and change primary button color ([bef0b16](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/bef0b16))


### Features

* **buttons:** Standardized rule for button class names ([69d19fd](https://github.com/Pearson-Higher-Ed/ElementsSDK/commit/69d19fd))


### BREAKING CHANGES

* **buttons:** `Button-size` prop accepts 'lg' and 'xl' parameters only. Default is small size.

Example: Before:

```html
<Button btnSize="large">xLarge Button</Button>
```

After:

```html
<Button btnSize="lg">xLarge Button</Button>
```
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



