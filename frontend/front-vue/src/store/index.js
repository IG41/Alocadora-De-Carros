import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
    cars: [],
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    CLEAR_AUTH(state) {
      state.token = '';
      state.user = {};
    },
  },
  actions: {
    async signup({ commit }, user) {
      const response = await axios.post('http://localhost:3000/api/users/signup', user);
      const { token } = response.data;
      const userData = response.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      commit('SET_TOKEN', token);
      commit('SET_USER', userData);
    },
    async login({ commit }, user) {
      const response = await axios.post('http://localhost:3000/api/users/login', user);
      const { token } = response.data;
      const userData = response.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      commit('SET_TOKEN', token);
      commit('SET_USER', userData);
    },
    async adminLogin({ commit }, user) {
      const response = await axios.post('http://localhost:3000/api/admin/login', user);
      const { token } = response.data;
      const userData = response.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));
      commit('SET_TOKEN', token);
      commit('SET_USER', userData);
    },
    async logout({ commit }) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      commit('CLEAR_AUTH');
    },
    async fetchCars({ commit }) {
      const response = await axios.get('http://localhost:3000/api/cars');
      commit('SET_CARS', response.data);
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user.role === 'admin',
    user: (state) => state.user,
    cars: (state) => state.cars,
  },
});
