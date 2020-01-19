<template>
  <div class="home">
    <p>
      I'm Brandon. I'm a 
      <span class="highlight" style="color: #17BBF9;">
        full stack developer
      </span> in 
      <span class="highlight" style="color: #F3BC1D;"> 
        Austin, Texas.
      </span>
    </p>
    <p>
      I like my software like I like my coffee - 
      <span style="font-weight: 200">
        <i>light</i>
      </span> and without bugs!
    </p>
    <p>
      Find out more about me and my work:
    </p>
    
    <div class="routeDiv">
      <div class="routeLink" @click="changeRoute('About')">
        <u>About Me</u>
      </div>

      <div class="routeLink" @click="changeRoute('Projects')">
        <u>My Projects</u>
      </div>
    </div>

    <p class="mediaParagraph">
      Or just jump straight into my LinkedIn or GitHub!
    </p>

    <div class="mediaLinkContainer">
      <div class="mediaLink">
        <a href="https://www.linkedin.com/in/brandondtnguyen" target="_blank">
          <img alt="LinkedIn" class="linkedin-img" src="../assets/LI-Logo.png">
          <img alt="LinkedIn" class="linkedin-icon" src="../assets/LI-Icon.png">
        </a>
      </div>

      <div class="mediaLink">
        <a href="https://github.com/bransgithub/" target="_blank">
          <img alt="GitHub" class="github-img" src="../assets/GH-Logo.png">
          <img alt="GitHub" class="github-icon" src="../assets/GH-Icon.png">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      changeRoute(path) {
        this.$router.push(path);
      }
    },
    mounted () {
      window.scrollTo(0,0);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  margin: 3em auto;
}
.routeDiv {
  margin: 1em 0 0.6em 0;
}
.routeLink {
  display: inline;
  margin: 0 1.5em 0 1.5em;
  font-family: 'Ubuntu', sans-serif;
  cursor: pointer;
  font-size: 42px;
}
p {
  font-size: 35px;
}
.highlight {
  font-weight: bold;
}
.mediaParagraph {
  margin-top: 1em;
  margin-bottom: 0.7em;
}
.mediaLink {
  display: inline;
  margin: 0 0.5em 0 0.5em;
}
.linkedin-img {
  margin-top: 10px;
  height: 130px;
  width: 500px;
}
.linkedin-icon {
  height: 180px;
  width: 200px;
  display: none;
}
.github-img {
  height: 160px;
  width: 500px;
}
.github-icon {
  background-color: black;
  height: 170px;
  width: 170px;
  display: none;
}

@media (max-width: 1100px) {
  .home {
    width: 80%;
  }
  p {
    text-align: justify;
    margin-top: 1em;
  }
  .linkedin-img {
    display: none;
  }
  .linkedin-icon {
    display: inline;
  }
  .github-img {
    display: none;
  }
  .github-icon {
    display: inline;
  }
  .mediaLink {
    margin: 0 2em 0 2em;
  }
  .mediaParagraph {
    margin-bottom: 1.2em;
  }
}

@media (max-width: 835px) {
  p {
    font-size: 50px;
    text-align: left;
  }
  .routeLink {
    display: block;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0.5em;
    font-size: 60px;
  }
}

@media (max-width: 705px) {
  .mediaLink {
    margin: 0 1em 0 1em;
  }
}

@media (max-width: 585px) {
  p {
    font-size: 45px;
  }
  .routeLink {
    font-size: 50px;
  }
  .linkedin-icon {
    height: 140px;
    width: 160px;
  }
  .github-icon {
    height: 130px;
    width: 130px;
  }
}

@media (max-width: 485px) {
  p {
    font-size: 40px;
  }
  .linkedin-icon {
    height: 100px;
    width: 120px;
  }
  .github-icon {
    height: 100px;
    width: 100px;
  }
}

@media (max-width: 400px) {
  .routeLink {
    font-size: 45px;
  }
  .linkedin-icon {
    height: 80px;
    width: 100px;
  }
  .github-icon {
    height: 80px;
    width: 80px;
  }
}

@media (max-width: 350px) {
  p {
    font-size: 35px;
  }
  .linkedin-icon {
    height: 60px;
    width: 80px;
  }
  .github-icon {
    height: 60px;
    width: 60px;
  }
}

</style>
