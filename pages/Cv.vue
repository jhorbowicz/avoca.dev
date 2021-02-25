<template>
  <div id="cv" class="max-w-page mx-auto bg-gray-100 border border-jet border-solid p-4">
    <main class="grid grid-cols-12 gap-4">
      <aside class="col-span-12 md:col-span-4">
        <header class="bg-white py-5 px-10 border border-solid border-black md:hidden">
          <h1>Jan Horbowicz</h1>
          <p class="text-2xl font-main">Software Engineer</p>
        </header>
        <img id="cv-photo" src="~/assets/images/my_photo.png" alt="CV photo" class="mx-auto mt-4 md:mt-0"/>
        <p class="mt-4 box font-main text-lg italic">I approach the work with an open mind and rationality to find the simplest solution to the problem</p>
        <div class="grid grid-rows-7 grid-cols-1 gap-4 mt-4">
          <span class="box font-main text-lg">janhorbowicz@gmail.com</span>
          <span class="box font-main text-lg">+48 662 469 631</span>
          <span class="box font-main text-lg">https://avoca.dev</span>
          <span class="box font-main text-lg">github.com/jhorbowicz</span>
          <span class="box font-main text-lg">English: upper intermediate</span>
          <span class="box font-main text-lg">German: basic</span>
          <span class="box font-main text-lg">Polish: native</span>
        </div>
        <img src="~assets/images/code.png" class="mt-10 hidden md:block"/>
      </aside>
      <div class="col-span-12 md:col-span-8">
        <header class="bg-white py-5 px-10 border border-solid border-black hidden md:inline-block">
          <h1>Jan Horbowicz</h1>
          <p class="text-2xl font-main">Software Engineer</p>
        </header>
        <section id="experience">
          <h2 class="box mt-4">Proffesional experience</h2>
          <experience-instance company="Antmicro" period="Jan 2021 - now" title="Software Engineer I">
            <p>I joined here to help improve internal tools, as well as deliver marketing pages faster and with high quality. I created a website with easily editable content, built in gatsby (React framework) and worked on internal tool written in VueJS.</p>
          </experience-instance>
          <experience-instance company="HolidayCheck" period="Aug 2019 - Dec 2020" title="Software Engineer">
            <p>I worked on high traffic applications (more than millions unique visits per month) here, including conducting A/B/C/D tests on a page with highest traffic, using Optimizely. Main technologies here were React.js and TypeScript with support from Redux, Jest, SCSS but also styled-components (CSS-in-JS). I discovered benefits of software craftsmanship, learned to work in TDD, but also involved myself highly in product development.</p>
          </experience-instance>
          <experience-instance company="Kinguin" period="Nov 2017 - Jul 2019" title="Junior Software Engineer I">
            <p>I started to work as a Junior Quality Assurance Engineer, and I learned about rest automation, Continous Integration and Continous Delivery. Later I decided to switch my role to Frontend-focused Software Engineer. I worked mainly on React + Redux application, but also helped to create internal javascript packages library including authentication service (OAuth 2 flow). Moreover, I started to develop regression tests written in Cypress, suported by unit tests with Jest and Enzyme.</p>
          </experience-instance>
          <experience-instance company="Pearson IOKI" period="Jun 2017 - Aug 2017" title="IT Itern (Frontend)">
            <p>It was my first experience with web development. I learned about Angular framework, helped to fix bugs and change translation library for a high traffic application. I also learned how to use Docker containers and how to control code version with git.</p>
          </experience-instance>
        </section>
        <section id="education">
          <h2 class="box mt-4">Education</h2>
          <experience-instance company="Master of science" period="2015 - 2017" title="Astronomy">
            <p>In my masters degree I started to use Python as my main programming language, to write scientific scripts and for the application of numerical methods. For my master thesis I worked with automation pipeline for observations reduction and wrote python script to create light curves, that can be seen for example on http://www.gaiagosa.eu/observation-processing.</p>
          </experience-instance>
          <experience-instance company="Bachelor’s degree" period="2012 - 2015" title="Observational Astronomy">
            <p>During my first years of Astronomy degree, besides physics and mathematics, I learned how to work with Linux and command line. I also learned programming foundations in C and bash.</p>
          </experience-instance>
        </section>
        <section id="competences">
          <h2 class="box mt-4">Competences</h2>
          <experience-instance company="I feel comfortable working with:">
            <p>JavaScript, ReactJS, Redux, TypeScript, CSS, SCSS, TailwindCSS, Bootstrap, GatsbyJS, NextJS, Git, Docker/Podman, Jest, Enzyme, React-Testing-Library, Mocha, Chai</p>
          </experience-instance>
          <experience-instance company="Development directions">
            <p>Although I like working in React environment, I would like to gather more experience in other JS frameworks (VueJS or Svelte) as well as move into fullstack development (Currently I  mainly understand how back-end and infrastructure works, but have small or none experience implementing it). Technologies, that recently appeared on my radar are WebAssembly and Web Components.</p>
            <p>Besides web development I am fascinated by data visualisation and how it can improve decision making process.</p>
            <p>I am also constantly trying to improve my design skills (this CV is created in Figma 🙂), and learn more about UX patterns</p>
          </experience-instance>
        </section>
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
import ExperienceInstance from '../components/ExperienceInstance.vue';

export default {
  components: {
    'experience-instance': ExperienceInstance,
  }
}
</script>
