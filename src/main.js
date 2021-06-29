import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueMq from 'vue-mq';
import App from './App.vue';
import VueClazyLoad from 'vue-clazy-load';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import TileComponent from './components/TileComponent.vue';
import SkillsContentComponent from './components/SkillsContentComponent.vue';
import ExperienceContentComponent from './components/ExperienceContentComponent.vue';
import ProjectsContentComponent from './components/ProjectsContentComponent.vue';
import AboutContentComponent from './components/AboutContentComponent.vue';

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueClazyLoad);

Vue.use(VueAwesomeSwiper);

Vue.use(VueMq, {
  breakpoints: {
    sm: 767,
    md: 900,
    lg: Infinity,
    mobile: 450,
    tablet: 900,
    laptop: 1280,
    desktop: Infinity
  }
});

// const routes = [
//     { path: '/about', component: AboutContentComponent,
//       props: { default: true } 
//     },
//     { path: '/projects', component: ProjectsContentComponent,
//       props: { default: true } 
//     },
//     { path: '/work', component: ExperienceContentComponent,
//       props: { default: true } 
//      },
//     { path: '/tools', component: SkillsContentComponent,
//       props: { default: true } 
//     },
// ];

// const router = new VueRouter({
//   routes
// });

new Vue({
  el: '#app',
  render: h => h(App),
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
