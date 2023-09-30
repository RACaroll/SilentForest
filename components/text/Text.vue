<template>
    <v-row class="align-center justify-center">
        <v-col class="size d-flex flex-column justify-center align-center">
            <span class="text-secondary text mb-0 pa-0">
                Muito bem!
            </span>
            <br>
            <span class="text-secondary mt-0 pa-0">
                Agora vamos decidir a <br>
                ordem dos jogadores.
            </span>
        </v-col>
    </v-row>
</template>
<script setup>
const router = useRouter();

const goTo = (route) => {
    router.push(route);
}
const start = () => {
    setTimeout(function() {
        goTo('/random')
    }, 3000);
};
start();
</script>
<style scoped>
.text {
    font-size: 2rem;
}
.size {
    height: 74vh;
}
</style>