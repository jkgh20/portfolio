<template>
  <div class="projectsBody">
    <Sidenav></Sidenav>

    <div class="content">
      <div class="projectsPageHeader">
        <h2>Projects.</h2>
        <p>A collection of my favorite works. Enjoy!</p>
      </div>
      
      <div class="projectItemDiv" 
        v-for="project in projectItems" 
        v-bind:style='{ backgroundImage: `url("${project.imgUrl}")` }'
        v-bind:key="project.name">
        <h2 class="projectDivTitle">
          {{project.name}}
        </h2>
        <div class="projectPreview">
          <p>
            {{project.desc}}
          </p>
          <div class="technologyItemsDiv">
            <div class="technologyItem" v-for="techItem in project.tech" v-bind:key="techItem">
              {{techItem}}
            </div>
          </div>
        </div>
        {{project.imgUrl}}

        <!--
        <ProjectDetails
          v-bind:name = "project.name"
          v-bind:desc = "project.desc"
          v-bind:info = "project.info"
          v-bind:tech = "project.tech"
          v-bind:imgUrl = "project.imgUrl"
          v-bind:projectLinks = "project.projectLinks"
        ></ProjectDetails>
        -->
      </div>
    </div>

    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
  import Sidenav from './Sidenav.vue';
  //import ProjectDetails from'./ProjectDetails.vue';

  export default {
    name: 'Projects',
    components: {
      Sidenav,
      //ProjectDetails
    },
    data () {
      return {
        projectItems: [
          {
            name: 'Otherside',
            desc: 'Spotify playlist generator based on shows happening in various locations',
            info: "<p>Whenever I find a new artist I like - whether from a local show or a music festival, I love going on a music binge-spree for the next week or so, and adding them to my eternal music collection. Of course I'm not the only one that does this, but I definitely love discoverinig new music! Now, there are shows all across the US - and there's only one of me. How can I discover new artists playing shows if I'm not there?</p> <p>Otherside (rightfully named after the Red Hot Chili Pepper's hit song) aims to help me, and others like me out by consolidating songs based on live shows happening today across the US, and putting them into a Spotify playlist. It makes use of the Spotify and Seatgeek APIs to accomplish this task. It's simple - just pick some cities, pick some genres, log in and build a playlst.</p>",
            tech: ['Go', 'Redis', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: require('../assets/otherside.jpg'),
            projectLinks: [
              {name: 'Full Site', url: 'https://bransgithub.github.io/otherside'}, 
              {name: 'Source Code', url: 'https://github.com/bransgithub/otherside'}]
          },
          {
            name: 'Rooster',
            desc: 'Daily dashboard web application to display weather, commute and calendar info',
            info: "",
            tech: ['C#', 'MongoDB', 'JavaScript/TypeScript', 'Angular', 'NUnit'],
            imgUrl: '../assets/rooster.png',
            projectLinks: [
              {name: 'Source Code', url: 'https://github.com/bransgithub/rooster'}
            ]
          },
          {
            name: 'Clairvoyance',
            desc: 'Desktop app to keep track of daily and weekly hours spent on different tasks',
            info: "",
            tech: ['C#/WPF', 'SQL Server', 'MSTest'],
            imgUrl: '../assets/clairvoyance.png',
            projectLinks: [
              {name: 'Source Code', url: 'https://github.com/bransgithub/Clairvoyance'}
            ]
          },
          {
            name: 'Kolibri',
            desc: 'Open source project that delivers online education to low-resource communities',
            info: "",
            tech: ['Python/Django', 'SQL', 'JavaScript/TypeScript', 'Vue', 'Jest'],
            imgUrl: '../assets/kolibri.png',
            projectLinks: [
              {name: 'Kolibri\'s Website', url: 'https://learningequality.org/kolibri/'},
              {name: 'Kolbri\'s Source Code', url: 'https://github.com/learningequality/kolibri'},
            ]
          },
          {
            name: 'Jenkins.io LabVIEW Tutorial',
            desc: 'Tutorial to set up a Continuous Integration system with Jenkins, LabVIEW, and GitHub',
            info: "",
            tech: ['Jenkins', 'LabVIEW'],
            imgUrl: '../assets/jenkins-labview.png',
            projectLinks: [
              {name: 'Tutorial', url: 'https://jenkins.io/doc/tutorials/build-a-labview-app/'}
            ]
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
.projectsPageHeader {
  margin-bottom: 3em;
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
h2 {
  font-size: 80px;
}
p {
  font-size: 35px;
}
.projectItemDiv {
  width: 100%;
  height: 10em;
  border: 1px solid black;
  border-radius: 20px;
  margin-bottom: 2em;
  text-align: center;
  cursor: pointer;
}

.projectItemDiv:hover .projectDivTitle {
  display: none;
}
.projectItemDiv:hover .projectPreview {
  display: block;
}
.projectDivTitle {
  font-size: 45px;
  margin-top: 1.9em;
}
.projectPreview {
  display: none;
  text-align: left;
}
.technologyItemsDiv {
  margin: 0.3em;
}
.technologyItem {
  border: 1px solid black;
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
</style>
