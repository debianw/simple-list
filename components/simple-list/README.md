# &lt;simple-list&gt;

_Simple infinite list. This is a Polymer web-component that can handle tons of data in an infinite list. This component extends from `Polymer/core-list` and adds iscroll to support smooth scrolling

## Usage

**&lt;simple-list&gt;** is a web component for handling list with tons of items

```html
<simple-list data="{{data}}" height="80">
  <template>
    <div class="item {{ {selected: selected} | tokenList }}"> Item {{_.id}} <br /> <p><i>{{_.description}}</i></p> </div>
  </template>
</simple-list>
```

## Demos

* [simple-list inside a fit layout](http://debianw.github.io/simple-list/demo/fit-list.html)
* [simple-list inside a flex layout](http://debianw.github.io/simple-list/demo/flex-list.html)

core-list
============

See the [component page](http://polymer-project.org/docs/elements/core-elements.html#core-list) for more information.
