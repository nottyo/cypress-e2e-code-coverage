<template>
    <section>
        <h1 class="header">My Todo App!</h1>
        <input type="text" placeholder="Enter Todo" v-model="todoText" class="inputTodo" data-at="new-todo" @keydown.enter="addTodo">
        <ul v-if="todos.length">
            <TodoListItem 
              v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
              @remove="removeTodo"
            >
            </TodoListItem>
        </ul>
        <p v-else data-at="noTodo">
            No Anything Todo
        </p>
    </section>
</template>

<script>
import TodoListItem from './TodoListItem.vue'
let initialTodoId = 1
export default {
  name: 'Todo',
  components: {
    TodoListItem
  },
  data () {
    return {
      todos: [],
      todoText: ''
    }
  },
  methods: {
    addTodo() {
      const trimTodoText = this.todoText.trim()
      const exist = this.todos.findIndex(item => item.text === trimTodoText)
      if (trimTodoText && exist === -1) {
          this.todos.push({
              id: initialTodoId++,
              text: trimTodoText
          })
          this.todoText = ''
      }
    },
    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
}
</script>

<style>
.header {
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}

.inputTodo {
    width: 50%;
    box-sizing: border-box;
    padding: 12px 20px;
    font-size: 32px;
}

</style>
