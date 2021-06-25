<template>
    <div class="ui container">
        <clazy-load noselect v-bind:src="splashImg">
            <div noselect class="ui left floated image">
                <img noselect class="splash" v-bind:src="splashImg">
            </div>
            <div class="loader" slot="placeholder"><i class="notched circle loading icon"></i></div>
        </clazy-load>
        <div class="ui grid">
            <div class="row descriptorRow">
                <div class="ui right floated twelve wide column">
                    <div class="descriptors">
                        <h2 v-for="d in descriptors" :key="d">{{ d }}</h2>
                    </div>
                </div>
            </div>
            <div class="row aboutme">
                <div class="ui right floated ten wide column">
                    <p v-html="p" v-for="p in description" :key="p" v-on:click.stop>{{ p }}</p>
                </div>
            </div>
            <div class="row resume">
                <div class="ui right floated ten wide column">
                    <a href="/src/assets/documents/resume.pdf" target="_blank" rel="noopener" class="ui button">Resume</a>
                </div>
            </div>
            <!-- <div class="row contact">
                <div class="ui right floated ten wide column">
                    <h3>Get in touch</h3>
                    <form class="ui small form" action="https://formspree.io/lorenheubertaubry@gmail.com" method="POST" v-on:click.stop>
                        <div class="required field" style="display:inline-block;">
                            <label>Name</label>
                            <input name="name" placeholder="Jane Doe" type="text">
                        </div>
                        <input type="hidden" name="_subject" value="Your site visitor has sent you a message!" />
                        <div class="required field" style="display:inline-block;">
                            <label>Email</label>
                            <input name="_replyto" placeholder="janedoe@email.com" type="email">
                        </div>
                        <div class="required field">
                            <label>Message</label>
                            <textarea name="message" placeholder="Write a message here!" rows="2"></textarea>
                        </div>
                        <div class="ui success message">
                            <div class="header">Message Sent!</div>
                        </div>
                        <input type="hidden" name="_next" value="https://lorenha.me" />
                        <input type="text" name="_gotcha" style="display:none" value="gotcha!" />
                        <button type="submit" class="ui submit button">Submit</button>
                    </form>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutContentComponent",
    data() {
        return {
            splashImg: "/src/assets/images/about/loren_expanded_sky.png",
            descriptors: [
                "Loren Heubert-Aubry.",
                "Full Stack Engineer,",
                "Designer,",
                "Game Developer.",
            ],
            description: ["Hi there! I'm a software engineer with a Bachelor's in Information & Computer Science from the University of Michigan, class of 2018.", 
                          "I'm a strong believer in knowing my products holistically from blueprint to customer — to understand the back end infrastructure, \
                          but also the space it occupies. How will people use this? Why? How will it work, how will it look, and \
                          what implications will it have for the people who use it?", "When I'm not at work, you can find me \
                          hiking, gaming, or writing <a href=\"https://wholewheatpost.com/\" \
                          rel=\"noopener\" target=\"_blank\" style=\"color: white; text-decoration: underline\">online satire.</a>"
                          ],
            contact: {
                name: "",
                email: "",
                message: ""
            },
            isSending: false
        }
    },
    methods: {
        clearForm() {
			for (let field in this.contact) {
				this.contact[field] = ''
			}
        }
    }
}
</script>

<style lang="scss" scoped>
//@import url('https://fonts.googleapis.com/css?family=family=Open+Sans:300');

#about {
    .container {
        width: 93%;
        height: 85vh;
        //margin-right: 5.5em!important;
    }

    .splash, .ui.left.floated.image {
        margin: 0;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .ui.left.floated.image {
        position:fixed;
        left: 0;
        bottom: 0;
    }

    .descriptors {
        width: 100%;
        margin-bottom: 2%;

        h2 {
            font-size: 2.3em;
            color: white;
            display: inline-block;
            padding-right: 0.5em;
            z-index: 2;
        }
    }

    .aboutme {
        padding-top: 0 !important;
    }

    .resume {
        margin-top: 2em;
        margin-bottom: 3em !important;
    }

    .descriptorRow {
        padding-bottom: 0 !important;
        padding-top: 0 !important;
        text-align: right;
    }

    h2 {
        margin: 0;
    }

    p {
        font-size: 1.4em;
    }

    p, label {
        font-family: 'Open Sans', sans-serif;
        font-weight: 0 !important;
    }

    .grid {
        margin-left: -5em!important;
        //margin-right: 0;
    }

    .loader {
        position: absolute;
        left: 50%;
        top: 50%;
    }

    .ui.left.floated.ten.wide.column {
    padding-left: 0;
    margin-bottom: 0.5em;
    }

    .row {
        padding-bottom: 0;
    }
    .form {
        width: 65%;
        label {
            color: white !important;
        }
    }

    textarea {
        resize: none;
    }

    .contact {
        margin-top: 2em;
        margin-bottom: 3em !important;
    }
}

@media (min-width: 768px) {
    #about{
        .grid {
            margin-left: 0!important;
            //margin-right: 0;
        }
    }
}



</style>