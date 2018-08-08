import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMq from 'vue-mq';
import App from './App.vue';
import VueClazyLoad from 'vue-clazy-load';
import TileComponent from './components/TileComponent.vue';
import SkillsContentComponent from './components/SkillsContentComponent.vue';
import ExperienceContentComponent from './components/ExperienceContentComponent.vue';
import ProjectsContentComponent from './components/ProjectsContentComponent.vue';
import AboutContentComponent from './components/AboutContentComponent.vue';

Vue.use(VueClazyLoad);

Vue.use(VueMq, {
  breakpoints: {
    sm: 767,
    md: 900,
    lg: Infinity,
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use(VueResource);

Vue.component('tile-component', TileComponent);
Vue.component('skills-content-component', SkillsContentComponent);
Vue.component('experience-content-component', ExperienceContentComponent);
Vue.component('projects-content-component', ProjectsContentComponent);
Vue.component('about-content-component', AboutContentComponent);


new Vue({
  el: "#tiles",
});
