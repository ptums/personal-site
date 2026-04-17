---
title: "Wrap Your Component in Battle Armor with React Testing Library and TypeScript"
date: "2022-03-15"
tagLine: "Write tests that survive refactors"
description: "Learn how to combine React Testing Library with TypeScript to write robust component tests that catch real bugs and stay resilient through code changes."
---

# Wrap Your Component in Battle Armor with React Testing Library and TypeScript

Testing React components used to mean reaching for Enzyme and testing implementation details—checking state, calling lifecycle methods directly, and asserting on internal structure. React Testing Library flipped that model: test your UI the way a user actually interacts with it. Pair it with TypeScript, and you get compile-time safety on top of behavioral correctness.

## Why React Testing Library?

The guiding philosophy is simple: the more your tests resemble how software is used, the more confidence they give you. Instead of querying by component name or internal state, you query by accessible roles, labels, and text that real users see.

This matters enormously for refactoring. If you change a component's internal structure but keep the same behavior, your tests should still pass. RTL makes that the default.

## Setting Up

Install the necessary packages:

```
npm install --save-dev @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

With TypeScript, you also get type-safe query results and prop passing.

## A Practical Example

Suppose you have a `LoginForm` component:

```tsx
type LoginFormProps = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(email, password); }}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Log In</button>
    </form>
  );
};
```

Here's how you test it:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

test("calls onSubmit with email and password", async () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  await userEvent.type(screen.getByLabelText("Email"), "user@example.com");
  await userEvent.type(screen.getByLabelText("Password"), "secret123");
  await userEvent.click(screen.getByRole("button", { name: "Log In" }));

  expect(handleSubmit).toHaveBeenCalledWith("user@example.com", "secret123");
});
```

Notice we never touch internal state. We find elements by their labels (accessible queries), simulate real user events, and assert on the observable outcome.

## TypeScript's Role

TypeScript adds two major benefits to your test suite:

**1. Type-safe mocks.** When you declare `const handleSubmit = jest.fn()` and pass it as `onSubmit`, TypeScript ensures your mock matches the expected signature. If you change `LoginFormProps`, your tests won't compile until you update them too.

**2. Autocomplete on queries.** TypeScript knows that `screen.getByRole("button")` returns an `HTMLButtonElement`. You get full autocomplete on the returned element's properties.

## Querying Priority

RTL recommends a specific query priority that mirrors how users and assistive technology perceive the page:

1. `getByRole` — most preferred; matches accessible roles
2. `getByLabelText` — great for form inputs
3. `getByPlaceholderText` — use when no label exists
4. `getByText` — for non-interactive elements
5. `getByTestId` — last resort; couples tests to implementation

Sticking to roles and labels keeps your tests aligned with accessibility best practices, which is a useful side effect.

## Async Interactions

User interactions in RTL are async. Always use `await userEvent.click()` and `await userEvent.type()` from `@testing-library/user-event` v14+. This simulates real browser behavior including focus events, pointer events, and keyboard handling—catching bugs that the older `fireEvent` would miss.

## The Payoff

A component wrapped in RTL + TypeScript tests is a component you can confidently refactor. Rename a prop, restructure the JSX, swap a state management library—your tests only care about the rendered output and accessible behavior. That's the battle armor that keeps your UI solid as the codebase grows.
