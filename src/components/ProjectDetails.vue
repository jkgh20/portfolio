<template>
  <div class="projectDetails">
    <h2>{{name}}</h2>
    <h3>{{desc}}</h3>

    <div v-html="info"></div>

    <ul>
        <li v-for="techItem in tech" v-bind:key="techItem">
            {{techItem}}
        </li>
    </ul>

    <h4 v-for="link in projectLinks" v-bind:key="link">
        <a :href="link.url" target="_blank">{{link.name}}</a>
    </h4>

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
        tech: [String],
        imgUrl: String,
        projectLinks: [[Object]]
    },
    data() {
      return {

      }
    },
    methods: {
      changeRoute(path) {
        this.$router.push(path);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
