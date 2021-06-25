<template>
    <div class="ui relaxed left aligned padded stackable grid container">
        <div class="ui one column row">
            <div class="ui label levelLegend" style="backgroundColor:#A3D585">Advanced</div>
            <div class="ui label levelLegend" style="backgroundColor:#EED059">Intermediate</div>
            <div class="ui label levelLegend" style="backgroundColor:#E26350">Novice</div>
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
                            v-bind:key="l.name" 
                            class="ui column hvr-float skillbox"
                            v-bind:class="l.level"
                        >
                            <clazy-load v-bind:src="l.img">
                                <img class="ui tiny rounded image" v-bind:src="l.img" v-on:click.stop>
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
                            v-bind:key="t.name" 
                            class="column hvr-float skillbox"
                            v-bind:class="t.level"
                        >
                            <clazy-load v-bind:src="t.img">
                                <img class="ui tiny rounded image" v-bind:src="t.img" v-on:click.stop>
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
                    level: "level1"
                },
                {
                    name: "Bash",
                    img: "/src/assets/images/logos/bash_logo.png",
                    level: "level1"
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
                    level: "level2"
                },
                {
                    name: "Jenkins",
                    img: "/src/assets/images/logos/jenkins_logo.png",
                    level: "level2"
                },
                {
                    name: "AWS",
                    img: "/src/assets/images/logos/aws_logo.png",
                    level: "level1"
                },
                {
                    name: "Kafka",
                    img: "/src/assets/images/logos/kafka_logo.png",
                    level: "level1"
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
        padding-top: 4% !important;
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
    border-bottom: 3px solid #E26350;
}

.skillBorder {
    border-left: 3px solid white;
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

.ui.grid .ui.stackable.grid, .ui.segment:not(.vertical) .ui.stackable.page.grid {
    margin: 0 1em !important;
}


@media (min-width: 768px){ 
    .ui.relaxed.grid.container {
        width: 98% !important;
        margin: 0 !important;
    }
}

</style>