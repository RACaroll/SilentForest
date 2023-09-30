<template>
    <div class="bg-primary">
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
                <span class="text-h5 yellow mb-8">KaLu</span>
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern bottom-right" alt="">                
            </v-col>
        </v-row>
    </div>
    <!-- <div class="bg-primary">
        <v-row class="pattern">
            <img src="../assets/svg/nome.svg" class="pattern">
        </v-row>
        <v-row class="justify-center align-center">
            <v-col class="contentSlot">
                <slot name="content" />
            </v-col>
            </v-row>
        <v-row class="pattern">
            <img src="../assets/svg/nome.svg" class="pattern bottom">
        </v-row>
    </div> -->
</template>
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
    .yellow {
        color: #DE9E1A;
    }
</style>