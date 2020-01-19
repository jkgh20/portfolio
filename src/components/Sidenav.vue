<template>
  <div class="sidenav">

    <img class="profilePic" src="../assets/profile.png">

    <div class="navDiv">
        <div class="navLink" @click="changeRoute('Home')">
            <u class="mobile-hidden">Home</u>
            <img class="mobile-nav-image" src="../assets/home.svg">
        </div>

        <div class="navLink" @click="changeRoute('About')">
            <u class="mobile-hidden">About</u>
            <img class="mobile-nav-image" src="../assets/aboutme.png">
        </div>

        <div class="navLink" @click="changeRoute('Projects')">
            <u class="mobile-hidden">Projects</u>
            <img class="mobile-nav-image" src="../assets/laptop-code.png">
        </div>

        <div class="mediaLinkDiv">
            <div class="mediaLink">
                <a href="https://www.linkedin.com/in/brandondtnguyen" target="_blank">
                <img alt="LinkedIn" class="linkedin-icon" src="../assets/LI-Icon.png">
                </a>
            </div>

            <div class="mediaLink">
                <a href="https://github.com/bransgithub/" target="_blank">
                <img alt="GitHub" class="github-icon" src="../assets/GH-Icon.png">
                </a>
            </div>
        </div>

        <a class="mailToLink" href="mailto:brandon.dt.nguyen@gmail.com">
            <span class="mobile-hidden">brandon.dt.nguyen@gmail.com</span>
            <img class="mobile-nav-image" src="../assets/email.png">
        </a> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidenav',
    methods: {
      changeRoute(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidenav {
    height: 100%;
    width: 20em;
    position: fixed;
    overflow-x: hidden;
}
.profilePic {
    border-radius: 50%;
    margin-top: 1em;
    height: 175px;
    width: 175px;
}
.navDiv {
    margin-top: 2em;
}
.navLink {
    margin: 0.5em auto;
    font-size: 40px;
    font-family: 'Ubuntu', sans-serif;
    cursor: pointer;
}
.mediaLinkDiv {
    margin-top: 3em;
    margin-bottom: 1.5em;
}
.mediaLink {
  display: inline;
  margin: 1em 1em 0 1em;
}
.linkedin-icon {
  height: 80px;
  width: 100px;
}
.github-icon {
  background-color: black;
  height: 80px;
  width: 80px;
}
.mailToLink {
    text-decoration: underline;
    font-weight: bold;
    font-size: 0.9em;
}
.mobile-hidden {
    display: block;
}
.mobile-nav-image {
    display: none;
    height: 45px;
}
@media (max-width: 1400px) {
    .sidenav {
        width: 15em;
    }
    .profilePic {
        border-radius: 50%;
        margin-top: 1em;
        height: 140px;
        width: 140px;
    }
    .navDiv {
        margin-top: 1em;
    }
    .navLink {
        font-size: 30px;
    }
}
@media (max-width: 1100px) {
    .sidenav {
        width: 11em;
    }
    .profilePic {
        height: 100px;
        width: 100px;
    }
    .navDiv {
        margin-top: 0.5em;
    }
    .navLink {
        font-size: 25px;
    }
    .mediaLinkDiv {
        margin-top: 2em;
        margin-bottom: 1em;
    }
    .mediaLink {
        margin: 0.5em 0.5em 0 0.5em;
    }
    .linkedin-icon {
        height: 50px;
        width: 60px;
    }
    .github-icon {
        height: 50px;
        width: 50px;
    }
    .mailToLink {
        font-size: 0.7em;
    }
}
@media(max-width: 768px) {
    .sidenav {
        width: 3em;
    }
    .profilePic {
        height: 50px;
        width: 50px;
    }
    .navDiv {
        margin-top: 2em;
        padding-left: 12px;
    }
    .navLink {
        margin-top: 2em;
        font-size: 10px;
    }
    .mediaLink {
        margin-left: 0.1em;
    }
    .linkedin-icon {
        height: 40px;
        width: 50px;
    }
    .github-icon {
        margin-top: 1em;
        margin-right: 1em;
        height: 40px;
        width: 40px;
    }
    .mobile-hidden {
        display: none;
    }
    .mobile-nav-image {
        display: block;
    }

}
</style>
