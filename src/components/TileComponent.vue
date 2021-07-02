<!-- TileComponent.vue -->
<template>

<div 
    class="tile" 
    @mouseenter="invertBackground" 
    @mouseleave="resetBackground" 
    :style="{
        backgroundImage: tileSelected ? 'url()':'url('+ tileImg +')', 
        backgroundColor: color, //tileSelected ? color : 'transparent', 
        cursor: tileSelected ? 'default':'pointer',
    }" 
    :class="{ tileDetails: tileSelected }"
>
    <div class="backButton" :class="[($mq === 'tablet') ? '':'hvr-float']" v-if="tileSelected" @click="shrinkTile()">
        <i class="ui big left arrow icon"></i>
        <p>Back</p>
    </div>
    <div class="banner" @click="expandTile()">
        <h1 class="title" :style="{ color: 'white'/*'tileSelected ? 'white' : color'*/ }">{{ name }}</h1>
        <div class="tileContent">
            <skills-content-component noselect v-if="name == 'What I use'"></skills-content-component>
            <experience-content-component v-if="name == 'Where I\'ve worked'"></experience-content-component>
            <projects-content-component v-if="name == 'What I\'ve made'"></projects-content-component>
            <about-content-component v-if="name == 'Who I am'"></about-content-component>
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
        "url",
        "color",
        "corner",
        "img",
        "alt",
    ],
    data () {
        return {
            tileSelected: false,
            tileImg: this.img,
            gradientColor: ''
        }
    },
    methods: {
        expandTile() {
            if(!this.tileSelected){
                // this.$router.push(this.url);
                this.tileSelected = true;
            }
        },
        shrinkTile(){
            this.tileSelected = false;
            setTimeout(50);
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
    height: 25%;
    border: 1px solid #3A9AA6;
    box-shadow: '1px 1px 3px #3A9AA6';
    background-size: cover;
    // background-size: 100px 100px;
    mix-blend-mode: hard-light;//luminosity; //hard-light //multiply
    background-repeat:   no-repeat;
    background-position: center center;

    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
    overflow: hidden;

    .banner {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
    }

    .title {
        position: absolute;
        z-index: 5;
        -webkit-transition: color 0.2s;
        -moz-transition:  color 0.2s;
        -o-transition:  color 0.2s;
        transition: color 0.2s;
        mix-blend-mode: unset !important;//luminosity; //hard-light //multiply
        //text-shadow: 2px 2px 4px #000000;
    }

    .tileContent {
        display: none;
    }

}

.tile:not(.tileDetails):hover {

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
    overflow-y: auto;
    mix-blend-mode: normal;
    border: none;
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
        width: 90%;
    }

    // .banner {
    //     overflow-y: scroll;
    // }

    .tileContent {
        display: block;
        position: absolute;
        bottom: 0;
        color: white;
    }

 }

 .backButton {
     cursor: pointer;
     z-index: 10;
     position: absolute;
     left: 2%;
     top: 5%;
     color: white;
 }

.bannerTopLeft {
    left: auto;
    top: 0;
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
    top: 25%;
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
    top: 50%;
    .banner .title{
        :not(.tileDetails) {
            width: 100%;
        }
        text-align: center;
    }

    .tileContent {
        top: 8em;
    }
}

.bannerBottomRight {
    left: auto;
    top: 75%;
    .banner .title{
        width: 100%;
        text-align: center;
    }  

    .tileContent {
        top: 8em;
    } 
}


@media (min-width: 900px) {

    .tile {
        z-index: 0;
        position: absolute;
        width: 50vw;
        height: 50%;

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
        height: 100%;
        overflow-y: hidden;

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

        .tileContent {
            display: block;
            position: absolute;
            color: white;
        }

        

    }

    
    // .banner .title.tileDetails {
    //     top: 0 !important;
    //     left: 0 !important;
    // }

    .bannerTopLeft {
        left: 0;
        top: 0;
        .banner .title{
            padding: 1.5%;
            right: 5%;
            bottom: 0;
            text-align: right;
        }


        .tileContent {
            top: 10%;
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
        left: 50%;
        top: 0;
        .banner .title{
            padding: 1.5%;
            left: 5%;
            bottom: 0;
            text-align: left;
        }

        .tileContent {
            top: 10%;
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
        left: 0;
        top: 50%;
        .banner .title{
            padding: 1.5%;
            right: 5%;
            top: 0;
            text-align: right;
            width: 100%;
        }

        .tileContent {
            top: 10%;
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
        left: 50%;
        top: 50%;
        .banner .title{
            padding: 1.5%;
            left: 5%;
            top: 0;
            text-align: left;
        }   

        .tileContent {
            top: 10%;
        } 
    }

    .bannerBottomRight.tileDetails {
        .banner .title{
            padding: 0;
            left: 6%;
            top: 3%;
            text-align: left;
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
}

</style>