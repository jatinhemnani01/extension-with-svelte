<script>
  let count = 0;
</script>

<h1>{count}</h1>
<button
  on:click={() => {
    count++;
  }}>Increment</button
>
