## Changes Made

### 1. Backend
- **`backend/controllers/todoController.js`**:
  - Updated `getTodos` to read the `done` query parameter from `req.query`.
  - Built a filter object conditionally:
    - If `done` is `'true'`, filter by `{ done: true }`.
    - If `done` is `'false'`, filter by `{ done: false }`.
    - If no `done` parameter is passed, the filter remains empty (`{}`), which returns all todos as before.
  - Replaced `Todo.find()` with `Todo.find(filter)`.

### 2. Frontend
- **`frontend/src/api/todos.js`**:
  - Updated `fetchTodos` to accept an optional `filter` argument.
  - Configured axios to pass `params: { done }` when a filter is provided, making requests to `/api/todos?done=true` or `/api/todos?done=false`.
- **`frontend/src/App.jsx`**:
  - Added a `filter` state variable initialized to `'all'` (`'all'`, `'active'`, or `'done'`).
  - Updated `useEffect` to include `filter` in its dependency array, so `fetchTodos` is re-called whenever the selected tab changes.
  - Added three filter buttons (**All**, **Active**, **Done**) above the todo list to allow switching views.
- **`frontend/src/todo.css`**:
  - Added simple styling for `.filter-tabs` and `.filter-tabs button.active` to match the existing receipt design.
