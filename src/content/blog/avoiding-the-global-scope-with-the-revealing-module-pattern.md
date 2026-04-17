---
title: "Avoiding the Global Scope with the Revealing Module Pattern"
date: "2019-07-30"
tagLine: "Keep your variables where they belong"
description: "The Revealing Module Pattern gives you private state and a clean public API in plain JavaScript—no build tools or classes required."
---

# Avoiding the Global Scope with the Revealing Module Pattern

Before ES modules, before bundlers, before `class` syntax—JavaScript developers faced a persistent problem: everything lived in the global scope. Scripts on the same page could overwrite each other's variables. Functions named `init` or `utils` would collide. The global object became a dumping ground.

The Revealing Module Pattern emerged as the clean solution.

## The Problem with the Global Scope

In early JavaScript, every variable declared at the top level became a property of `window`:

```js
var username = "peter";
function greet() {
  console.log("Hello, " + username);
}
```

Any other script on the page could read or overwrite `username`. As applications grew, this became a maintenance nightmare. You couldn't tell which code owned which data.

## The Module Pattern

The Module Pattern uses an Immediately Invoked Function Expression (IIFE) to create a private scope:

```js
var UserModule = (function() {
  var username = "peter"; // private

  function greet() {
    console.log("Hello, " + username);
  }

  return {
    greet: greet
  };
})();

UserModule.greet(); // "Hello, peter"
console.log(UserModule.username); // undefined — private!
```

The IIFE runs immediately and returns an object. Variables declared inside the function are not accessible from outside. Only what's in the returned object is public.

## The Revealing Module Pattern

The Revealing Module Pattern is a refinement by Christian Heilmann. Instead of directly assigning function references in the return object, you define everything privately first, then reveal only what you want to expose:

```js
var CartModule = (function() {
  var items = [];

  function addItem(item) {
    items.push(item);
    console.log(item.name + " added to cart");
  }

  function removeItem(name) {
    items = items.filter(function(item) {
      return item.name !== name;
    });
  }

  function getTotal() {
    return items.reduce(function(total, item) {
      return total + item.price;
    }, 0);
  }

  function getCount() {
    return items.length;
  }

  return {
    add: addItem,
    remove: removeItem,
    total: getTotal,
    count: getCount
  };
})();

CartModule.add({ name: "Keyboard", price: 99 });
CartModule.add({ name: "Mouse", price: 49 });
console.log(CartModule.total()); // 148
console.log(CartModule.count()); // 2
```

Notice the naming: the internal functions use descriptive names (`addItem`, `removeItem`), while the public API uses shorter names (`add`, `remove`). The internal implementation is fully hidden—`items` is private and inaccessible from outside the module.

## Why "Revealing"?

The word "revealing" refers to the explicit act of selecting what to make public in the return statement. Compared to the original Module Pattern, this approach:

- Keeps all function definitions in one place (private scope)
- Makes the public API immediately readable from the return object
- Allows you to rename public-facing properties without changing internal logic

## The One Caveat

If a public method calls a private method internally, and you override the public method from outside, the internal call still uses the original private reference. This is by design—it protects internal logic from external tampering—but it can be surprising if you expect monkey-patching to work.

## In the Modern Era

Today, ES modules (`import`/`export`) and bundlers handle scope isolation natively. You don't need IIFEs. But the Revealing Module Pattern is still relevant when:

- You're writing a script that loads directly in a browser without a build step
- You're maintaining legacy codebases that predate module bundlers
- You need to understand how older libraries like jQuery plugins are structured

More importantly, understanding this pattern deepens your mental model of closures—one of JavaScript's most powerful features. The pattern is essentially a closure that captures private state and exposes a controlled interface. That concept applies everywhere: class private fields, React's `useState`, Redux reducers. It's closures all the way down.
