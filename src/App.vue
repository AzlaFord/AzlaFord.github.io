<template>
  <Navbar/>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Footer/>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>