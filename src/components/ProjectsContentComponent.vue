<template>
    <div class="ui relaxed centered stackable grid container">
        <div class="ui row">
                <div class="ui three wide column" v-for="p in projects" :key="p.name">
                    <div class="ui card"  v-on:click.stop>
                        <a v-if="p.awards" class="medalIcon"><img src="/src/assets/images/projects/medal.png"></a>
                        <div class="image projectHeader" v-bind:href="p.demoUrl" rel="noopener" target="_blank">
                            <img v-bind:src="p.img">
                            <div class="projectHover">
                                <div class="projectLinks">
                                    <a target="_blank" rel="noopener" v-if="p.demoUrl" v-bind:href="p.demoUrl"><p>Demo</p></a>
                                    <a target="_blank" rel="noopener" v-bind:href="p.gitUrl"><i class="huge icon fab fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="content">
                            <div class="header"><a v-bind:href="p.gitUrl" rel="noopener" target="_blank">{{ p.name }}</a></div>
                            <p>{{ p.platform }}</p>
                            <p>{{ p.date }}</p>
                            <div class="ui mini images">
                                <img class="ui mini circular image" v-bind:title="t.name" v-for="t in p.tech" :key="t.name" v-bind:src="t.img">
                            </div>
                            <p v-if="p.awards" v-for="a in p.awards" :key="a.name"><i class="ui star outline icon"></i>{{a.sponsor}} award for {{a.name}}</p>
                            <div v-if="!p.expanded" class="description">{{ p.description }}</div>
                            <div v-if="p.expanded" class="description">{{ p.details }}</div>
                            <div v-if="!p.expanded" class="ui basic mini button" v-on:click="p.expanded = !p.expanded"><i class="angle down icon"></i>More</div>
                            <div v-if="p.expanded" class="ui basic mini button" v-on:click="p.expanded = !p.expanded"><i class="angle up icon"></i>Less</div>
                        </div>
                    </div>
                </div>
        </div>
        <!-- <div class="ui row">
            <div class="ui six wide right floated column">
                <div class="ui segment" v-on:click.stop>
                    <div class="ui header">Awards</div>
                    <div class="awards">
                        <div class="award" v-for="a in awards" :key="a.name">
                            <h4>{{a.award}}</h4>
                            <h4>{{a.project}}</h4>
                            <h5>Sponsored by {{a.sponsor}}</h5>
                            <h5>{{a.event}}</h5>
                            <h5>{{a.date}}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'ProjectsContentComponent',
    data () {
        return {
            projects: [
                {
                    name: "Asteroid Trampoline",
                    demoUrl: "/src/games/AsteroidTrampoline/index.html",
                    gitUrl: "https://github.com/Stampeder525/Asteroid_Trampoline",
                    platform: "Web Game",
                    date: "September 2018",
                    img: "/src/assets/images/projects/asteroidtrampoline.jpg",
                    description: "Protect earth in this fast paced physics-based arcade game built in Unity3D!",
                    details: "Protect earth in this fast paced physics-based arcade game built in Unity3D! \
                              Deflect asteroids hurtling towards the planet with a massive interplanetary space \
                              trampoline. Bounce them into each other to destroy them and score points.",
                    expanded: false,
                    hoverMsg: "Click to Play!",
                    tech: [
                        {
                            "name": "Unity",
                            "img": "/src/assets/images/logos/unity_logo.png"
                        }
                    ]
                },
                {
                    name: "HouseMate",
                    demoUrl: "",
                    gitUrl: "https://github.com/Stampeder525/HouseMate",
                    platform: "Mobile App",
                    date: "September 2017",
                    img: "/src/assets/images/projects/housemate.jpg",
                    description: "An automated chore wheel with financial incentives.",
                    details: "HouseMate solves the division of chores by distributing tasks to each resident daily, with \
                              a time limit to complete them. If failed, it will automatically pull money \
                              from their bank account into a house pool account, which can be used for renovations or events.",
                    expanded: false,
                    hoverMsg: "Git Repo",
                    tech: [
                        {
                            "name": "React Native",
                            "img": "/src/assets/images/logos/react_logo.png",
                        },
                        {
                            "name": "Nessie API",
                            "img" : "/src/assets/images/logos/nessie_logo.png"
                        }
                    ]
                },
                {
                    name: "TalkNess",
                    demoUrl: "",
                    gitUrl: "https://github.com/ashwinGokhale/CapitalOneTwilio",
                    platform: "Chat Bot",
                    date: "February 2017",
                    img: "/src/assets/images/projects/talkness.jpg",
                    description: "A texting chat bot for all your banking needs.",
                    details: "TalkNess is a banking text bot. \
                              Users no longer need to download a special app or call their bank to manage \
                              their account; now they can do so through their default texting app. \
                              Check your balance, transfer funds, find nearby ATMS, and more\!",
                    expanded: false,
                    hoverMsg: "Git Repo",
                    tech: [
                        {
                            "name": "Twilio",
                            "img": "/src/assets/images/logos/twilio_logo.png",
                        },
                        {
                            "name": "Nessie API",
                            "img" : "/src/assets/images/logos/nessie_logo.png"
                        },
                        {
                            "name": "Python",
                            "img" : "/src/assets/images/logos/python_logo.png"
                        }
                    ]
                },
                {
                    name: "Buzzword Bingo",
                    demoUrl: "/src/games/BuzzwordBingo/index.html",
                    gitUrl: "https://github.com/Stampeder525/buzzword_bingo",
                    demo: "",
                    platform: "Web App",
                    date: "June 2016",
                    img: "/src/assets/images/projects/buzzwordbingo.jpg",
                    description: "A multiplayer bingo game for meetings that go on too long.",
                    details: "Stuck in another corporate meeting? Did your boss just say \
                              'Synergy' again? Cool off with this online multiplayer bingo \
                              game, where each square is an overused buzzword.",
                    expanded: false,
                    hoverMsg: "Git Repo",
                    tech: [
                        {
                            "name": "Firebase",
                            "img" : "/src/assets/images/logos/firebase_logo.png"
                        },
                        {
                            "name": "jQuery",
                            "img": "/src/assets/images/logos/jquery_logo_2.png",
                        },
                    ]
                },
                // {
                //     name: "Pushup Ninja",
                //     demoUrl: "",
                //     gitUrl: "https://github.com/ronnoceel/pushup-ninja",
                //     platform: "Web App",
                //     date: "January 2016",
                //     img: "/src/assets/images/projects/pushupninja.jpg",
                //     description: "A pushup-tracking app using the Myo Armband.",
                //     details: "Push-Up Ninja is a web app that challenges users to complete \
                //               more push-ups to improve their score, \
                //               while tracking their stats and providing motivational \
                //               feedback.",
                //     expanded: false,
                //     hoverMsg: "Git Repo",
                //     tech: [
                //         {
                //             "name": "Myo",
                //             "img" : "/src/assets/images/logos/myo_logo.png"
                //         },
                //         {
                //             "name": "Javascript",
                //             "img": "/src/assets/images/logos/javascript_logo.png",
                //         },
                //     ]
                // },
                {
                    name: "Highlight",
                    demoUrl: "",
                    gitUrl: "https://github.com/iRapha/cmd-f",
                    platform: "iOS App",
                    date: "September 2015",
                    img: "/src/assets/images/projects/highlight.jpg",
                    description: "Harness the power of Cmd-F on real-life documents.",
                    details: "Highlight enables users to query physical documents \
                              with their smartphone cameras, highlighting the user's query on the page. \
                              If the app detects that the document is a book, it will direct the user \
                              to the appropriate page.",
                    expanded: false,
                    hoverMsg: "Git Repo",
                    tech: [
                        {
                            "name": "Swift",
                            "img": "/src/assets/images/logos/swift_logo.png",
                        },
                        {
                            "name": "Tesseract OCR",
                            "img" : "/src/assets/images/logos/google_logo.png"
                        }
                    ],
                    awards: [
                        {
                            "name": "Best Business Solution App Leveraging Open Source",
                            "sponsor": "Goldman Sachs"
                        }
                    ]

                },
            ],
            awards: [
                {
                    "project":"Confidential Project",
                    "award":"Second Place",
                    "sponsor":"OPTUM",
                    "date":"July 2018",
                    "event":"OPTUM Global Hackathon 2018"
                },
                {
                    "project":"Highlight",
                    "award":"Best Business Solution App Leveraging Open Source",
                    "sponsor":"Goldman Sachs",
                    "date":"September 2015",
                    "event":"MHacks 6"
                },

            ]
        }
    }
}
</script>

<style lang="scss">

.ui .card {
    min-height: 56vh;
    min-width: 12vw;
    width: 100%;
}

.projectHeader{
    background-color: black !important;
    .projectHover {
        display:none;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        .projectLinks {
            //position: relative;
            margin: 3em auto;
            text-align: center;

            a, i {
                color: white;
            }

            a p:hover, i:hover {
                color: #4183c4;
            }

            a p {
                font-size: 2em;
                font-weight: bold;
            }
        }
    }
    img {
        opacity: 1;
    }
}

// .projectHeader {
//     background-color: black !important;
// }

.projectHeader:hover {
    img {
        opacity: 0.3;
    } 
    .projectHover {
        display: block;
    }
}

.medalIcon {
    position: absolute;
    top:-15px;
    left: -15px;
    z-index: 2;
    width: 30%;
    padding: 0;
    margin: 0;
    img {
        width: 100%;
    }

}

.content p {
    color: black;
}

a {
    color: rgb(56, 56, 56);
}

.ui .button {
    border: none !important;
}

@media (min-width: 768px) {

}


</style>