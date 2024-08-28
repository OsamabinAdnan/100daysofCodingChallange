Explain how you can format a JSON string with proper indentation for readability.

**NOTE**
* `JSON.stringify` is a method used to convert a JavaScript object into a JSON string.

* The first parameter is the object you want to convert, which is `person` in this case.

* The second parameter is used for a replacer function or an array of properties to include. `null` means no replacer function is provided, so all properties of the object are included in the output.

* The third parameter is the number of spaces used for indentation in the resulting JSON string. Here, `2` means that the JSON string will be pretty-printed with an indentation of 2 spaces, making it easier to read.