<div>
  <ul>
    {#await todoPromise then items}
      {#each items.filter(item => isDateEqual(item.date, date)) as item}
        <li>
          <label>
            <input type="checkbox" checked={item.done}/>
            {item.content}
          </label>
        </li>
      {/each}
    {/await}
  </ul>
  <TodoForm {date}/>
</div>

<script>
  import { getTodoAll } from "../database";
  import TodoForm from "./TodoForm.svelte";

  export let date

  function isDateEqual(d1, d2) {
    return d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
      && d1.getDate() === d2.getDate()
  }

  const todoPromise = getTodoAll()
</script>

<style>
  ul {
    padding-left: 0;
    list-style: none;
  }
</style>