<template>
    <v-row class="bg-primary h-100 ma-0">
        <v-col class=" bg-left-top ">
            <v-row class="justify-center h-100 align-center">
                <v-col>
                    <slot name="content" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<style scoped>
.bg-left-top {
    background-image: url(../assets/svg/inomeado.svg);
    background-size: cover;
}
</style>