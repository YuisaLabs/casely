# 🪄 Casely

A lightweight and fast utility to convert object keys between `camelCase` and `snake_case`.  
No dependencies, written in TypeScript, designed for performance and clarity.

---

## ✨ Features

- 🔁 Convert keys deeply between `camelCase` ↔ `snake_case`
- ⚙️ Support for nested objects, arrays, and key skipping
- 🧠 Smart transformation with optional value manipulation
- 📦 Zero dependencies
- 🔒 Fully type-safe

---

## 📦 Installation

```bash
npm install @yuisa-scarlet/casely
```

## ⚙️ Usage

```js
import { toCamelCaseKeys, toSnakeCaseKeys } from "@yuisalabs/casely"

const snakeCaseObject = {
  user_id: 1,
  user_name: "John Doe",
  user_details: {
    first_name: "John",
    last_name: "Doe",   
  }
}

const camelCaseObject = {
  userId: 1,
  userName: "John Doe",
  userDetails: {
    firstName: "John",
    lastName: "Doe",   
  }
}

console.log(toCamelCaseKeys(snakeCaseObject))
// Result
{
  userId: 1,
  userName: "John Doe",
  userDetails: {
    firstName: "John",
    lastName: "Doe",   
  }
}

console.log(toSnakeCaseKeys(camelCaseObject))
// Result
{
  user_id: 1,
  user_name: "John Doe",
  user_details: {
    first_name: "John",
    last_name: "Doe",   
  }
}
```