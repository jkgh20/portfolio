<template>
  <div class="about">

    <Sidenav></Sidenav>

    <div class="content">
      <div class="tempHeaderDiv">
        <transition name="slide-down">
          <h2 class="tempHeader" v-if="currentMessage">
            {{currentMessage}}
          </h2>
        </transition>
      </div>

      <transition name="slide-down">
        <div class="introSection" v-if="bodySections[0]">
          <p>My name is Brandon Nguyen, and I'm a full stack developer in Austin, TX. 
            I hail from the mountainous lands of Virginia, where I graduated with a degree in Mechanical Engineering.</p>
          <p>Slowly but surely, I realised that working with software was what I wanted to do - I followed the so-called 
            'compass of my dreams' and ended up in Austin, TX! I've been working primarily on financial software at work, but am always happy to explore new things.</p>
        </div>
      </transition>

      <transition name="slide-down">
        <div class="technologySection" v-if="bodySections[1]">
          <h2>
            Here are some of the technologies I'm familiar with:
          </h2>
          <div class="technologies">
            technologies
          </div>
        </div>
      </transition>

      <transition name="slide-down">
        <div class="outroSection" v-if="bodySections[2]">
          <p>
            In my free time, other than coding, I enjoy playing guitar, psychology books, and going to music and comedy shows.
          </p>
          <p>
            I also try to surf and snowboard when I can, but it's not always easy because you know... Texas.
          </p>
          <p>
            Want to get in touch? You can reach me at brandon.dt.nguyen@gmail.com. I'll respond as soon as possible.
          </p>
          <p>
            In the meantime, why not check out some of my <span class="projectsLink" @click="changeRoute('Projects')">personal projects</span>? 
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Sidenav from './Sidenav.vue';

  export default {
    name: 'About',
    components: {
      Sidenav
    },
    data() {
      return {
        landingMessages: [
          'Responsive frontends.',
          'Robust backends.',
          'Really bad jokes.'
        ],
        currentMessage: null,
        bodySections: [
          false,
          false,
          false
        ]
      }
    },
    mounted() {
      var self = this;
      
      this.landingMessages.forEach(function(message, index) {
        var transitionInTimeMS = 2000 * index;
        var transitionOutTimeMS = transitionInTimeMS + 1500;

        setTimeout(function() {
          self.currentMessage = message;
          self.bodySections[index] = true;
        }, transitionInTimeMS);
        setTimeout(function() {
          //Set currentMessage to null for exit transition
          self.currentMessage = null;
        }, transitionOutTimeMS);
      });
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
.about {
  margin: 3em auto 3em 0;
  width: 90%;
}
.content {
  margin: 0 auto;
  text-align: left;
}
.tempHeaderDiv {
  height: 2em;
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
.projectsLink {
  font-weight: bold;
  color: rgb(51, 186, 210);
  text-decoration: underline;
  cursor: pointer;
}
</style>
