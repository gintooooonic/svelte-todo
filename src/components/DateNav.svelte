<div class="date_nav">
  <span class="button" on:click={handleLeftBtnClick}>
    <img src="assets/images/arrow-left.svg" alt="button"/>
  </span>
  <h1>{dateStr}</h1>
  <span class="button" on:click={handleRightBtnClick}>
    <img src="assets/images/arrow-right.svg" alt="button"/>
  </span>
</div>

<script>
  import { createEventDispatcher } from "svelte";
  
  const dispatch = createEventDispatcher()

  export let date
  let dateStr
  
  $: dateStr = getDateStr(date)

  function handleLeftBtnClick() {
    date.setDate(date.getDate() - 1)
    date = date
    dispatch('change', { date })
  }

  function handleRightBtnClick() {
    date.setDate(date.getDate() + 1)
    date = date
    dispatch('change', { date })
  }

  function getDateStr(date) {
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const dateStr = `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`
    return dateStr
  }
</script>

<style>
  .date_nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin: 0 auto;
  }

  h1 {
    margin: 0 25px;
  }

  .button {
    display: inline-block;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
</style>