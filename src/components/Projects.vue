<template>
   <section id="projects" class="mt-20">
        <carousel v-bind="settings" :breakpoints="breakpoints">
            <slide v-for="project in projects" :key="project.id">
                <div class="w-full h-3/4 px-5 lg:py-5 lg:max-w-xl 2xl:max-w-2xl">
                        <img :src="project.img" alt="" class="w-full h-full rounded-lg">
                        <span class="text-center text-xs lg:text-lg">{{ project.name }}</span>
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
        name: 'MIS Application PT Hino Motors Indonesia',
        img: '/img/hino.png'
    },
    {
        id: '2',
        name: 'Monitoring Application Kopnuspos',
        img: '/img/kopnuspos2.png'
    },
    {
        id: '3',
        name: 'CBS WEB Application Kopnus',
        img: '/img/cbs-web1.png'
    },
    {
        id: '4',
        name: 'Loan Monitoing Application Kopnus',
        img: '/img/monitoring2.png'
    },
    {
        id: '5',
        name: 'CBS Desktop Application Kopnus',
        img: '/img/cbs2.png'
    },
    {
        id: '6',
        name: 'Monitoring Application Citrapay',
        img: '/img/citrapay.png'
    },
    {
        id: '7',
        name: 'CBS Desktop Application Koperasi Sumber Dana',
        img: '/img/cbs-ksd.png'
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