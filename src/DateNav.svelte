<div>
  <span class="button">
    <img src="assets/images/arrow-left.svg" alt="button"/>
  </span>
  <h1>{dateStr}</h1>
  <span class="button">
    <img src="assets/images/arrow-right.svg" alt="button"/>
  </span>
</div>

<script>
  const date = new Date()
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const dateStr = `${DAYS[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`
</script>

<style>
  .button {
    display: inline-block;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
</style>