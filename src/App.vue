<template>
  <Navbar/>

    <!-- Hero -->
    <section id="hero" class="mt-20 lg:mt-14 lg:justify-start">
        <div class="w-full relative overflow-hidden">
            <div class="absolute h-screen lg:-right-36 lg:-top-20">
                <img src="/img/pattern2.svg" alt="" class="w-full h-full scale-95 lg:scale-100 opacity-50 md:opacity-30 z-10 ">
            </div>
            <div class="container flex flex-wrap">
                <div class="w-full self-center px-10 order-1 lg:order-2 lg:w-1/2 ">
                    <h3 class="text-xl font-semibold mt-10 gradient sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Hi, I'm</h3>
                    <h1 class="text-xl font-bold gradient sm:text-4xl lg:text-6xl 2xl:text-7xl">Sandy Pratama Hidayat</h1>
                    <hr class="w-80 h-1 mt-4 bg-slate-400 border-0 rounded md:w-[70%]">
                    <p class="mt-3 text-xs md:text-lg 2xl:text-3xl">Web Developer (<span class="text-primary">Fullstack</span>) and Technology Anthusiasts</p>
                </div>
                <div class="w-full self-center px-10 mt-16 order-3 md:mt-32 lg:order-4 lg:mb-10 lg:bottom-0">
                    <div class="text-base text-center lg:text-2xl">
                        <p>A web developer and programmer who provides services for digital programming and design content needs. for all business with more than 5 years of experiences.</p>
                    </div>
                </div>
                <div class="w-full self-center px-10 order-2 lg:order-1 relative mt-5 lg:w-1/2 lg:overflow-hidden">
                    <img src="/img/neon.svg" alt="" class="z-0 absolute top-0 left-0 scale-100 blur-sm lg:top-24 lg:scale-125">
                    <img src="/img/foto.png" alt="" class="rounded-full scale-75 h-[300px] object-top w-full object-cover sm:h-[700px] md:h-[600px] xl:h-[700px] 2xl:h-[850px]">
                </div>
                <div class="w-full px-10 order-4 lg:order-3 lg:w-1/2 2xl:mt-0">  
                    <div class="flex justify-evenly flex-wrap mt-7">
                        <img class="scale-75 2xl:scale-100" src="/img/GitHub.png" alt="">
                        <img class="scale-75 2xl:scale-100" src="/img/Instagram.png" alt="">
                        <img class="scale-75 2xl:scale-100" src="/img/LinkedIn.png" alt="">
                        <img class="scale-75 2xl:scale-100" src="/img/WhatsApp.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="top-0 relative overflow-hidden">
        <div class="absolute z-0 w-full h-full top-10 pb-10 pr-0">
            <img src="/img/pattern1.svg" alt="" class="w-full h-full scale-125 opacity-30">
        </div>
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-10 lg:px-32">
                    <h3 class="text-2xl gradient text-center font-bold mt-20 mb-5 lg:text-4xl">About Me</h3>
                    <p class="text-center text-base lg:text-2xl">I am a man who was born on March 5 1992 and graduated from the Faculty of Computer Science at Gunadarma University</p>
                    <h3 class="text-white text-left mt-10 text-xl lg:text-2xl lg:mt-24">Work Experiences :</h3>
                    <ul class="text-white list-disc mt-4 lg:mt-10">
                        <li class="mb-5 text-lg lg:text-xl">
                            2012 - 2014
                            <br>
                            <span class="text-sm lg:text-lg"><span class="text-primary">Graphic Designer</span> at the business and entrepreneurship center at Gunadarma University.</span>
                        </li>
                        <li class="mb-5 text-lg lg:text-xl">
                            2015 - 2018
                            <br>
                            <span class="text-sm lg:text-lg"><span class="text-primary">Desktop Programmer</span> (<span class="text-primary">Fullstack</span>) at PT. Citra Multi Services.</span>
                        </li>
                        <li class="mb-5 text-lg lg:text-xl">
                            2018 - Now
                            <br>
                            <span class="text-sm lg:text-lg"><span class="text-primary">Desktop & Web Developer</span> (<span class="text-primary">Fullstack</span>) at Koperasi Nusantara (Kopnus)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section id="skills" class="relative">
        <div class="absolute z-0 w-full h-full top-10 pb-10 pr-0">
            <img src="/img/triangle.svg" alt="" class="w-full h-full scale-100 opacity-50">
        </div>
        <div class="container">
            <div class="flex flex-wrap">
                <div class="w-full self-center px-10">
                    <h3 class="text-2xl gradient text-center font-bold mt-20 mb-5 lg:text-4xl">Skills</h3>
                    <p class="text-center text-base lg:text-2xl lg:mb-10">Say Hello to My <span class="text-primary">Bestfriends</span></p>
                    <div class="w-full grid place-items-center"> 
                        <img src="/img/programming.png" alt="" class="lg:scale-75">
                    </div>
                    <p class="text-center mt-5 lg:text-2xl">and still learning something <span class="text-primary">new</span></p>
                </div>
            </div>
        </div>
    </section>
    <section id="projects" class="mt-20">
        <div class="container">
            <div class="grid place-items-center">
                <h3 class="text-2xl gradient text-center font-bold mb-2 lg:text-4xl">Projects</h3>
                <span>Work it out really hard</span>
                <div class="w-full h-3/4 lg:overflow-hidden px-5 lg:py-5 lg:max-w-xl 2xl:max-w-2xl">
                    <img src="/img/hino.png" alt="" class="w-full h-full rounded-lg">
                    <span class="text-center text-xs lg:text-lg">MIS Application PT. Hino Motors Indonesia</span>
                </div>
            </div>
        </div>
    </section>
    <section id="footer mt-10">
        <div class="w-full h-96 relative">
            <img src="/img/rain.svg" alt="" class="w-full h-full object-cover ">
            <div class="absolute inset-x-0 bottom-0">
                <p class="text-center mb-3 text-sm">Created by Myself with ❤️ 2023</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Navbar from './components/Navbar.vue'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>