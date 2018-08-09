<!-- TileComponent.vue -->
<template>

<div class="tile" v-bind:style="{backgroundColor: tileSelected ? color :  'transparent', cursor: tileSelected ? 'default':'pointer', borderColor: color}" v-bind:class="{ tileDetails: tileSelected }" v-on:click="toggleFrontBack()">
    <div class="banner">
        <h1 class="title" v-bind:style="{ color: tileSelected ? 'white' : color }">{{ name }}</h1>
        <div class="tileContent">
            <skills-content-component v-if="name == 'What I use'"></skills-content-component>
            <experience-content-component v-if="name == 'Where I work'"></experience-content-component>
            <projects-content-component v-if="name == 'What I\'ve made'"></projects-content-component>
            <about-content-component v-if="name == 'Who I am'"></about-content-component>
        </div>
        <div v-if="tileSelected, $mq != 'sm'" class="footer">
            <div class="ui centered grid">
                <div class="ui six wide centered column helpMessage">
                    <p class="footerText">Click anywhere to return</p>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import SkillsContentComponent from './SkillsContentComponent.vue';
import ExperienceContentComponent from './ExperienceContentComponent';
import ProjectsContentComponent from './ProjectsContentComponent';
import AboutContentComponent from './AboutContentComponent';

export default {
    name: 'TileComponent',
    props: [
        "name",
        "color",
        "description",
        "corner",
        "icon"
    ],
    data () {
        return {
            tileSelected: false,
            animating: false
        }
    },
    methods: {
        toggleFrontBack() {
            this.animating = true;
            this.tileSelected = !this.tileSelected;
            this.animating = false;
        }
    },
    components: {
        SkillsContentComponent,
        ExperienceContentComponent,
        ProjectsContentComponent,
        AboutContentComponent
    }
}
</script>

<style lang="scss">

.tile {
    z-index: 0;
    position: absolute;
    width:100vw;
    height: 25vh;
    //border: 2em solid;

    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;

    .banner {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .title {
        position: absolute;
        -webkit-transition: color 0.2s;
        -moz-transition:  color 0.2s;
        -o-transition:  color 0.2s;
        transition: color 0.2s;
    }

    .tileContent {
        display: none;
    }

}

.tile:not(.tileDetails):hover {
    //border: 2px solid;

    background-color: rgb(240, 239, 239) !important;
    h1 {
        font-weight: bolder !important;
        opacity: 100 !important;
    }
}

.tileDetails {
    position: absolute;
    z-index: 2;
    top: 0 !important;
    left: 0 !important;
    width:100vw;
    height: 100vh;
    //border: none;

    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    
    .title {
        padding-top: 5%;
        padding-bottom: 0;
        color: white;

        -webkit-transition: color 0.2s;
        -moz-transition:  color 0.2s;
        -o-transition:  color 0.2s;
        transition: color 0.2s;
    }

    .banner {
        overflow-y: scroll;
    }

    .tileContent {
        display: block;
        position: absolute;
        bottom: 0;
        //top: 15vh;
        //left: 7%;
        //height: 70vh;
        color: white;
    }

 }

.bannerTopLeft {
    left: auto;
    top: 1%;
    .banner .title{
        width: 100%;
        text-align: center;
    }

    .tileContent {
        top: 8em;
    }
}

.bannerTopRight {
    left: auto;
    top: 26%;
    .banner .title{
        width: 100%;
        text-align: center;
    }

    .tileContent {
        top: 10em;
    }
}

.bannerBottomLeft {
    left: auto;
    top: 51%;
    .banner .title{
        width: 100%;
        text-align: center;
    }

    .tileContent {
        top: 10em;
    }
}

.bannerBottomRight {
    left: auto;
    top: 76%;
    .banner .title{
        width: 100%;
        text-align: center;
    }  

    .tileContent {
        top: 8em;
    } 
}

.ui.grid > * {
    padding: 0 !important;
}


@media (min-width: 768px) {

    .tile {
        z-index: 0;
        position: absolute;
        width: 48vw;
        height: 48vh;

        .banner {
            position: absolute;
            height: 100%;
            width: 100%;

            overflow: hidden;
        }

        .title {
            position: absolute;
        }

        .tileContent {
            display: none;
        }

    }

    .tileDetails {
        position: absolute;
        z-index: 2;
        top: 0 !important;
        left: 0 !important;
        width:100vw;
        height: 100vh;

        -webkit-transition: all 0.2s;
        -moz-transition: all 0.2s;
        -o-transition: all 0.2s;
        transition: all 0.2s;
        
        .title {
            padding-top: 0;
            padding-bottom: 0;
            color: white;

            -webkit-transition: color 0.2s;
            -moz-transition:  color 0.2s;
            -o-transition:  color 0.2s;
            transition: color 0.2s;
        }

        // .banner {
        //     overflow-y: scroll;
        // }

        .tileContent {
            display: block;
            position: absolute;
            //top: 15vh;
            //left: 7%;
            //height: 70vh;
            color: white;
        }

    }

    .bannerTopLeft {
        left: 1%;
        top: 1%;
        .banner .title{
            right: 3%;
            bottom: 3%;
            text-align: right;
        }

        .tileContent {
            top: 5em;
        } 
    }

    .bannerTopRight {
        left: 51%;
        top: 1%;
        .banner .title{
            left: 3%;
            bottom: 3%;
            text-align: left;
        }

        .tileContent {
            top: 5em;
        } 
    }

    .bannerBottomLeft {
        left: 1%;
        top: 51%;
        .banner .title{
            right: 3%;
            top: 3%;
            text-align: right;
        }

        .tileContent {
            top: 8em;
        } 
    }

    .bannerBottomRight {
        left: 51%;
        top: 51%;
        .banner .title{
            left: 3%;
            top: 3%;
            text-align: left;
        }   

        .tileContent {
            top: 8em;
        } 
    }
}

</style>