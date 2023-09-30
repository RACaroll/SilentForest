<template>
    <v-row class="justify-center align-center size">
        <span class="text-secondary text">
        1
        </span>
    </v-row>
    
</template>
<script>
// const numeroEntreUmESeis = Math.floor(numeroAleatorio * 6) + 1;
const router = useRouter();

const goTo = (route) => {
    router.push(route);
}
const start = () => {
    setTimeout(function() {
        goTo('/menu')
    }, 5000);
};
start();
</script>
<style scoped>
.text {
    font-size: 7rem;
}
.size {
    height: 74vh;
}
</style>