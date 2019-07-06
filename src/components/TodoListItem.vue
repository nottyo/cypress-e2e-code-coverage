<template>
    <li data-at="todoItem" class="todoItem">
        <span data-at="todoText" class="todoText">
            {{ todo.text }}
        </span>
        <button @click="$emit('remove', todo.id)" data-at="removeTodoBtn">X</button>
        
    </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
      todo: {
          type: Object,
          required: true
      }
  }
}
</script>

<style>
  .todoText {
    margin-right: 1em;
  }
  .todoItem {
    display: block;
  }
</style>
