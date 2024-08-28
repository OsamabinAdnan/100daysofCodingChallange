Explain how this behaves differently in arrow functions compared to traditional functions.

*Note*
1) `behavior` Object:
    * This is an object with two methods: `traditionalFunction` and `arrowFunction`.

2) `traditionalFunction` (Traditional Function Expression):
    * Defined using the `function` keyword.
    * When called as `behavior.traditionalFunction()`, the this keyword inside this function refers to the `behavior object`.
    * Hence, this.value accesses the value property of the `behavior object`, which is `behavior object`.
    * Logs: `Traditional function: behavior value`.

3) `arrowFunction` (Arrow Function Expression):
    * Defined using the arrow function syntax () => {}.
    * Arrow functions do not have their own `this` context. Instead, they inherit `this` from the lexical scope in which they are defined.
    * In this case, the lexical scope is the global scope (or the module scope if using ES modules), not the `behavior` object.
    * Therefore, `this.value` in the `arrowFunction` refers to `this` in the outer context where `behavior` is defined. If there is no `value` in that outer scope, it would be undefined.
    * Logs: `Arrow function: undefined` (or could result in an error if `this` is not defined at all).

    **Tradition function**
    When you use a `traditional function` expression within an object method, this refers to the object itself. This allows you to access properties of the object directly using this.

    **Arrow Function**
    `Arrow functions`, on the other hand, do not have their own this context. Instead, they inherit this from the surrounding lexical scope where the arrow function is defined. This means that within an arrow function, this is not bound to the object but to the scope in which the object was created.
