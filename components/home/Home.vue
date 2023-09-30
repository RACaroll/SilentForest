<template>
  <v-row class="text-center pt-16">
    <v-col cols="12" class="px-6">
      <v-row class="justify-center align-center">
        <v-col cols="12" md="3" class="bg-plants pb-8">
          <div class="circle mx-auto">
            <v-row class="text-secondary pt-10 text-h3">
              <v-col cols="12" class="pb-0">
                <span>
                  Silent
                </span>
              </v-col>
              <v-col cols="12" class="pt-0">
                <span>
                  Forest
                </span>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" class="mb-16">
      <v-btn 
        rounded 
        class="bg-secondary px-9 pb-12 text-h4 text-primary"
        @click="goTo('/names')"
      >
        INICIAR
      </v-btn>
    </v-col>
  </v-row>
  <v-row class="justify-center text-secondary pt-10">
    <v-col cols="2" class="text-h5 pl-1 pt-16">
      <span class="pt-16">
        KaLu
      </span>
    </v-col>
  </v-row>
</template>
<script setup>
const router = useRouter();

const goTo = (route) => {
    router.push(route);
  };
</script>
<style scoped>
.bg-plants {
  height: 50vh;
  background: url("../../assets/svg/plants.svg")no-repeat;
  background-size: contain;
}

.circle {
  height: 70%;
  width: 70%;
  max-width: 300px;
  border-radius: 50%;
  background-color: #394832;
}
</style>