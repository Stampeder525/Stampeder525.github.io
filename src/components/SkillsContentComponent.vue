<template>
    <div class="ui relaxed centered padded stackable grid container">
        <div class="ui row">
            <div class="ui four wide column section">
                <h2 style="text-align: center">Languages</h2>
                <div class="ui clearing divider"></div>
                <div class="ui centered grid">
                    <div class="ui images">
                        <div v-for="l in languages" v-bind:key="l.name" class="ui column hvr-float">
                            <clazy-load v-bind:src="l.img">
                                <img class="ui tiny rounded image" v-bind:title="l.name" v-bind:data-tooltip="l.name" data-position="bottom center" v-bind:src="l.img" v-on:click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ l.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui four wide column section">
                <h2 style="text-align: center">Front End</h2>
                <div class="ui clearing divider"></div>
                <div class="ui centered grid">
                    <div class="ui images">
                        <div v-for="t in frontend" v-bind:key="t.name" class="ui column hvr-float">
                            <clazy-load v-bind:src="t.img">
                                <img class="ui tiny rounded image" v-bind:title="t.name" v-bind:data-tooltip="t.name" data-position="bottom center" v-bind:src="t.img" v-on:click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ t.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui four wide column section">
                <h2 style="text-align: center">Back End</h2>
                <div class="ui clearing divider"></div>
                <div class="ui centered grid">
                    <div class="ui images">
                        <div v-for="t in backend" v-bind:key="t.name" class="column hvr-float">
                            <clazy-load v-bind:src="t.img">
                                <img class="ui tiny rounded image" v-bind:title="t.name" v-bind:data-tooltip="t.name" data-position="bottom center" v-bind:src="t.img" v-on:click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ t.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui three wide column section">
                <h2 style="text-align: center">Design</h2>
                <div class="ui clearing divider"></div>
                <div class="ui centered grid">
                    <div class="ui images">
                        <div v-for="t in design" v-bind:key="t.name" class="column hvr-float">
                            <clazy-load v-bind:src="t.img">
                                <img class="ui tiny rounded image" v-bind:title="t.name" v-bind:data-tooltip="t.name" data-position="bottom center" v-bind:src="t.img" v-on:click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ t.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui three wide column section">
                <h2 style="text-align: center">Game Dev</h2>
                <div class="ui clearing divider"></div>
                <div class="ui centered grid">
                    <div class="ui images">
                        <div v-for="t in gamedev" v-bind:key="t.name" class="column hvr-float">
                            <clazy-load v-bind:src="t.img">
                                <img class="ui tiny rounded image" v-bind:title="t.name" v-bind:data-tooltip="t.name" data-position="bottom center" v-bind:src="t.img" v-on:click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ t.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SkillsContentComponent',
    data () {
        return {
            languages: [
                {
                    name: "C++",
                    img: "/src/assets/images/logos/cplusplus_logo.png",

                },
                {
                    name: "C",
                    img: "/src/assets/images/logos/c_logo.png",
                },
                {
                    name: "C#",
                    img: "/src/assets/images/logos/csharp_logo.png",
                },
                {
                    name: "Python",
                    img: "/src/assets/images/logos/python_logo.png",
                },
                {
                    name: "SQL",
                    img: "/src/assets/images/logos/sql_logo.png",
                },
                {
                    name: "HTML",
                    img: "/src/assets/images/logos/html_logo.png",
                },
                {
                    name: "CSS",
                    img: "/src/assets/images/logos/css_logo.png",
                }
            ],
            frontend: [
                {
                    name: "VueJS",
                    img: "/src/assets/images/logos/vue_logo.png",
                },
                {
                    name: "Angular 6",
                    img: "/src/assets/images/logos/angular_logo.png",
                },
                {
                    name: "React",
                    img: "/src/assets/images/logos/react_logo.png",
                },
                {
                    name: "React Native",
                    img: "/src/assets/images/logos/reactnative_logo.png",
                },
                {
                    name: "jQuery",
                    img: "/src/assets/images/logos/jquery_logo.png",
                },
                {
                    name: "Boostrap",
                    img: "/src/assets/images/logos/bootstrap_logo.png",
                },
                {
                    name: "Flask",
                    img: "/src/assets/images/logos/flask_logo.png",
                },
            ],
            backend: [
                {
                    name: "AWS",
                    img: "/src/assets/images/logos/aws_logo.png",
                },
                {
                    name: "Pig",
                    img: "/src/assets/images/logos/pig_logo.png",
                },
                {
                    name: "Hive",
                    img: "/src/assets/images/logos/hive_logo.png",
                },
                {
                    name: "Hadoop",
                    img: "/src/assets/images/logos/hadoop_logo.png",
                },              
            ],
            design: [
                {
                    name: "Photoshop",
                    img: "/src/assets/images/logos/photoshop_logo.png",
                },
                {
                    name: "Illustrator",
                    img: "/src/assets/images/logos/illustrator_logo.png",
                },
                
            ],
            gamedev: [
                {
                    name: "Unity",
                    img: "/src/assets/images/logos/unity_logo.png",
                }
            ],
        }
    }
}
</script>

<style lang="scss">

.tileContent {
    position: relative;
    width: 100%;

    h2 {
        padding-bottom: 1%;
        padding-left: 0;
        padding-top: 0;
    }

    .container {
        margin-left: 0;
        max-width: 35vw;
        display: inline-block;
    }

    .ui.row {
        padding-top: 0;
    }

    .section {
        margin: 0 4% !important;
        padding-bottom: 5%;
    }
}

.hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;

  p {
      opacity: 0;
      -webkit-transition: opacity 0.3s;
      -moz-transition: opacity 0.3s;
      -o-transition: opacity 0.3s;
      transition: opacity 0.3s;
  }
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);

  p {
      opacity: 100;
  }
}

p{
    font-size: 12px;
    color: white;
}

.ui.grid .ui.stackable.grid, .ui.segment:not(.vertical) .ui.stackable.page.grid {
    margin: 0 1em !important;
}


@media (min-width: 768px){ 
    .ui.relaxed.grid.container {
        width: 100% !important;
        margin: 0 !important;
    }
}

</style>