Describe how to use breakpoints in browser developer tools to debug JavaScript code.



- How to use breakpoints in browser developer tools to debug JavaScript code.
-
- 1.  Open the Developer Tools:
- - In Chrome, Firefox, or Edge, press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).
- - In Safari, press `Cmd+Option+I` (Mac) and ensure the "Show Develop menu in menu bar" option is enabled in Safari's preferences.

- 2.  Navigate to the "Sources" tab (Chrome/Edge) or "Debugger" tab (Firefox).
- - This is where you can view and interact with the source code of your web page.

- 3.  Locate the JavaScript or TypeScript file you want to debug:
- - You can find your files in the left-hand file navigator pane.
- - For TypeScript files, the source maps should be available to link back to the original TypeScript files.
-
- 4.  Set a breakpoint:
- - Click on the line number where you want to pause the execution of your code.
- - A breakpoint is typically represented by a blue or red dot in the line number gutter.
-
- 5.  Trigger the code execution:
- - Interact with your webpage in a way that will cause the code containing the breakpoint to execute.
- - For example, if the breakpoint is in a function triggered by a button click, click the button.
-
- 6.  Debugging:
- - When the code execution hits the breakpoint, the execution will pause, and you can inspect variables and call stacks.
- - Use the developer tools' debugging controls to step over, step into, or step out of functions.
- - Check the "Scope" or "Watch" panels to monitor the values of variables and expressions.
-
- 7.  Resume execution:
- - After inspecting and debugging, use the "Resume script execution" button (usually a play button) to continue running the code.
-
- Example Code to Test:
- ```typescript

  ```
- function add(a: number, b: number): number {
-     return a + b;
- }
-
- console.log(add(5, 7));
- ```

  ```
- - Set a breakpoint on the `return a + b;` line to debug the `add` function.
- - Observe how the debugger behaves and inspect the variables `a` and `b` when the breakpoint is hit.
-
- Using breakpoints effectively can help you understand and troubleshoot issues in your code more efficiently.
  \*/
