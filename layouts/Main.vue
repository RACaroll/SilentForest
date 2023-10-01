<template>
    <div class="bg-primary overflow-hidden">
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <img src="../assets/svg/oneSide.svg" class="pattern" alt="">
            </v-col>
            <v-col class="d-flex justify-center align-center">
                <span class="text-secondary text mb-0 pa-0">
                    ??
                </span>
            </v-col>
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
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <span class="text-body text-secondary" v-bind="props"> 
                            Regras 
                        </span>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar class="text-center bg-primary" title="Regras">
                                <v-icon 
                                    color="secondary"
                                    class="pr-8" 
                                    @click="isActive.value = false"
                                >
                                    mdi-close
                                </v-icon>
                            </v-toolbar>
                            <v-card-text>
                                <v-row>
                                    <v-col 
                                        cols="12" 
                                        class="py-2"
                                        v-for="(item, i) in rulesGame"
                                        :key="i"
                                    >
                                        <span class="text-h6">
                                            {{ item }}
                                        </span>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </template>
                </v-dialog>
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
    .text {
    font-size: 2rem;
}
</style>