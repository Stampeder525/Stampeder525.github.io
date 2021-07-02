<template>
    <div class="ui relaxed stackable grid container projectContainer">
        <slider ref="slider" :options="options" :direction="$mq | mq({mobile: 'vertical', tablet: 'horizontal'})">
            <slideritem v-for="(p, index) in projects" :key="index" class="projectCard">
                <div class="ui card"  @click.stop>
                    <div class="image">
                        <div class="projectLinks">
                            <a 
                                target="_blank" 
                                rel="noopener" 
                                v-for="l in p.links" 
                                :key="l.name" 
                                :href="l.url" 
                                :title="l.name"
                            >
                                <i class="linkIcon" :class="l.icon"></i>
                            </a>
                        </div>
                        <img :src="p.img"/>
                    </div>
                    <div class="content cardHeader">
                        <div>
                            <h2 :class="[($mq !== 'sm') && 'left floated']" class="header cardTitle">
                                <a :href="p.gitUrl" rel="noopener" target="_blank">{{ p.name }}</a>
                            </h2>
                            <div :class="[($mq !== 'sm') && 'right floated']" class="meta">
                                {{p.date}}
                            </div>
                        </div>
                        <div class="description">
                            {{p.description}}
                        </div>
                    </div>
                    <div class="extra centered content">
                        <div class="center aligned ui horizontal centered list">
                            <div v-for="t in p.tech" :key="t" class="item techStack">
                                {{t}}
                            </div>
                        </div>
                    </div>
                </div>
            </slideritem>
        </slider>
    </div>
</template>

<script>

