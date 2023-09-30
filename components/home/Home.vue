<template>
  <v-row justify="content space-evenly pa-10 flex-column">
    <v-col class="pineBranches d-flex justify-center align-center margin-top">
      <img src="../../assets/svg/plants.svg" class="pine position-absolute">
      <div class="circle position-absolute d-flex justify-center align-center flex-column">
        <h1>Silent</h1>
        <h1>Forest</h1>
      </div>
    </v-col>
    <v-col class="btn d-flex justify-center align-center">
      <v-btn 
        rounded 
        class="bg-secondary pb-12 text-h4 text-primary"
        @click="goTo('/names')"
      >
        INICIAR
      </v-btn>
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
.content {
  height: fit-content;
}
.pineBranches {
  height: 30vh;
  /* background: url("../../assets/svg/plants.svg")no-repeat; */
  background-size: contain;
}
.circle {
  height: 150px;
  width: 150px;
  max-width: 300px;
  border-radius: 50%;
  background-color: #394832;
  color: #DE9E1A;
}
.btn {
  margin-top: 30vh;
}
.margin-top {
  margin-top: 25vh;
}
</style>