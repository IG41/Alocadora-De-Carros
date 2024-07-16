<template>
  <div>
    <nav>
      <router-link to="/login">Login</router-link>
      <br>
      <router-link to="/logout">Logout</router-link>
    </nav>
    <router-view></router-view>
  </div>
  <div class="home">
    <h1>Bem Vindo ao Serviço de Aluguel de carros</h1>
    <div class="card-deck">
      <div class="card" v-for="car in cars" :key="car.id">
        <div class="card-body">
          <h5 class="card-title">{{ car.brand }} {{ car.model }}</h5>
          <p class="card-text">Ano: {{ car.year }}</p>
          <p class="card-text">Por Dia: ${{ car.price_per_day }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['cars']),
  },
  methods: {
    ...mapActions(['fetchCars']),
  },
  created() {
    this.fetchCars();
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.card-deck {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 10px;
  width: 18rem;
}
</style>
