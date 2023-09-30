<template>
    <div class="bg-primary overflow-hidden flex-column">
        <v-row class="justify-center text-center align-center">
            <v-col cols="12" md="3" @click="goTo('/home')">
                <span class="text-secondary text">
                    Bem vindos a
                </span>
                <br>
                <span class="text-secondary text">
                    Silent Forest!
                </span>
            </v-col>
        </v-row>
        <v-row class="justify-center maxWidth mx-auto">
            <v-col cols="8" class="text-center bg-surface inputs">
                <v-row>
                    <v-col cols="12">
                        <span class="cream text-h5">
                            Jogadores
                        </span>
                    </v-col>
                </v-row>
                <v-row class="pb-5">
                    <v-col 
                        cols="12" 
                        class="py-0" 
                        v-for="(nome, i) in players"
                            :key="i"
                    >
                        <v-text-field
                            rounded
                            label="Nome"
                            v-model="players[i]"
                            color="white"
                            class="text-h7"
                            variant="outlined"
                        >
                            <template v-slot:append-inner>
                                <v-icon 
                                    color="white" 
                                    @click="players.length <= 2 ? players[i] = '' : addPlayer('Remove')"> 
                                    mdi-close
                                </v-icon>
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" class="pt-0" v-if="players.length < 4">
                        <v-btn 
                            variant="outlined" 
                            rounded 
                            class="btnAdc"
                            @click="addPlayer('Add')"
                        >
                            +
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="justify-center py-6">
            <v-col cols="6" md="3">
                <v-btn
                    rounded
                    size="x-large"
                    class="bg-secondary w-100 text-primary"
                    @click="checkPlayers()"

                >
                    Jogar
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="space-around" class="pt-6 ">
            <v-col cols="auto" class="pt-16">
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
        </v-row>
    </div>
</template>
<script setup>
let players = ref(['','']);
const rulesGame = ref([
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quam delectus, mollitia nostrum ea inventore at perferendis totam. Blanditiis rem libero voluptatem consequuntur quas aspernatur pariatur alias nobis dolore velit!'
])
let rulesShow = ref(false)
const router = useRouter();

const goTo = (route) => {
    router.push(route);
}

const addPlayer = (operation) => {
    if(players.value.length < 4 && operation === 'Add') {
        const testName = players.value.indexOf('')
        if(testName === -1) players.value.push('')
    };
    if(players.value.length > 2 && operation === 'Remove') {
        players.value.pop();
    };
}

const checkPlayers = () => {
    const testName = players.value.indexOf('')
    if(players.value.length >= 2 && testName === -1) {
        goTo('/text');
    } 
}

const showRules = () => {
    rulesShow.value = !rulesShow.value
}
</script>
<style scoped>
.bg-primary {
    width: 100vw;
    height: fit-content;
}
.text {
    font-size: 2rem;
}

.maxWidth {
    max-width: 800px;
}

.inputs {
    border-radius: 20px;
    height: fit-content;
}
.cream {
    color: #F3E2C9;
}
.btnAdc {
    border: 2px dashed #F3E2C9;
    width: 100%;
    font-size: 1.5rem;
    height: 150%;
}
</style>