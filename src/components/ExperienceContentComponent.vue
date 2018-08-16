<template>
    <div class="ui relaxed stackable grid container">
        <div class="ui row">
            <div class="ui twelve wide column">
                <h1 style="padding:0">I am currently: <span class="employmentStatus">{{ employmentStatus }}</span></h1>
                <h2 style="padding-bottom: 0.5em">Previously, I've worked at:</h2>
            </div>
        </div>
        <div v-for="j in jobs" :key="j.id" class="ui row">
            <div class="ui eleven wide column">
                <div class="ui stackable grid">
                    <div class="ui row">
                        <div class="ui five wide column">
                            <div class="companyName">
                                <a v-bind:href="j.url" target="_blank" rel="noopener"><h1 class="companyName">{{j.company}}</h1></a>
                            </div>
                        </div>
                        <div class="jobDetails ui eight wide column">
                            <div class="ui list">
                                <div class="item">
                                    <i class="id badge outline icon"></i>
                                    <div class="content">
                                        {{j.position}}
                                    </div>
                                </div>
                                <div class="item">
                                    <i class="marker icon"></i>
                                    <div class="content">
                                        {{j.location}}
                                    </div>
                                </div>
                                <div class="item">
                                    <i class="calendar outline icon"></i>
                                    <div class="content">
                                        {{j.dates}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-on:click.stop class="ui row description">
                        <div class="ui twelve wide column">
                            <p v-for="p in j.description" :key="p">{{p}}</p>
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
            employmentStatus: "looking for a job",
            jobs: [
                {
                    id: 0,
                    company: "OPTUM",
                    url: "https://www.optum.com/",
                    position: "Software Development Intern",
                    location: "Boston, MA",
                    dates: "June-August 2016, June-August 2017, May-August 2018",
                    img: "/src/assets/images/experience/optum_office.png",
                    expanded: false,
                    description: ["At OPTUM, I and my team won second-place at the 2018 OPTUM Global Hackathon \
                                  (First-place at Boston office) for a confidential internal project \
                                  designed to encourage proper health maintenance among children using wearable technology and gamified design. \
                                  I was responsible for the initial idea, main interface, and back end logic, implemented in Unity3D.", 
                                  "While working on company projects, I created front-end interfaces using markup, Angular, and jQuery. On the back \
                                  end, I accessed, joined, and enriched data tables to feed into ElasticSearch with Pig and Hive. \
                                  I also briefly led my team as Scrum Master, keeping teammates on task, planning meetings, and facilitating \
                                  talks with product owners."]
                },
            ]
        }
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=family=Open+Sans:300');

.pastExperience {
    border: 4px solid white;
    border-radius: 10px;
    height: 100%;
    width: 50%;
}

.tileContent {
    position: relative;
    width: 100%;

    .detailsButton {
        z-index: 2;
        position:absolute;
        bottom:0;
        display: inline-block;
        min-height: 1em;
        width: 10em;
        cursor: pointer;

        i {
            display: inline-block;
            margin-bottom: 0.5em !important;
        }

        h2 {
            opacity: 0;
            display: inline-block;
            padding-bottom: 0;

            -webkit-transition: opacity 0.2s;
            -moz-transition: opacity 0.2s;
            -o-transition: opacity 0.2s;
            transition: opacity 0.2s;
        }
    }

    .more {
        left: 0;
    }

    .less {
        right: 0;
        height: 100%;
    }

    .detailsButton:hover h2 {
        opacity: 100;
    }

}

.ui.list {
    margin-top: 1.5em !important;
}

.companyName {
    width: 100%;
    a{
        color: white;
    }
    h1 {
        font-size: 5em;
        padding: 0 !important;
    }
}

.item, .description {
    font-family: 'Open Sans', sans-serif;

    p {
        font-size: 1.4em;
    }
}

.description {
    margin-top: 2% !important;
}

.expander{
    .four.wide.column {
        height: 100%;
    }
}

.jobDetails {
    margin-left: 2%;
}

.employmentStatus {
    font-weight: bold;
    color: lightgreen;
}

.icon {
    margin: 0 !important;
}

.officeImg {
    height: 100%;
    position:absolute;
    right:0;
    top:0;
    img {
        //width: 100%;
        height: 100% !important;
    }
}

    
</style>