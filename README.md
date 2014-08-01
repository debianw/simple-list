# &lt;simple-list&gt;

_Simple infinite list. This is a Polymer web-component that can handle tons of data in an infinite list. This component extends from `Polymer/core-list` and adds iscroll to support smooth scrolling

## Usage

**&lt;simple-list&gt;** is a web component for handling list with tons of items

```html
<simple-list data="{{data}}" height="80">
  <template>
    <div class="item {{ {selected: selected} | tokenList }}"> Item {{id}} <br /> <p><i>{{description}}</i></p> </div>
  </template>
</simple-list>
```

## Demo

To take a look the demo just follow the steps:

```
  # bower install
  # npm install
  # node server
```

Then go to http://your-local-ip:8080/demo

core-list
============

See the [component page](http://polymer-project.org/docs/elements/core-elements.html#core-list) for more information.
