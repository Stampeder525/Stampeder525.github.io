<template>
    <div class="ui relaxed centered stackable grid container">
        <div class="ui row">
                <div class="ui three wide column" v-for="p in projects" :key="p.name">
                    <div class="ui card"  v-on:click.stop>
                        <a class="image" v-bind:href="p.url" rel="noopener" target="_blank">
                            <img v-bind:src="p.img">
                        </a>
                        <div class="content">
                            <div class="header"><a v-bind:href="p.url" rel="noopener" target="_blank">{{ p.name }}</a></div>
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
                    name: "HouseMate",
                    url: "https://github.com/Stampeder525/HouseMate",
                    platform: "Mobile App",
                    date: "September 2017",
                    img: "/src/assets/images/projects/housemate.jpg",
                    description: "An automated chore wheel with financial incentives.",
                    details: "HouseMate solves the division of chores by distributing tasks to each resident daily, with \
                              a time limit to complete them. If failed, it will automatically pull money \
                              from their bank account into a house pool account, which can be used for renovations or events.",
                    expanded: false,
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
                    url: "https://github.com/ashwinGokhale/CapitalOneTwilio",
                    platform: "Chat Bot",
                    date: "February 2017",
                    img: "/src/assets/images/projects/talkness.jpg",
                    description: "A texting chat bot for all your banking needs.",
                    details: "TalkNess is a banking text bot. \
                              Users no longer need to download a special app or call their bank to manage \
                              their account; now they can do so through their default texting app. \
                              Check your balance, transfer funds, find nearby ATMS, and more\!",
                    expanded: false,
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
                    url: "https://github.com/Stampeder525/buzzword_bingo",
                    demo: "",
                    platform: "Web App",
                    date: "June 2016",
                    img: "/src/assets/images/projects/buzzwordbingo.jpg",
                    description: "A multiplayer bingo game for meetings that go on too long.",
                    details: "Stuck in another corporate meeting? Did your boss just say \
                              'Synergy' again? Cool off with this online multiplayer bingo \
                              game, where each square is an overused buzzword.",
                    expanded: false,
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
                {
                    name: "Pushup Ninja",
                    url: "https://github.com/ronnoceel/pushup-ninja",
                    platform: "Web App",
                    date: "January 2016",
                    img: "/src/assets/images/projects/pushupninja.jpg",
                    description: "A pushup-tracking app using the Myo Armband.",
                    details: "Push-Up Ninja is a web app that challenges users to complete \
                              more push-ups to improve their score, \
                              while tracking their stats and providing motivational \
                              feedback.",
                    expanded: false,
                    tech: [
                        {
                            "name": "Myo",
                            "img" : "/src/assets/images/logos/myo_logo.png"
                        },
                        {
                            "name": "Javascript",
                            "img": "/src/assets/images/logos/javascript_logo.png",
                        },
                    ]
                },
                {
                    name: "Highlight",
                    url: "https://github.com/iRapha/cmd-f",
                    platform: "iOS App",
                    date: "September 2015",
                    img: "/src/assets/images/projects/highlight.jpg",
                    description: "Harness the power of Cmd-F on real-life documents.",
                    details: "Highlight enables users to query physical documents \
                              with their smartphone cameras, highlighting the user's query on the page. \
                              If the app detects that the document is a book, it will direct the user \
                              to the appropriate page.",
                    expanded: false,
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
    min-height: 53vh;
    min-width: 12vw;
    width: 100%;
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