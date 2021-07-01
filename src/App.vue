
<template>
  <div id="app" v-cloak>
    <!-- <div id="loading" v-if="loading">
      <h1 style="color:black">Hi, Loren Heubert-Aubry.</h1>
      <h2 style="color:black">Welcome!</h2>
    </div> -->
    <div id="tiles">
      <div 
        class="ui stackable grid container" 
        style="margin:0 !important; width: 100vw !important; height:100vh !important;"
      >
          <tile-component 
            tabindex="0" 
            :class="tile.corner" 
            v-for="tile in tiles" 
            :key="tile.name" 
            :id="tile.url" 
            :name="tile.name" 
            :color="tile.color" 
            :corner="tile.corner" 
            :img="tile.img" 
            :alt="tile.alt"
            >
            </tile-component>
      </div>
    </div>
    <!-- <h2 style="color:black; position:absolute; left:33%; top:35%;">Loren Heubert-Aubry</h2> -->
    <footer>
        <div class="ui grid">
          <div 
            class="credits" 
            :class="[($mq === 'tablet') ? 'ui left floated eight wide column' : 'ui left floated five wide column']"
          >
            <div style="padding-left:3%; padding-right:3%">
              <p class="footerText">Copyright © 2018 Loren Heubert-Aubry</p>
              <p class="footerText">Artwork by <a tabindex="0" target="_blank" rel="noopener" href="https://wyervan.wixsite.com/wyervanart">Anna Ferguson</a></p>
            </div>
          </div>
          <div class="ui right floated four wide column">
            <i class="profileLinks" :class="[($mq === 'tablet') ? 'big icons' : 'huge icons']">
              <a 
                tabindex="0" 
                href="https://github.com/Stampeder525" 
                value="github" 
                target="_blank" 
                rel="noopener" 
                alt="Github"
                title="Github"
              >
                <i class="fab fa-github"/>
              </a>
              <a 
                tabindex="0" 
                href="https://www.linkedin.com/in/loren-heubert-aubry-465818ab/" 
                value="linkedin" 
                target="_blank" 
                rel="noopener" 
                alt="Linkedin"
                title="Linkedin"
                >
                  <i class="fab fa-linkedin"/>
                </a>
                <a 
                  tabindex="0" 
                  href="https://stampeder525.itch.io/" 
                  value="itch.io" 
                  target="_blank" 
                  rel="noopener" 
                  alt="Itch.io"
                  title="Itch.io"
                >
                  <i class="fab fa-itch-io"/>
                </a>
            </i>
          </div>
        </div>
    </footer>
  </div>
</template>

<script>
import TileComponent from './components/TileComponent.vue';

export default {
  name: 'app',
  components: {
    TileComponent
  },
  // loading: true,
}

</script>

<script>
export default {
  name: 'tiles',
  data () {
    return {
      tiles: [
        {
            id: 0,
            name: "Who I am",
            url: "about",
            color: "#4CAF50",
            img: "/src/assets/images/background/web2.png",
            alt: "/src/assets/images/background/web1.png",
            corner: "bannerTopLeft",
        },
        {
            id: 1,
            name: "What I've made",
            url: "projects",
            color: "#FF9800",
            img: "/src/assets/images/background/cactus2.png",
            alt: "/src/assets/images/background/cactus1.png",
            corner: "bannerTopRight",
        },
        {
            id: 2,
            name: "Where I work",
            url: "work",
            color: "#FF5252",
            img: "/src/assets/images/background/wave2.png",
            alt: "/src/assets/images/background/wave1.png",
            corner: "bannerBottomLeft",
        },
        {
            id: 3,
            name: "What I use",
            url: "tools",
            color: "#3F51B5",
            img: "/src/assets/images/background/gems2.png",
            alt: "/src/assets/images/background/gems1.png",
            corner: "bannerBottomRight",
        },
      ],
    }
  },
  // mounted() {
  //   this.$nextTick(function () {
  //     this.loading = false;
  //   })
  // }
}
</script>

<style lang="scss">

[v-cloak]{
  display: none !important;
}
[v-cloak]::before { content: "loading…" }

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
    // background-color: black;
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

.footerText {
  color: white;
  font-size: 0.75em;
  font-family: 'Open Sans', sans-serif !important;
  font-weight: 0 !important;
  margin-bottom: 0;

  a {
      color: white;
  }
}

.ui.grid > *{
  padding: 1rem !important;
}

footer {
  position: absolute;
  height: 4em;
  width: 100%;
  bottom: 3%;
  pointer-events: none;
  padding: 2em;

  .profileLinks {
    text-align: right;
    right: 26%;
    position:absolute;
    padding: 0.1em;
    border-radius:10px;
    pointer-events: all !important;

    background-color: rgba(155, 155, 155, 0.5);
    i {
      color: white;
    }
    i:hover {
      color: #4183c4;
    }
  }


  .helpMessage {
    text-align: center !important;
  }


  .credits {
    text-align: left;
    position: absolute;
    left: 8%;
    border-radius:10px;
    pointer-events: all !important;
    display: border-box;
    background-color: rgba(155, 155, 155, 0.5);

  }

  i {
    color: white;
  }

  i:hover {
    color: #4183c4;
  }
}

@media (min-width: 900px) {

  .footerText {
    color: black;
    font-size: 1.5em;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: 0 !important;

    a {
      color: black;
    }
  }

  footer {
    position: absolute;
    height: 5em;
    width: 100%;
    bottom: 3%;

    .profileLinks {
      background-color: rgba(155, 155, 155, 0.5);
      text-align: right;
      position: absolute;
      right: 10%;

      i {
        color: white;
      }
    }

    .profileLinks:hover {
      background-color: rgba(155, 155, 155, 1);

      i {
        color: white;
      }
      i:hover {
        color: #4183c4;
      }
    }

    .helpMessage {
      text-align: center;
    }

    .credits {
      background-color: rgba(244, 244, 244, 0.5);
      text-align: left;
      position: absolute;
      left: 3%;
    }

    .credits:hover {
      //background-color: rgba(244, 244, 244, 1);
      //background-color: white;
      -webkit-backdrop-filter: blur(10px); /* Chrome, Safari, Opera */
      -moz-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      .footerText, a {
        color: black;
      }
    }

    i {
      color: white;
    }

    i:hover {
      color: #4183c4;
    }

  }
}

</style>
