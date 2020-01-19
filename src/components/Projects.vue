<template>
  <div class="projectsBody">
    <Sidenav></Sidenav>

    <div class="content">
      <h2>Projects</h2>
      <p>A collection of projects I've worked on.</p>
      
      <div class="projectItemDiv" v-for="project in projectItems" v-bind:key="project">
        <h2>
          {{project.name}}
        </h2>
        <p>
          {{project.desc}}
        </p>
        <p>
          {{project.info}}
        </p>
        <li v-for="techItem in project.tech" v-bind:key="techItem">
          {{techItem}}
        </li>
        {{project.imgUrl}}
        {{project.projectLinks}}
      </div>
    </div>

    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
  import Sidenav from './Sidenav.vue';

  export default {
    name: 'Projects',
    components: {
      Sidenav
    },
    data () {
      return {
        projectItems: [
          {
            name: 'Otherside',
            desc: 'Spotify playlist generator based on shows happening in various locations',
            info: "Whenever I find a new artist I like - whether from a local show or a music festival, I love going on a music binge-spree for the next week or so, and adding them to my eternal music collection. Of course I'm not the only one that does this, but I definitely love discoverinig new music! Now, there are shows all across the US - and there's only one of me. How can I discover new artists playing shows if I'm not there? Otherside (rightfully named after the Red Hot Chili Pepper's hit song) aims to help me, and others like me out by consolidating songs based on shows across the US, and putting them into a Spotify playlist. It makes use of the Spotify and Seatgeek APIs to accomplish this task. It's simple - just pick some cities, pick some genres, log in and build a playlst.",
            tech: ['Go', 'Redis', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: '../assets/otherside.png',
            projectLinks: ['https://bransgithub.github.io/otherside', 'https://github.com/bransgithub/otherside']
          },
          {
            name: 'Rooster',
            desc: 'Daily dashboard web application to display weather, commute and calendar info',
            info: "",
            tech: ['C#', 'MongoDB', 'JavaScript/TypeScript', 'Angular', 'NUnit'],
            imgUrl: '../assets/rooster.png',
            projectLinks: ['https://github.com/bransgithub/rooster']
          },
          {
            name: 'Clairvoyance',
            desc: 'Desktop app to keep track of daily and weekly hours spent on different tasks',
            info: "",
            tech: ['C#/WPF', 'SQL Server', 'MSTest'],
            imgUrl: '../assets/clairvoyance.png',
            projectLinks: ['https://github.com/bransgithub/Clairvoyance']
          },
          {
            name: '[Open Source] Kolibri',
            desc: 'Open source project that delivers online education to low-resource communities',
            info: "",
            tech: ['Python/Django', 'SQL', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: '../assets/kolibri.png',
            projectLinks: ['https://github.com/learningequality/kolibri']
          },
          {
            name: '[Open Source] Jenkins.io LabVIEW Tutorial',
            desc: 'Tutorial to set up a Continuous Integration system with Jenkins, LabVIEW, and GitHub',
            info: "",
            tech: ['Jenkins', 'LabVIEW'],
            imgUrl: '../assets/jenkins-labview.png',
            projectLinks: ['https://jenkins.io/doc/tutorials/build-a-labview-app/']
          },
        ]
      }
    },
    mounted () {
      window.scrollTo(0,0);
      
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectsBody {
  margin: 0 auto 3em 0;
  width: auto;
  height: 100%;
}
.content {
  border-left: 5px solid rgb(142, 210, 222, 0.5);
  margin-left: 16em;
  padding-left: 1em;
  padding-right: 15em;
  text-align: left;
  height: auto;
  width: auto;
}
</style>
