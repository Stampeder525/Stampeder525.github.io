
<template>
  <div id="app">
    <div id="tiles">
      <div class="ui stackable grid container" style="margin:0 !important; width: 100vw !important; height:100vh !important;">
          <tile-component :class="tile.corner" v-for="tile in tiles" :key="tile.name" v-bind:id="tile.name" v-bind:name="tile.name" v-bind:color="tile.color" v-bind:corner="tile.corner" v-bind:description="tile.description" v-bind:icon="tile.icon"></tile-component>
      </div>
    </div>
    <div class="footer">
        <i v-bind:class="[($mq === 'sm') ? 'large icons' : 'huge icons']">
            <a href="https://github.com/Stampeder525" target="_blank" rel="noopener" alt="Github"><i class="fab fa-github"></i></a>
            <a  href="https://www.linkedin.com/in/loren-heubert-aubry-465818ab/" target="_blank" rel="noopener" alt="Linkedin"><i class="fab fa-linkedin"></i></a>
        </i>
    </div>
    <!-- <p class="helpMessage">Click on a tile to expand</p> -->
  </div>
</template>

<script>
import TileComponent from './components/TileComponent.vue';

export default {
  name: 'app',
  components: {
    TileComponent
  }
}

</script>

<script>
export default {
  name: 'tiles',
  data () {
    return {
      tiles: [
        {
            name: "What I use",
            color: "#3F51B5",
            corner: "bannerBottomRight",
        },
        {
            name: "What I've made",
            color: "#FF9800",
            corner: "bannerTopRight",
        },
        {
            name: "Where I work",
            color: "#FF5252",
            corner: "bannerBottomLeft",
        },
        {
            name: "Who I am",
            color: "#4CAF50",
            corner: "bannerTopLeft",
        }
      ],
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:500');
@import url('https://fonts.googleapis.com/css?family=family=Open+Sans:100');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#app, #tiles {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}

body {
    background-image: url("assets/images/background/dust_scratches.jpg");
    overflow-x: hidden;
}

#tiles {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

h1, h2 {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif !important;
  font-weight: normal;
  user-select: none;
  padding: 4%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

h1 {
  font-size: 3.5em;
}

h2 {
  font-size: 2.5em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.helpMessage {
  position: absolute;
  bottom: 3%;
  left: 40%;
  color: lightgrey;
  font-size: 2em;
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 0 !important;
}

.ui.grid > *{
  padding: 1rem !important;
}

.footer {
  position: absolute;
  height: 2em;
  width: 100%;
  bottom: 0;
  right: 3%;
  //background-color: blue;
  text-align: right;

  i {
    color: lightgrey;
  }

  i:hover {
    color: #4183c4;
  }
}

@media (min-width: 768px) {
  .footer {
    position: absolute;
    height: 5em;
    width: 10em;
    bottom: 3%;
    //background-color: blue;
    text-align: right;

    i {
      color: lightgrey;
    }

    i:hover {
      color: #4183c4;
    }

  }
}

</style>
