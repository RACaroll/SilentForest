<template>
    <v-row class="justify-center align-center flex-column size">
        <v-col class="d-flex align-center justify-center">
            <span class="text-secondary text">
                {{p1}}
            </span>
        </v-col>
    </v-row>
    
</template>
<script setup>
const randomGenerator = Math.random();
const router = useRouter();
let p1 = ref(1);
const goTo = (route) => {
    router.push(route);
}
const random = () => {
    let clear = setInterval(function() {
        p1.value++;
        if (p1.value == 7){
            p1.value = 1;
        }
    }, 50);
    setTimeout(() => {
    clearInterval(clear);
    const randomNumber = Math.floor(randomGenerator * 6) + 1;
    p1 = randomNumber;
    }, 5000);
    
    
};

const players = [
        { name: 'Caroll', value: p1},
    ];

random();
</script>
<style scoped>
.text {
    font-size: 7rem;
}
.size {
    height: 74vh;
}
</style>