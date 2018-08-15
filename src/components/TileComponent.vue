<!-- TileComponent.vue -->
<template>

<div class="tile" v-on:mouseenter="invertBackground" v-on:mouseleave="resetBackground" v-bind:style="{backgroundImage: tileSelected ? 'url()':'url('+ tileImg +')', backgroundColor: tileSelected ? color : 'transparent', cursor: tileSelected ? 'default':'pointer'}" v-bind:class="{ tileDetails: tileSelected }" v-on:click="toggleFrontBack()">
    <div class="banner">
        <h1 class="title" v-bind:style="{ color: tileSelected ? 'white' : color }">{{ name }}</h1>
        <div class="tileContent">
            <skills-content-component noselect v-if="name == 'What I use'"></skills-content-component>
            <experience-content-component v-if="name == 'Where I work'"></experience-content-component>
            <projects-content-component v-if="name == 'What I\'ve made'"></projects-content-component>
            <about-content-component v-if="name == 'Who I am'"></about-content-component>
        </div>
        <div v-if="tileSelected && $mq != 'sm'" class="footer">
                <div class="helpMessage">
                    <p class="footerText">Click anywhere to return</p>
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
        "corner",
        "img",
        "alt",
    ],
    data () {
        return {
            tileSelected: false,
            animating: false,
            tileImg: this.img
        }
    },
    methods: {
        toggleFrontBack() {
            this.animating = true;
            this.tileSelected = !this.tileSelected;
            this.animating = false;
        },
        invertBackground() {
            this.tileImg = this.alt;
        },
        resetBackground() {
            this.tileImg = this.img;
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
    background-size: cover;
    background-repeat:   no-repeat;
    background-position: center center;

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

    //background-color: rgb(240, 239, 239) !important;
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
        width: 49vw;
        height: 49vh;

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
        left: 0.5%;
        top: 0.5%;
        .banner .title{
            padding: 1.5%;
            right: 0;
            bottom: 0;
            text-align: right;
        }

        .tileContent {
            top: 5em;
        } 
    }

    .bannerTopLeft.tileDetails {
        .banner .title{
            padding: 0;
            right: 3%;
            bottom: 3%;
            text-align: right;
        }
    }

    .bannerTopRight {
        left: 50.5%;
        top: 0.5%;
        .banner .title{
            padding: 1.5%;
            left: 0;
            bottom: 0;
            text-align: left;
        }

        .tileContent {
            top: 5em;
        } 
    }

    .bannerTopRight.tileDetails {
        .banner .title{
            padding: 0;
            left: 3%;
            bottom: 3%;
            text-align: left;
        }

    }

    .bannerBottomLeft {
        left: 0.5%;
        top: 50.5%;
        .banner .title{
            padding: 1.5%;
            right: 0;
            top: 0;
            text-align: right;
        }

        .tileContent {
            top: 8em;
        } 
    }

    .bannerBottomLeft.tileDetails {
        .banner .title{
            padding: 0;
            right: 3%;
            top: 3%;
            text-align: right;
        }
    }

    .bannerBottomRight {
        left: 50.5%;
        top: 50.5%;
        .banner .title{
            padding: 1.5%;
            left: 0;
            top: 0;
            text-align: left;
        }   

        .tileContent {
            top: 8em;
        } 
    }

    .bannerBottomight.tileDetails {
        .banner .title{
            padding: 0;
            left: 3%;
            top: 3%;
            text-align: left;
        }  
    }
}

</style>