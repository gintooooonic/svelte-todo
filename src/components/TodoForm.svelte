<form on:submit|preventDefault = {handleSubmit}>
  <input type="text" name="content" bind:value={content} placeholder="New Todo..."/>
  <input type="submit"/>
</form>

<script>
  import { putTodo } from "../database";

  export let date
  let content = ''

  function handleSubmit() {
    const todo = {
      content, date,
      done: false
    }
    putTodo(todo)
  }
</script>