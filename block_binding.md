# Block Binding
## 1.1 var declare and hoisting

Variables declared using the var keyword are treated as if they were at the top of the function, regardless of where they were declared.
This is called `hoisting`.

``` javascript
function getValue(condition) {
   if (condition) {
      var value = "blue";
      // Rest of the code
      return value;
   }
   else {
      // value exists as undefined here
      return null;
   }

   // value exists as undefined here
}
```

If we are not familiar with javascript, we expect that the value is created if the condition is true, but the javascript engine changes the code above to the following code.

``` javascript
function getValue(condition) {
   var value;

   if (condition) {
      value = "blue";
      // Rest of the code
      return value;
   }
   else {
      return null
   }
}

```

## 1.2 Block-level declaration
Block-level declaration means that variable that can't access from the outside of block scope.

Block scope is created in the following places:
* Inner space of function
* Inner space of block (specified using { and })

The C language uses the block scope and javascript also uses it as well in the latest ECMAScript 6.

### 1.2.1 let declaration

Variables declared using the `let` keyword can only be used at code block scope.

``` javascript
function getValue(condition) {
   if (condition) {
      let value = "blue";
      // Rest of the code
      return value;
   } else {
      // value does not exist here, because `let` do not permit hoisting.
      return null;
   }

   // value does not exist here
}
```

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

코드를 해석할때 자바스크립트 엔진은 다음 블록을 조사하고 그 블록에서 변수 선언을 발견하면, 그 선언을 (var 의 경우에는) 함수 최상단이나 전역 스코프로 호이스팅 하거나 (let, const 의 경우에는) TDZ 내에 배치한다. TDZ 안의 변수에 접근하려 하면, 런타임 에러가 발생한다.
변수 선언이 실행된 후에만 TDZ 에서 변수가 제거되며, 안전하게 사용할수 있다.

``` javascript
console.log(typeof value);    // "undefined"

if (condition) {
   let value = "blue";
}
```

### 1.2.4 Block-binding in for loop statement
