import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

import './assets/scss/main.scss';

const firebaseConfig = {
  apiKey: 'AIzaSyDH9-suezX74q9lY5UZz8v5vd9m5nx0PTc',
  authDomain: 'lmdb-40709.firebaseapp.com',
  databaseURL: 'https://lmdb-40709-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'lmdb-40709',
  storageBucket: 'lmdb-40709.appspot.com',
  messagingSenderId: '386578326821',
  appId: '1:386578326821:web:be00ef8bc36cc5e5fd66cc',
  measurementId: 'G-3K8QEWRJXW'
};

initializeApp(firebaseConfig);
getDatabase(initializeApp(firebaseConfig));

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
