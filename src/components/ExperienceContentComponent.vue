<template>
    <div class="jobView">
        <div class="ui relaxed stackable grid container">
            <div 
                class="ui column" 
                :class="$mq | mq({ 
                    mobile: 'ten wide', 
                    laptop: 'four wide'
                })"
            >
                <div 
                    class="ui secondary pointing menu" 
                    :class="$mq | mq({ 
                        mobile: 'horizontal',
                        laptop: 'vertical'
                    })">
                    <a 
                        class="item white" 
                        v-for="j in jobs" 
                        :key="j.id"
                        :id="j.id"
                        @click="e => selectJob(e)"
                        :class="selectedJob.id == j.id && 'active'"
                    >
                        {{j.company.toUpperCase()}}
                    </a>
                </div>
            </div>
            <div class="ui eight wide column grid">
                <h2 class="ui header white verticalMargin0">{{selectedJob.position}}</h2>
                    <div class="verticalMargin0">
                        <h2 class="ui medium white header verticalMargin0 jobCompany">
                            <a 
                                :href="selectedJob.url" 
                                target="_blank" 
                                rel="noopener"
                                :title="selectedJob.company" 
                            >
                                {{selectedJob.company}}
                            </a>, 
                            <span class="jobDates">{{selectedJob.dates}}</span></h2> 
                    </div>
            <div class="ui row">
                    <div class="ui list">
                        <div 
                            class="item"
                            v-for="(p, index) in selectedJob.description"
                            :key="index"
                        >
                            <i class="icon caret right"></i>
                            <div class="content descriptionText">{{p}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ExperienceContentComponent',
    data () {
        return {
            selectedJob: {},
            jobs: [
                {
                    id: 0,
                    company: "Optum",
                    url: "https://www.optum.com/",
                    position: "Software Engineer",
                    location: "Boston, MA",
                    dates: "June 2019 - Present",
                    description: ["Develop front-end features and automated tests for online insurance plan testing platform in React, \
                                    allowing readiness teams to prepare customers for peak season.", "Leading implementation of full \
                                    accessibility audits on production-ready code throughout organization, targeting 100% compliance \
                                    with WCAG 2.0.", "Leveraged Golang to create early notification center server pipeline and API, \
                                    allowing customers to receive regular updates on the status of their testing members and plans.", 
                                    "Developed features for internal claims processing engine in Java, reducing feature time to deploy by 15%."]
                },
                {
                    id: 1,
                    company: "CHEPS",
                    url: "https://cheps.engin.umich.edu/",
                    position: "Software Engineer",
                    location: "Boston, MA",
                    dates: "September 2018 - December 2018",
                    description: ["Led full-stack development in React, NodeJS, and MySQL Database to create web application for tracking surgical \
                    instrument cleanliness.", "Led ground-up UX redesign for surgical instruments application to better fit with hospital staff  \
                    mental models.", "Leveraged design thinking to oversee user testing sessions and create hand-made paper prototypes.",
                    "Implemented design documentation plan and wrote project reports, reducing future onboarding time by over 90%."]
                },
                {
                    id: 2,
                    company: "Optum",
                    url: "https://www.optum.com/",
                    position: "Software Development Intern",
                    location: "Boston, MA",
                    dates: "June-August 2016, June-August 2017, May-August 2018",
                    description: ["Managed development of custom Kibana plugin using AngularJS and jQuery to enrich and extend data-analysis \
                                    capabilities for the team.", "Worked with Elastic vendors to discuss integration of custom plugin into core product.",
                                    "Led team as Scrum Master, keeping teammates on task using Trello, running PIs, and managing product owner \
                                    expectations.", "Developed behavioral logic and main interface for internal project using gamified design and \
                                    wearable technology to encourage maintenance of chronic conditions among children. Won 2nd place at the 2018 Optum \
                                    Global Hackathon. Collaborated with legal team to write and submit patent application."]
                },
            ],
        }
    },
    mounted() {
        this.selectedJob = this.jobs[0];
    },
    methods: {
        selectJob(event) {
            const job = this.jobs.find(j => j.id == event.target.id);
            this.selectedJob = job;
        }
    },
}
</script>

<style lang="scss">

#work {

    .menu, .active {
        border-left-style: none;
        border-left-width: 0px;
        border-right: none !important;


        :active {
            border-left-style: none;
            border-left-width: 0px;
            border-color: white;
        }
    }

    .active {
        border-color: white;
        outline-offset: -3px;
    }

    .menu {
        border-left-color: rgba(34,36,38,.15);
    }

    .white {
        color: white;
    }

    .jobView {
        margin-top: 10%;
        margin-right: 5%;
        margin-left: 5%;
    }

    .verticalMargin0 {
        margin-bottom: 0 !important;
        margin-top: 0 !important;
        padding: 0 !important;

    }

    .jobCompany {
        a {
            color: white;
        }

        a:hover {
           text-decoration: underline !important;
        }
    }

    .jobDates {
        font-size: 0.8em;
        margin-left: 1em;
    }

    .descriptionText {
        font-size: 1.1em;
    }
}


@media (min-width: 900px) {
    #work {
        // .grid {
        //     margin: 0 1 !important;
        // }

        .menu, .active {
            border-right: none !important;
            border-left-style: solid;
            border-left-width: 2px;

            :active {
                border-right: none !important;
                border-color: white;
                border-left-style: solid;
                border-left-width: 2px;
                outline-offset: 3px;
            }
        }
    }

}

    
</style>