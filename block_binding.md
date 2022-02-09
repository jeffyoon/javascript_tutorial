# Block Binding
## 1.1 var declare and hoisting

Variable declarations using var keyword are treated as if they're at the top of the function (or in the global scope, if declared outside of a function) regardless of where the actual declaration occurs.
This is called `hoisting`.

For a demonstration of what hoisting does, consider the following function definition:
``` javascript
function getValue(condition) {
   if (condition) {
      var value = "blue";
      // other code
      return value;
   }
   else {
      // value exists here with a value of undefined
      return null;
   }

   // value exists here with a value of undefined
}
```

If you are not familiar with javascript, you might expect the variable value to be created only if condition evaluates to true.
In fact, the variable value is created regardless. Behind the scenes, the javascript engine changes the getValue function to look like this:

``` javascript
function getValue(condition) {
   var value;

   if (condition) {
      value = "blue";
      // other code
      return value;
   }
   else {
      return null
   }
}
```

The declaration of value is hoisted to the top, and the initialization remains in the same spot.
That means the variable value is still accessible from within the `else` clause.
If accessed from the else clause, the variable would just have a value of `undefined` because it hasn't been initialized in the `else` block.

## 1.2 Block-Level Declarations
Block-level declarations declare bindings that are inaccessible outside a given block scope.

`Block scopes`, also called `lexical scopes`, are created in the following places:

* Inside function
* Inside a block (indicated by the { and } characters)

Block scoping is how many C-based languages work, and the introduction of block-level declarations in ECMAScript 6 is intended to provide that same flexibility (and uniformity) to JavaScript.

### 1.2.1 let declarations

Variables declared using the `let` keyword can only be used at code block scope.
The let declarations are not hoisted to the top of the enclosing block, it's best to place let declarations first in the block so they're available to the entire block.

``` javascript
function getValue(condition) {
   if (condition) {
      let value = "blue";
      // other code
      return value;
   } else {
      // value does not exist here, because `let` do not permit hoisting.
      return null;
   }

   // value does not exist here
}
```
This version of the `getValue` function behaves more similarly to how you'd expect it to in other C-based languages. Because the variable value is declared using `let` instead of `var`, the declaration isn't hoisted to the top of the function definition, and the variable value is no longer accessible once execution flows out of the `if` block. If `condition` evaluates to `false`, then value is never declared or initialized.

### 1.2.2 const declaration

The const binding should be initialized when declaring it.

``` javascript
// correct const declaration
const maxItems = 30;

// Syntax error : Not initialized
const name;
```

#### constants
const is "block-level" declaration such as let keyword.
It means that the const variable is not accessed from outside of the block scope.

``` javascript
if (condition) {
   const maxItems = 5;
   // Rest of the code.
}
// maxItems is not accessed from here.

There is a major difference between `let` and `const`, it is that an error occurs when assigning a new value to the const variable that was already declared.

const maxItems = 5;
maxItems = 6;  // error occurs
```
#### object declaration using const keyword

When an object is declared using const keyword, we can modify the value of member variables.

``` javascript
const person = {
   name: "Nicolas"
};

// No issue, it does work well.
person.name = "Greg";

// Error occurs
person  = {
   name: "Greg"
};
```
We make a person binding using an object with a property that has the initial value.
There is no error when changing the `person.name` because we only change the value of the person object not change the binding of the person variable.

### 1.2.3 Temporal Dead Zone, TDZ

It can't access the variable before declaring the variables using `let` or `const`

``` javascript
if (condition) {
   console.log(typeof value);    // Error occurs
   let value = "blue"
}
```

When a Javascript engine looks through an upcoming block and finds a variable declaration, it either hoists the declaration to the top of the function or global scope (for var) or places the declaeation in TDZ (for let and const).
Any attempt to access a variable in the TDZ results in a runtime error.
That varibale is only removed from the TDZ, and therefore is safe to use, once execution flows to the variable declaration.


``` javascript
console.log(typeof value);    // "undefined"

if (condition) {
   let value = "blue";
}
```

### 1.2.4 Block-binding in for loop statement
