<template>
  <div class="about">
    <Sidenav></Sidenav>
    <div class="content">
      <div class="tempHeaderDiv">
        <transition name="slide-down">
          <h2 class="tempHeader" v-if="showCurrentMessage">
            <span class="tempHeaderBeginning">{{currentMessageBeginning}}</span> {{currentMessageEnd}}
          </h2>
        </transition>
      </div>

      <transition name="slide-down">
        <div class="introSection" v-if="bodySections[0]">
          <p>My name is Brandon, and I'm a full stack developer in Austin, TX. 
            I hail from the mountainous lands of Virginia, where I graduated from Virginia Tech 
            with a degree in Mechanical Engineering.</p>
          <p>Slowly but surely, I realised that working with software was what I wanted to do - I followed the so-called 
            'compass of my dreams' and ended up in Austin, TX! I've been working primarily on financial software at work, but am always happy to explore new things.</p>
        </div>
      </transition>

      <transition name="slide-down">
        <div class="technologySection" v-if="bodySections[1]">
          <p>
            Here are some of the technologies I'm familiar with:
          </p>
          <div class="technologies">
            <div class="technologyIcon" v-for="iconUrl in technologyIcons" v-bind:key="iconUrl">
              <img :src=iconUrl>
            </div>
          </div>
        </div>
      </transition>

      <transition name="slide-down">
        <div class="outroSection" v-if="bodySections[2]">
          <p>
            In my free time, other than coding, I enjoy playing guitar, psychology books, and going to music and comedy shows.
            I also try to surf and snowboard when I can, but it's not always easy because you know... Texas.
          </p>
          <p>
            Want to get in touch? You can reach me at <a href="mailto:brandon.dt.nguyen@gmail.com">brandon.dt.nguyen@gmail.com</a>. I'll respond as soon as possible.
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
          ['Responsive ', 'frontends.'],
          ['Robust ', 'backends.'],
          ['Really bad', 'jokes.'],
          ['Brandon', 'Nguyen.']
        ],
        currentMessageBeginning: null,
        currentMessageEnd: null,
        showCurrentMessage: null,
        bodySections: [
          false,
          false,
          false
        ],
        technologyIcons: [
          require('../assets/csharp.png'),
          require('../assets/go.png'),
          require('../assets/javascript.png'),
          require('../assets/typescript.png'),
          require('../assets/vue.png'),
          require('../assets/python.png'),
          require('../assets/jenkins.png'),
          require('../assets/html.png'),
          require('../assets/css.png')
        ]
      }
    },
    mounted() {
      window.scrollTo(0,0);
      
      var self = this;
      
      this.landingMessages.forEach(function(message, index) {
        var transitionInTimeMS = 2000 * index;
        var transitionOutTimeMS = transitionInTimeMS + 1500;

        setTimeout(function() {
          self.currentMessageBeginning = message[0];
          self.currentMessageEnd = message[1];
          self.showCurrentMessage = true;
          self.bodySections[index] = true;
        }, transitionInTimeMS);

        if (index != self.landingMessages.length - 1) {
          setTimeout(function() {
            //Set currentMessage to null for exit transition
            self.showCurrentMessage = null;
          }, transitionOutTimeMS);
        }
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
  height: 100%;
}
p {
  font-size: 35px;
}
a {
  color: rgb(51, 186, 210);
  font-weight: bold;
  text-decoration: underline;
}
.content {
  border-left: 5px solid rgb(142, 210, 222, 0.5);
  margin-left: 22em;
  padding-left: 1em;
  text-align: left;
  height: auto;
  width: 65%;
}
.tempHeaderDiv {
  height: 5.5em;
}
.tempHeader {
  font-size: 4em;
}
.tempHeaderBeginning {
  color: rgb(51, 186, 210);
  font-weight: bold;
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
.technologyIcon {
  display: inline;
}
.technologyIcon img {
  margin: 1em;
  height: 150px;
}
.projectsLink {
  font-weight: bold;
  color: rgb(51, 186, 210);
  text-decoration: underline;
  cursor: pointer;
}
@media (max-width: 1700px) {
  .tempHeaderDiv {
    height: 4.5em;
  }
  .tempHeader {
    font-size: 3.5em;
  }
}
@media (max-width: 1600px) {
  .content {
    width: 60%;
  }
  .tempHeaderDiv {
    height: 3.5em;
  }
  .tempHeader {
    font-size: 2.5em;
  }
  p { 
    font-size: 30px;
  }
}
@media (max-width: 1400px) {
  .content {
    margin-left: 16em;
  }
  .tempHeaderDiv {
    height: 3em;
  }
  .tempHeader {
    font-size: 2em;
  }
  p { 
    font-size: 26px;
  }
  .technologyIcon img {
    margin: 0.6em;
    height: 100px;
  }
}
@media (max-width: 1100px) {
  .content {
    width: 55%;
  }
}
@media (max-width: 1025px) {
  .content {
    width: 50%;
  }
  .tempHeaderDiv {
    height: 2.5em;
  }
  .tempHeader {
    font-size: 1.5em;
  }
}
@media (max-width: 1000px) {
  .content {
    width: 60%;
  }
  .content {
    margin-left: 11em;
  }
}
@media (max-width: 860px) {

}
@media (max-width: 768px) {
  .content {
    margin-left: 3em;
    width: 85%;
  }
  .technologyIcon img {
    margin: 0.4em;
    height: 70px;
  }
}
@media (max-width: 510px) {
  .content {
    width: 70%;
  }
  .tempHeaderDiv {
    height: 6.5em;
  }
  .tempHeader {
    font-size: 2.5em;
  }
  p { 
    font-size: 25px;
  }
  .technologySection {
    margin-bottom: 1em;
  }
}
@media (max-width: 440px) {
  .about {
    width: 100%;
  }
  .content {
    width: 100%;
  }
}
@media (max-width: 350px) {

}
</style>
