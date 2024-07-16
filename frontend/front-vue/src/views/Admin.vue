<template>
  <div>
    <nav>
      <router-link to="/login-admin">Admin</router-link>
      <router-link to="/logout">Logout</router-link>
    </nav>
    <router-view></router-view>
  </div>
  <div class="admin-panel">
    <h1>Admin Panel</h1>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Add New Car</h5>
        <form @submit.prevent="addCar">
          <div class="form-group">
            <label for="brand">Brand</label>
            <input id="brand" type="text" class="form-control" v-model="brand" required />
          </div>
          <div class="form-group">
            <label for="model">Model</label>
            <input id="model" type="text" class="form-control" v-model="model" required />
          </div>
          <div class="form-group">
            <label for="year">Year</label>
            <input id="year" type="number" class="form-control" v-model="year" required />
          </div>
          <div class="form-group">
            <label for="price">Price per Day</label>
            <input id="price" type="number" class="form-control" v-model="price_per_day" required />
          </div>
          <button type="submit" class="btn btn-primary">Add Car</button>
        </form>
      </div>
    </div>
    <h2>Cars</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Price per Day</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.price_per_day }}</td>
          <td>
            <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'AdminPanel',
  data() {
    return {
      brand: '',
      model: '',
      year: '',
      price_per_day: '',
    };
  },
  computed: {
    ...mapState(['cars']),
  },
  methods: {
    ...mapActions(['fetchCars']),
    async addCar() {
      try {
        await this.$axios.post('/api/cars', {
          brand: this.brand,
          model: this.model,
          year: this.year,
          price_per_day: this.price_per_day,
        });
        this.$swal('Success', 'Car added successfully', 'success');
        this.fetchCars();
      } catch (error) {
        this.$swal('Error', 'Failed to add car', 'error');
      }
    },
    async deleteCar(id) {
      try {
        await this.$axios.delete(`/api/cars/${id}`);
        this.$swal('Success', 'Car deleted successfully', 'success');
        this.fetchCars();
      } catch (error) {
        this.$swal('Error', 'Failed to delete car', 'error');
      }
    },
  },
  created() {
    this.fetchCars();
  },
};
</script>
