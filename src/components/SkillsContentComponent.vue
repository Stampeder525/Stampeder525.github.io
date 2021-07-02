<template>
    <div class="ui relaxed left aligned padded stackable grid container">
        <div class="ui one column row">
            <div class="ui twelve wide column">
                <div class="ui label levelLegend" style="backgroundColor:#A3D585">Advanced</div>
                <div class="ui label levelLegend" style="backgroundColor:#EED059">Intermediate</div>
                <!-- <div class="ui label levelLegend" style="backgroundColor:#c0c0c0">Novice</div> -->
            </div>
        </div>
        <div class="ui two column row">
            <div class="ui three wide column">
                <h2>Languages</h2>
            </div>
            <div class="ui thirteen wide column">
                <div class="ui grid">
                    <div class="ui images skillBorder">
                        <div 
                            v-for="l in languages" 
                            :key="l.name" 
                            class="ui column hvr-float skillbox"
                            :class="l.level"
                        >
                            <clazy-load :src="l.img">
                                <img :alt="l.name" class="ui tiny rounded image" :src="l.img" @click.stop>
                                <div slot="placeholder"><i class="notched circle loading icon"></i></div>
                            </clazy-load>
                            <p class="name">{{ l.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui two column row">
            <div class="ui three wide column">
                <h2>Tools</h2>
            </div>
            <div class="ui twelve wide column">
                <div class="ui grid">
                    <div class="ui images skillBorder">
                        <div 
                            v-for="t in tools" 
                            :key="t.name" 
                            class="column hvr-float skillbox"
                            :class="t.level"
                        >
                            <clazy-load :src="t.img">
                                <img :alt="t.name" class="ui tiny rounded image" :src="t.img" @click.stop>
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
                    name: "Python",
                    img: "/src/assets/images/logos/python_logo.png",
                    level: "level3"
                },
                {
                    name: "C++",
                    img: "/src/assets/images/logos/cplusplus_logo.png",
                    level: "level3"
                },
                {
                    name: "C#",
                    img: "/src/assets/images/logos/csharp_logo.png",
                    level: "level3"
                },
                {
                    name: "Javascript",
                    img: "/src/assets/images/logos/javascript_logo.png",
                    level: "level3"
                },
                {
                    name: "React",
                    img: "/src/assets/images/logos/react_logo.png",
                    level: "level3"
                },
                {
                    name: "HTML",
                    img: "/src/assets/images/logos/html_logo.png",
                    level: "level3"
                },
                {
                    name: "CSS",
                    img: "/src/assets/images/logos/css_logo.png",
                    level: "level3"
                },
                {
                    name: "Java",
                    img: "/src/assets/images/logos/java_logo.png",
                    level: "level2"
                },
                {
                    name: "VueJS",
                    img: "/src/assets/images/logos/vue_logo.png",
                    level: "level2"
                },
                {
                    name: "Angular 6",
                    img: "/src/assets/images/logos/angular_logo.png",
                    level: "level2"
                },
                {
                    name: "SQL",
                    img: "/src/assets/images/logos/sql_logo.png",
                    level: "level2"
                },
                {
                    name: "C",
                    img: "/src/assets/images/logos/c_logo.png",
                    level: "level2"
                },
                {
                    name: "Flask",
                    img: "/src/assets/images/logos/flask_logo.png",
                    level: "level2"
                },
                {
                    name: "Node.js",
                    img: "/src/assets/images/logos/nodejs_logo.png",
                    level: "level2"
                },
                {
                    name: "Golang",
                    img: "/src/assets/images/logos/go_logo.png",
                    level: "level2"
                },
                {
                    name: "Bash",
                    img: "/src/assets/images/logos/bash_logo.png",
                    level: "level2"
                },
            ],
            tools: [
                {
                    name: "Git",
                    img: "/src/assets/images/logos/git_logo.png",
                    level: "level3"
                },
                {
                    name: "Unity",
                    img: "/src/assets/images/logos/unity_logo.png",
                    level: "level3"
                },
                {
                    name: "Jenkins",
                    img: "/src/assets/images/logos/jenkins_logo.png",
                    level: "level2"
                },
                {
                    name: "AWS",
                    img: "/src/assets/images/logos/aws_logo.png",
                    level: "level2"
                },
                {
                    name: "Kafka",
                    img: "/src/assets/images/logos/kafka_logo.png",
                    level: "level2"
                },
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
        padding-top: 3% !important;
    }

    .section {
        margin: 0 4% !important;
        padding-bottom: 5%;
    }
}

.skillbox {
    margin-left: 3em;
    text-align: center; 

    p {
        opacity: 100;
        font-size: 14px;
        text-shadow: 1px 1px 2px black;
    }

}

.levelLegend {
    color: white !important;
    text-shadow: 1px 1px 2px black;
}

.level3 {
    border-bottom: 3px solid #A3D585;
}

.level2 {
    border-bottom: 3px solid #EED059;
}

.level1 {
    border-bottom: 3px solid #c0c0c0;
}

.skillBorder {
    border-top: 3px solid white;
    border-left: none;
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
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}

p{
    color: white;
    font-size: 12px;
}


@media (min-width: 900px){ 
    .ui.relaxed.grid.container {
        width: 98% !important;
        margin: 0 !important;
    }

    .skillBorder {
        border-top: none;
        border-left: 3px solid white;
    }
}

</style>