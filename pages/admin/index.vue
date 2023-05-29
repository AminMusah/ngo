<template>
  <div>hello there!</div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      middleware: ["auth"],
    });
  },
};
</script>

<style></style>
