<template>
  <div class="projectsBody">
    <Sidenav></Sidenav>

    <ProjectDetails 
      v-for="project in projectItems"
      v-bind:key="`${project.name}-details`"
      :ref = "project.name + 'modal'"
      v-bind:name = "project.name"
      v-bind:desc = "project.desc"
      v-bind:info = "project.info"
      v-bind:tech = "project.tech"
      v-bind:imgUrl = "project.imgUrl"
      v-bind:projectLinks = "project.projectLinks"
    ></ProjectDetails>

    <div class="content">
      <transition name="slide-down">
        <div class="projectsPageHeader" v-if="showHeader">
          <h2>Projects.</h2>
          <p>A collection of my personal works. Enjoy!</p>
        </div>
      </transition>
      
      <div class="projectItemDiv" 
        v-for="project in projectItems" 
        v-bind:style='{ backgroundImage: `url("${project.imgUrl}")` }'
        v-bind:key="`${project.name}-projectItem`"
        @click="openModal(`${project.name}modal`)">
        <div class="projectDivTitle">
          {{project.name}}
        </div>
        <div class="projectPreview">
          <div class="previewDescription">
            {{project.desc}}
          </div>
          <div class="technologyItemsDiv">
            <div class="technologyItem" v-for="techItem in project.tech" v-bind:key="techItem">
              {{techItem}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
  import Sidenav from './Sidenav.vue';
  import ProjectDetails from'./ProjectDetails.vue';

  export default {
    name: 'Projects',
    components: {
      Sidenav,
      ProjectDetails
    },
    data () {
      return {
        projectItems: [
          {
            name: 'Otherside',
            desc: 'Spotify playlist generator based on live shows in various locations',
            info: "<p>Whenever I find a new artist I like - whether from a local show or a music festival, I love going on a music binge-spree for the next week or so, and adding them to my eternal music collection. Of course I'm not the only one that does this, but I definitely love discoverinig new music! Now, there are shows all across the US - and there's only one of me. How can I discover new artists playing shows if I'm not there?</p> <p>Otherside (rightfully named after the Red Hot Chili Pepper's hit song) aims to help me, and others like me out by consolidating songs based on live shows happening today across the US, and putting them into a Spotify playlist. It makes use of the Spotify and Seatgeek APIs to accomplish this task. It's simple - just pick some cities, pick some genres, log in and build a playlist.</p>",
            tech: ['Go', 'Redis', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: require('../assets/otherside.png'),
            projectLinks: [
              {name: 'Full Site', url: 'https://bransgithub.github.io/otherside'}, 
              {name: 'Source Code', url: 'https://github.com/bransgithub/otherside'}]
          },
          {
            name: 'Rooster',
            desc: 'Daily dashboard to display weather, commute and calendar info',
            info: "<p>Our time in the morning is precious - every second counts! I'll find myself checking the weather, what meetings/obligations I have for the day, and even my commute - maybe there's a traffic jam on the highway and I should go a different route? Routine is great, but is there a way I can see everything I need in the morning and save some time?</p><p>Rooster is a web application that consolidates all this information for me, taking weather data from the Dark Sky API, checking commute times from the Bing Distance API, and calendar information from the google calendar API. It lets the user configure what they want to see, and how they want to see it. </p>",
            tech: ['C#', 'MongoDB', 'JavaScript/TypeScript', 'Angular', 'NUnit'],
            imgUrl: require('../assets/rooster.png'),
            projectLinks: [
              {name: 'Source Code', url: 'https://github.com/bransgithub/rooster'}
            ]
          },
          {
            name: 'Clairvoyance',
            desc: 'Desktop app to keep track of daily and weekly hours spent on different tasks',
            info: "<p>At the end of every work week, many people get the absolute please of putting tasks into their timecard. During my time at National Instruments, I personally got to enjoy twice the amount - those for the general HR entries, and those for our entries into Microsoft Azure. It might take me 15 minutes every week to scramble through my notes and calendar just for this task.</p><p>By creating Clairvoyance, I was able to enter tasks into one place as I did them, and forget about them until Friday. Then I pull up my generated time report and - type type type - I'm done with my work week!</p>",
            tech: ['C#/WPF', 'SQL Server', 'MSTest'],
            imgUrl: require('../assets/clairvoyance.png'),
            projectLinks: [
              {name: 'Source Code', url: 'https://github.com/bransgithub/Clairvoyance'}
            ]
          },
          {
            name: 'Kolibri',
            desc: 'Open source project that delivers online education to low-resource communities',
            info: "<p>Kolibri is an offline app that lets users download educational material (e.g. Khan Academy courses) and share them with others. This makes it especially useful in low-resource communitites like rural schools, orphanages, and prisons. Inspired by their mission of making education more widely available, I started conributing to the app, primarily on the UX.</p>",
            tech: ['Python/Django', 'SQL', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: require('../assets/kolibri.png'),
            projectLinks: [
              {name: 'Kolibri\'s Website', url: 'https://learningequality.org/kolibri/'},
              {name: 'Kolbri\'s Source Code', url: 'https://github.com/learningequality/kolibri'},
            ]
          },
          {
            name: 'Jenkins.io LabVIEW Tutorial',
            desc: 'Tutorial to set up a Continuous Integration system with Jenkins, LabVIEW, and GitHub',
            info: "<p>LabVIEW is a graphical programming language that doesn't lend itself perfectly to every modern software engineering practice. Many of our (National Instrument's) biggest customers were interested in using CI with LabVIEW, but had no idea how or if it was even possible.</p><p>I worked with many teams across my company including Marketing and R&D to consolidate the best practices to use LabVIEW with Jenkins, and came up with this nifty tutorial I published onto the Jenkins.io site.</p>",
            tech: ['Jenkins', 'LabVIEW'],
            imgUrl: require('../assets/jenkins-labview.png'),
            projectLinks: [
              {name: 'Tutorial', url: 'https://jenkins.io/doc/tutorials/build-a-labview-app/'}
            ]
          },
        ],
        showHeader: null
      }
    },
    mounted () {
      window.scrollTo(0,0);
      this.showHeader = true;
    },
    methods: {
      openModal(refName) {
        this.$refs[refName][0].show();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectsBody {
  margin: 0 auto 3em 0;
  width: auto;
  height: 100%;
}
.projectsPageHeader {
  margin-bottom: 1.5em;
}
.content {
  border-left: 5px solid rgb(142, 210, 222, 0.5);
  margin-left: 22em;
  padding-left: 1em;
  padding-right: 15em;
  text-align: left;
  height: auto;
  width: auto;
}
.slide-down-enter-active {
  transition: all 1s ease;
}
.slide-down-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
h2 {
  font-size: 80px;
}
p {
  font-size: 35px;
}
.projectItemDiv {
  width: 100%;
  height: 10em;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-bottom: 2em;
  text-align: center;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
}

.projectItemDiv:hover .projectDivTitle {
  display: none;
}
.projectItemDiv:hover .projectPreview {
  display: block;
}
.projectDivTitle {
  color: white;
  font-size: 45px;
  margin-top: 2em;
  font-weight: 600;
  letter-spacing: 2px;
}
.projectPreview {
  display: none;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5em 2em;
  border-radius: 20px;
  height: 10em;
}
.previewDescription {
  font-size: 30px;
  color: white;
}
.technologyItemsDiv {
  margin: 0.3em;
  margin-left: 0;
}
.technologyItem {
  background-color: white;
  border: 1px solid transparent;
  border-radius: 20px;
  font-family: 'Kanit', sans-serif;
  display: inline-block;
  padding: 0.3em 0.5em;
  margin: 0.2em 0.3em;
}
@media (max-width: 1700px) {
  .content {
    padding-right: 10em;
  }
}
@media (max-width: 1600px) {
  .content {
    padding-right: 8em;
  }
  p { 
    font-size: 30px;
  }
}
@media (max-width: 1400px) {
  .content {
    margin-left: 16em;
  }
  p { 
    font-size: 30px;
  }
}
@media (max-width: 1230px) {
  .projectItemDiv {
    pointer-events: none;
  }
}
@media (max-width: 1100px) {
  .content {
    padding-right: 6em;
    margin-left: 11em;
  }
}
@media (max-width: 920px) {
  .content {
    padding-right: 4em;
  }
}
@media (max-width: 867px) {
  .content {
    padding-right: 2em;
  }
  p { 
    font-size: 30px;
  }
}
@media (max-width: 768px) {
  .content {
    margin-left: 3em;
  }
}
@media (max-width: 575px) {
  .content {
    padding-right: 1.5em;
  }
  p { 
    font-size: 35px;
  }
}
@media (max-width: 475px) {
  .projectItemDiv {
    font-size: 35px;
    height: 6em;
    margin-bottom: 0.5em;
  }
  .projectDivTitle {
    margin-top: 1.5em;
  }
}
@media (max-width: 400px) {
  .projectItemDiv {
    font-size: 23px;
    height: 4em;
    margin-bottom: 0.5em;
    width: 13em;
  }
  .projectDivTitle {
    margin-top: 0.5em;
  }
}
</style>
