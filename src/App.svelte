<div class="app">
	<DateNav {date} on:change={handleDateChange}/>
	<TodoList {date}/>
</div>

<script>
	import DateNav from './components/DateNav.svelte'
	import TodoList from './components/TodoList.svelte'

	let date = new Date()

	function handleDateChange(event) {
		date = event.detail.date
	}
</script>

<style>
	.app {
		max-width: 600px;
		margin: 0 auto;
	}
</style>