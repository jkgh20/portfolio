<template>
  <div class="projectDetails" v-if="showModal">
    <button class="closeButton" @click="hide()">
        X
    </button>

    <h2 class="header">{{name}}</h2>
    <h3 class="subheader">{{desc}}.</h3>
    <div class="techItemDiv">
        <div class="techItem" v-for="item in tech" v-bind:key="`${item}-modal`">
            {{item}}
        </div>
    </div>

    <div class="info" v-html="info"></div>

    <h4 class="link" v-for="link in projectLinks" v-bind:key="link.name">
        <a :href="link.url" target="_blank">{{link.name}}</a>
    </h4>

    <p class="closeLink" @click="hide()">close</p>

    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
  export default {
    name: 'ProjectDetails',
    props: {
        name: String,
        desc: String,
        info: String,
        tech: Array,
        imgUrl: String,
        projectLinks: Array
    },
    data() {
      return {
          showModal: false
      }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projectDetails {
    z-index: 1;
    position: fixed;
    overflow: auto;
    padding: 1em 3em;
    background-color: rgb(142, 210, 222, 0.97);
    border-radius: 1em;
    width: 80vw;
    height: 90vh;
    top: 50%;
    left: 50%;
    margin-top: -45vh;
    margin-left: -40vw;
    text-align: left;
}
.closeButton {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 2.5em;
    margin-left: 70vw;
}
.header {
    font-size: 3em;
    margin-bottom: 0.1em;
}
.subheader {
    font-size: 1.5em;
    margin-bottom: 0.5em;
}
.techItemDiv {
    margin-top: 1em;
    margin-bottom: 1em;
}
.techItem {
  background-color: white;
  border: 1px solid transparent;
  border-radius: 20px;
  font-family: 'Kanit', sans-serif;
  display: inline-block;
  padding: 0.3em 0.5em;
  margin-right: 0.4em;
  margin-bottom: 0.5em;
}
.info {
    font-size: 1.3em;
}
.link {
    font-size: 2em;
    text-decoration: underline;
    color: black;
    margin-bottom: 0.3em;
}
.link a {
    color: black;
}
.closeLink {
    text-decoration: underline;
    font-size: 1em;
    cursor: pointer;
}
@media (max-width: 1350px) {
    .projectDetails {
        width: 90vw;
        left: 50%;
        margin-left: -45vw;
    }
    .closeButton {
        margin-left: 75vw;
    }
}
@media (max-width: 1100px) {
    .closeButton {
        margin-left: 70vw;
    }
}
@media (max-width: 850px) {
    .closeButton {
        margin-left: 67vw;
    }
}
@media (max-width: 768px) {
    .closeButton {
        margin-left: 63vw;
    }
    .techItem {
        font-size: 1.1em;
    }
    .header {
        font-size: 3.5em;
        margin-bottom: 0.1em;
    }
    .subheader {
        font-size: 1.7em;
        margin-bottom: 0.5em;
    }
    .info {
        font-size: 2em;
    }
    .link {
        font-size: 2.5em;
    }
    .closeLink {
        text-decoration: underline;
        font-size: 1.5em;
        cursor: pointer;
    }
}
@media (max-width: 580px) {
    .projectDetails {
        padding: 1em 1.2em;
    }
    .closeButton {
        margin-left: 70vw;
    }
}
@media (max-width: 475px) {
    .projectDetails {
        width: 100vw;
        margin-left: -50vw;
        height: 100vh;
        margin-top: -50vh;
    }
    .header {
        font-size: 2.5em;
        margin-bottom: 0.5em;
    }
    .subheader {
        font-size: 1.7em;
    }
    .info {
        font-size: 1.5em;
    }
    .link {
        font-size: 2em;
    }
    .closeButton {
        margin-left: 65vw;
    }
}
@media (max-width: 375px) {
    .projectDetails {
        width: 120vw;
        margin-left: -60vw;
        height: 120vh;
        margin-top: -60vh;
    }
    .closeButton {
        margin-left: 80vw;
    }
}
@media (max-width: 330px) {
    .closeButton {
        margin-left: 75vw;
    }
}
</style>
