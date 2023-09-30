<template>
    <div class="bg-primary overflow-hidden">
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern" alt="">
            </v-col>
            <v-col></v-col>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern top-right" alt="">                
            </v-col>
        </v-row>
        <v-row>
            <slot name="content"/>
        </v-row>
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern bottom-left" alt="">
            </v-col>
            <v-col class="d-flex justify-center align-end">
                <span class="text-h5 text-secondary mb-3">KaLu</span>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern bottom-right" alt="">                
            </v-col>
        </v-row>
    </div>
</template>
<script setup>
</script>
<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .bg-primary {
        width: 100vw;
        height: fit-content;
    }
    .pattern {
        height: 87%;
        width: 87%
    }
    .top-right {
        transform: rotate(90deg); 
    }
    .bottom-left {
        transform: rotate(270deg);
    }
    .bottom-right {
        transform: rotate(180deg);
    }
</style>