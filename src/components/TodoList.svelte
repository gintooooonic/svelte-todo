<ul>
  {#each items.filter(item => isDateEqual(item.date, date)) as item}
    <li>
      <label>
        <input type="checkbox" checked={item.done}/>
        {item.content}
      </label>
    </li>
  {/each}
</ul>

<script>
  export let date

  function isDateEqual(d1, d2) {
    return d1.getFullYear() === d2.getFullYear()
      && d1.getMonth() === d2.getMonth()
      && d1.getDate() === d2.getDate()
  }

  const items = [
    { content: 'Fork', date: new Date(2022, 3, 27), done: true },
    { content: 'Clone', date: new Date(2022, 3, 27), done: true },
    { content: 'Commit', date: new Date(2022, 3, 28), done: true },
    { content: 'Push', date: new Date(2022, 3, 28), done: false },
    { content: 'PR', date: new Date(2022, 3, 28), done: false },
  ]
</script>

<style>
  ul {
    padding-left: 0;
    list-style: none;
  }
</style>