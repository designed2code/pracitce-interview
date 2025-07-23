# Dry Run

1. **Initialize** `strs`: `["flower", "flow", "flight"]`

2. **Calculate** `shortestLength`:

   - Length of "flower": 6
   - Length of "flow": 4
   - Length of "flight": 6
   - `shortestLength` will be `Math.min(6, 4, 6)`, which evaluates to **4**.

3. **Start** `for` loop: `for (let i = shortestLength; i > 0; i--)`

   - **Iteration 1:** `i = 4`

     - `currentPrefix` is `strs[0].substring(0, 4)`.
     - `strs[0]` is "flower".
     - `"flower".substring(0, 4)` is **"flow"**.
     - Now, check the `if` condition: `strs.every(string => string.startsWith("flow"))`
       - `"flower".startsWith("flow")` is **true**.
       - `"flow".startsWith("flow")` is **true**.
       - `"flight".startsWith("flow")` is **false** (because "flight" does not start with "flow").
     - Since `every` returns `false` (due to "flight"), the `if` condition is **not met**.
     - Loop continues to the next iteration.

   - **Iteration 2:** `i = 3`

     - `currentPrefix` is `strs[0].substring(0, 3)`.
     - `strs[0]` is "flower".
     - `"flower".substring(0, 3)` is **"flo"**.
     - Now, check the `if` condition: `strs.every(string => string.startsWith("flo"))`
       - `"flower".startsWith("flo")` is **true**.
       - `"flow".startsWith("flo")` is **true**.
       - `"flight".startsWith("flo")` is **false** (because "flight" does not start with "flo").
     - Since `every` returns `false`, the `if` condition is **not met**.
     - Loop continues to the next iteration.

   - **Iteration 3:** `i = 2`
     - `currentPrefix` is `strs[0].substring(0, 2)`.
     - `strs[0]` is "flower".
     - `"flower".substring(0, 2)` is **"fl"**.
     - Now, check the `if` condition: `strs.every(string => string.startsWith("fl"))`
       - `"flower".startsWith("fl")` is **true**.
       - `"flow".startsWith("fl")` is **true**.
       - `"flight".startsWith("fl")` is **true**.
     - Since all strings start with "fl", the `every` method returns `true`.
     - The `if` condition is met.
     - The function **returns "fl"**.

## Result

The longest common prefix for `["flower", "flow", "flight"]` is **fl**
