// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Projects from '../components/Projects.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
 {path: '/:catchAll(.*)',
     name: 'NotFound',
     component: NotFound },
]  

const router = createRouter({
  history: createWebHistory(), // Utilisation de l'historique HTML5
  routes
});

export default router;