import { slider, slideritem } from 'vue-concise-slider'
export default {
    name: 'ProjectsContentComponent',
    data () {
        return {
            projects: [
                {
                    name: "Evergreen Road",
                    links: [
                        {
                            name: 'Itch.io',
                            icon: 'fab fa-itch-io',
                            url: 'https://stampeder525.itch.io/evergreen-road'
                        }
                    ],
                    date: "2021",
                    img: "/src/assets/images/projects/evergreen.png",
                    description: "A retro PS1-style horror puzzle exploration game about finding your way home..",
                    tech: ["Unity"]
                },
                {
                    name: "Fröggo",
                    links: [
                        {
                            name: 'Itch.io',
                            icon: 'fab fa-itch-io',
                            url: 'https://stampeder525.itch.io/frggo'
                        }
                    ],
                    date: "2020",
                    img: "/src/assets/images/projects/froggo.png",
                    description: "A spooky twist on the classic game of Frogger.",
                    tech: ["Unity"]
                },
                {
                    name: "The Family",
                    links: [
                        {
                            name: 'Itch.io',
                            icon: 'fab fa-itch-io',
                            url: 'https://stampeder525.itch.io/the-family'
                        }
                    ],
                    date: "2020",
                    img: "/src/assets/images/projects/family.jpg",
                    description: "A point and click adventure about taking care of your target.",
                    tech: ["Unity"]
                },
                {
                    name: "The Cart Before the Horse",
                    links: [
                        {
                            name: 'Itch.io',
                            icon: 'fab fa-itch-io',
                            url: 'https://mannymallea.itch.io/the-cart-before-the-horse'
                        }
                    ],
                    date: "2020",
                    img: "/src/assets/images/projects/cartbeforehorse.png",
                    description: "A horse is loose in the market. Shop for your equestrian needs before animal control arrives!",
                    tech: ["Unity"]
                },
                {
                    name: "Flock Fighters",
                    links: [
                        {
                            name: 'Itch.io',
                            icon: 'fab fa-itch-io',
                            url: 'https://wsoft.itch.io/flock-fighters'
                        }
                    ],
                    date: "2018",
                    img: "/src/assets/images/projects/flockfighters.png",
                    description: "4 player Pikmin-style party game, but with chickens, and trust issues. Whoever hatches and sells the most chicks wins!",
                    tech: ["Unity"]
                },
                {
                    name: "Asteroid Trampoline",
                    links: [
                        {
                            name: 'Github',
                            icon: 'fab fa-github',
                            url: 'https://github.com/Stampeder525/Asteroid_Trampoline'
                        },
                    ],
                    date: "2018",
                    img: "/src/assets/images/projects/asteroidtrampoline.jpg",
                    description: "Defend earth with your trusty trampoline in this fast paced physics-based arcade game built in Unity3D!",
                    tech: ["Unity"]
                },
                {
                    name: "Lorenha.me",
                    links: [
                        {
                            name: 'Github',
                            icon: 'fab fa-github',
                            url: 'https://github.com/Stampeder525/Stampeder525.github.io'
                        },
                    ],
                    date: "2018",
                    img: "/src/assets/images/projects/lorenha.jpg",
                    description: "This website, built from the ground up in VueJS!",
                    tech: ["Vue JS"]
                },
                {
                    name: "Buddy",
                    date: "2018",
                    img: "/src/assets/images/projects/optumhack.jpg",
                    description: "A virtual pet who lives in your fitness tracker. Buddy's health mirrors yours - encouraging you to live healthy!",
                    tech: ["Unity", "React Native",  "Fitbit"]         
                },
                {
                    name: "TalkNess",
                    links: [
                        {
                            name: 'Github',
                            icon: 'fab fa-github',
                            url: 'https://github.com/ashwinGokhale/CapitalOneTwilio'
                        },
                    ],
                    date: "2017",
                    img: "/src/assets/images/projects/talkness.jpg",
                    description: "An sms chat bot for all your banking needs.",
                    tech: ["Twilio", "Python", "NLP"]
                },
                {
                    name: "Highlight",
                    links: [
                        {
                            name: 'Github',
                            icon: 'fab fa-github',
                            url: 'https://github.com/iRapha/cmd-f'
                        },
                    ],
                    date: "2015",
                    img: "/src/assets/images/projects/highlight.jpg",
                    description: "Harness the power of Cmd-F on real-life documents.",
                    tech: ["Swift", "Tesseract OCR"]
                }
            ],
            options: {
                currentPage: 0,
                tracking: false,
                thresholdDistance: 100,
                thresholdTime: 300,
                // loop:true,
                // infinite: 4,
                slidesToScroll: 1,
                // direction: //(this.$mq === 'mobile') ? 'vertical':'horizontal'
            },
        }
    },
    components: {
        slider,
        slideritem
    }
}
</script>

<style lang="scss">


.ui .card {
    text-align: left;
    min-height: 45vh;
    max-height: 60vh;
    margin-bottom: 2em;
    word-wrap: break-word;
    white-space: normal !important;
}

.linkIcon {
    text-shadow: 0 0 5px lightblue;
}

.projectCard {
    width: 100% !important;
    margin-right: 0;
    text-align: left;
}

.cardTitle {
    font-size: 0.5em !important;
    max-width: 80%;
}

.techStack {
    font-size: 0.2em;
    word-wrap: break-word;
}


.projectLinks {
    position: absolute;
    top: 3%;
    right: 2%;
}

.meta, .description {
    font-size: 0.3em !important;
}

.description {
    word-wrap: break-word;
}


.cardHeader {
    // width: 80%;
    word-wrap: break-word;
}

.content {
    padding: 0.2em 0.2em !important;
    p {
        color: black;
    }
}

a {
    color: rgb(56, 56, 56);
}

.ui .button {
    border: none !important;
}

.projectContainer {
        width: 100%;
        margin: 2em auto;
        height: 65vh;
    }

@media (min-width: 900px) {
    .ui .card {
        max-width: 20vw;
        margin-bottom: 0;
        min-height: 25vh;
    }

    .projectContainer {
        width: 100%;
        margin: 2em auto;
        height: 65vh;
        .row {
            height: 100%;
        }
    }

    .projectCard {
        width: 23.5% !important; //23.5
        margin-right: 2% !important;
        text-align: left;
    }
}


</style>