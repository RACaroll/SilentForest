<template>
</template>

<script setup>
const router = useRouter();

onBeforeMount(() => {
  router.replace('/home');
});
</script>