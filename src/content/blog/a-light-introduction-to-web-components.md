---
title: "A Light Introduction to Web Components"
date: "2021-04-22"
tagLine: "Native browser components without a framework"
description: "Web Components let you build reusable UI elements that work in any framework—or none at all. Here's how the three core APIs fit together."
---

# A Light Introduction to Web Components

Every major frontend framework ships its own component model. React has function components, Vue has single-file components, Svelte has its own syntax. But the browser itself has a native component model that works everywhere: Web Components.

Web Components aren't a single API—they're three separate browser standards that compose together:

1. **Custom Elements** — define your own HTML tags
2. **Shadow DOM** — encapsulate styles and markup
3. **HTML Templates** — declare inert markup to stamp out later

## Custom Elements

Custom Elements let you define new HTML tags with custom behavior. The tag name must contain a hyphen to avoid conflicts with built-in elements.

```js
class AlertBox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="border: 1px solid red; padding: 8px;">
        ${this.getAttribute("message") || "Something went wrong."}
      </div>
    `;
  }
}

customElements.define("alert-box", AlertBox);
```

Now you can use `<alert-box message="Payment failed"></alert-box>` anywhere in your HTML, including inside React or Vue templates, and it renders with its native behavior.

The lifecycle callbacks give you hooks into the element's life:

- `connectedCallback` — element added to the DOM
- `disconnectedCallback` — element removed from the DOM
- `attributeChangedCallback` — a watched attribute changed
- `adoptedCallback` — element moved to a new document

## Shadow DOM

The Shadow DOM attaches a hidden, scoped DOM tree to your element. Styles inside a shadow root don't leak out, and external styles don't bleed in.

```js
class Tooltip extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .tooltip {
          background: #333;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
        }
      </style>
      <span class="tooltip">
        <slot></slot>
      </span>
    `;
  }
}

customElements.define("my-tooltip", Tooltip);
```

The `<slot>` element is the insertion point for light DOM content. If you write `<my-tooltip>Click here</my-tooltip>`, "Click here" is projected into the slot.

`mode: "open"` means JavaScript outside the shadow root can access `element.shadowRoot`. `mode: "closed"` hides it—useful for encapsulating proprietary widget internals.

## HTML Templates

The `<template>` element holds markup that the browser parses but doesn't render. You clone it when you need an instance:

```html
<template id="card-template">
  <div class="card">
    <h2 class="card-title"></h2>
    <p class="card-body"></p>
  </div>
</template>
```

```js
const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".card-title").textContent = "Hello";
document.body.appendChild(clone);
```

Combining templates with Custom Elements is the common pattern: define the template once, clone it in `connectedCallback`, and populate it with attribute data.

## When to Use Web Components

Web Components shine in situations where framework-agnosticism matters:

- **Design systems** — a component library that works across React, Vue, Angular, and plain HTML
- **Embeddable widgets** — a chat widget or social share button that third parties drop into any page
- **Microfrontends** — independently deployed UI fragments that compose without shared framework versions

They're not a replacement for React or Vue for complex, data-heavy applications. State management, reactivity, and server rendering are areas where full frameworks still win.

## Browser Support

Custom Elements, Shadow DOM, and HTML Templates are supported in all modern browsers. If you need to support older environments, polyfills are available from the Polymer project, though that's increasingly rare.

Web Components are a long-term browser standard. Learning them gives you a tool that works regardless of which JavaScript framework is popular next year.
