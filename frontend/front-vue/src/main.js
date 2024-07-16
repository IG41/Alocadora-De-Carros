// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // Importando o roteador

const app = createApp(App);
app.use(store);
app.use(router); // Usando o roteador
app.mount('#app');
