## Todo App

This JavaScript code handles a task management system where users can add, update, and delete tasks. The tasks are stored in the browser's local storage, ensuring persistence across page reloads.

### Features:
- **Add Task**: Users can create a new task by entering a title, date, and description.
- **Update Task**: Users can edit existing tasks. The form is populated with the task's current values, and users can update the task details.
- **Delete Task**: Tasks can be deleted from the task list, and changes are saved to local storage.
- **Confirmation Dialog**: If there are unsaved changes in the form, users are prompted with a confirmation dialog before closing the form.

### Key Components:
1. **Task Form**: A form that allows users to input task details (title, date, description) for new or existing tasks.
2. **Task Container**: Displays all tasks stored in local storage, with buttons for editing or deleting each task.
3. **Confirmation Dialog**: Prompts users to confirm if they want to discard changes when closing the task form.
4. **Local Storage**: Tasks are stored and retrieved from local storage, allowing the data to persist after page reloads.

### Functions:
- `addOrUpdateTask`: Adds a new task or updates an existing one.
- `updateTaskContainer`: Refreshes the task list in the UI.
- `deleteTask`: Deletes a task from the list and local storage.
- `editTask`: Fills the form with the task's current details for editing.
- `reset`: Resets the form and state after adding or updating a task.

### Event Listeners:
- **Open Task Form**: Opens the task form for adding a new task.
- **Close Task Form**: Prompts a confirmation dialog if there are unsaved changes.
- **Submit Task Form**: Adds or updates a task when the form is submitted.
