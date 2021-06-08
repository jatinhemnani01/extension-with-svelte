<script>
  export let name;
  let count = 0;
</script>

<h1>{name}</h1>
<p>{count}</p>
<button
  on:click={() => {
    count++;
  }}
>Increment</button>
