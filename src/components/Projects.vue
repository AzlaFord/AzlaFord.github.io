<template>
   <section id="projects" class="mt-20">
        <carousel v-bind="settings" :breakpoints="breakpoints">
            <slide v-for="project in projects" :key="project.id">
                <div class="w-full h-3/10 px-5 lg:py-5 lg:max-w-xl 2xl:max-w-2xl">
                        <a :href="project.url">
                          <img :src="project.img" alt=""  class="w-full h-full rounded-lg">
                          <span class="text-center text-xs lg:text-lg">{{ project.name }}</span>
                        </a>
                        

                </div>
            </slide>
            <template #addons>
            <navigation />
            <pagination />
            </template>
        </carousel>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from 'vue';

const projects = [
    {
        id: '1',
        name: 'Dashboard',
        img: '/img/Dashboard.png',
        url: 'https://dash-board-tau-nine.vercel.app/invoices',
    },
    {
        id: '2',
        name: 'Vremea',
        img: '/img/Vremea.png',
        url: 'https://azlaford.github.io/CevaCumPloua/my-react-app/index.html',
    },
];

const settings = ref({
      itemsToShow: 1,
      snapAlign: 'center',
    });

const breakpoints = ref({
     // 700px and up
     480: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      // 700px and up
      700: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 2.5,
        snapAlign: 'start',
      },
    });
</script>