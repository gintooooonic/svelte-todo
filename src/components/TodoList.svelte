<ul>
  {#each items as item}
    <li>
      <label>
        <input type="checkbox" checked={item.done}/>
        {item.content}
      </label>
    </li>
  {/each}
</ul>

<script>
  const items = [
    { content: 'Fork', date: '2022-04-24', done: true },
    { content: 'Clone', date: '2022-04-24', done: true },
    { content: 'Commit', date: '2022-04-25', done: true },
    { content: 'Push', date: '2022-04-25', done: false },
    { content: 'PR', date: '2022-04-25', done: false },
  ]
</script>

<style>
  ul {
    padding-left: 0;
    list-style: none;
  }
</style>