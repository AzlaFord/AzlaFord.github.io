<template>
    <!-- Navbar -->
  <section id="navbar" class="font-raleway">
        <nav class="bg-background/50 backdrop-blur-md fixed w-full z-20 top-0 left-0 lg:pt-3">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center ml-5">
                <img src="/img/logo.png" class="h-8 mr-3" alt="Shandybroom">
                <span class="self-center text-xl font-semibold whitespace-nowrap">BIVOL</span>
            </a>
            <div class="flex md:order-2 mr-3">
                <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 text-white rounded  md:hover:text-secondary md:text-secondary md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#about" class="block py-2 pl-3 pr-4t text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0"> About</a>
                </li>
                <li>
                  <a href="#skills" class="block py-2 pl-3 pr-4t text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0">Skills</a>
                </li>
                <li>
                  <a href="#projects" class="block py-2 pl-3 pr-4t text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0">Projects</a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
    </section>
    <!-- End Navbar -->
</template>