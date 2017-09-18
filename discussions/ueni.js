(function(){
    /// INSERT HERE!!!!!!
    //Ueni Conversation
    var discussionTemplate = {
        identifier: 'ueni',
        name: "Ueni",
        default: {
            textBox: ["Hello there","How is your day going?"],
            choices: {
                exit: "Goodbye"
            }
        },
        offended: {
            textBox: ["I-I.....","U-um.....", "..."],
            choices: {
                exit: "Sorry"
            }
        },
        tired: {
            textBox: ["Please, be letting me have sleep.","I’m sorry. There is no more that I have to say."],
            choices: {
                exit: "Alright"
            }
        },
        // DAY ONE
        1: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Oh, I am... so very scared!",
                    exit: "O-oh! Okay.!"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Oh, no! Oh, no! This is being a very bad situation!"],
                        choices: {
                            next: "Ask what they want",
                            unlock: false,
                            offend: false,
                            exit: "Tell them to be quiet"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Oh! I do not want to go into a jail! We are not crime-doers!"],
                        choices: {
                            next: "Tell them to explain",
                            unlock: false,
                            offend: "Tell them it isn't up to you",
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["The Commissioners are the crime-doers! Please do not let us be given up to them!"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell them it isn't up to you",
                            exit: "Tell them you'll see what you can do"
                        }
                    }

                ]
            }

        },

        // DAY TWO
        2: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "You are wrong!",
                    exit: "O-okay"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Oh! Oh, no!"],
                        choices: {
                            next: "Ask what someone like them is doing with the Insurgents",
                            unlock: false,
                            offend: false,
                            exit: "Tell them to be quiet"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Insurgents fight for what is right! We fight for the cause! "],
                        choices: {
                            next: "What cause?",
                            unlock: false,
                            offend: "The Insurgents are criminals.",
                            exit: false
                        }
                    },
                    {
                        // Third statement
                        textBox: ["We fight for those who have been done harm by those who are with the Commissioners!"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Defend IJC",
                            exit: "Agree"
                        }
                    }
                ]
            }
        },


        // DAY THREE
        3: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Oh! Oh, no!",
                    exit: "Oh! I am s-sorry."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["The Insurgents will not be letting us be going into a jail!"],
                        choices: {
                            next: false,
                            unlock: "Ask how they’re sure",
                            offend: "Tell them they’re going to die",
                            exit: "Tell them to be quiet"
                        }
                    }
                ]
            },
            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Oh! Of course. It is as I have said. If we are being done harm, then we will also be doing you harm.",
                    exit: "Oh, yes! They will come! They will come!"
                },
                steps: [
                    {
                        textBox: ["The Insurgents will come for us. If we are done harm, they will do you harm."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell them the Insurgents are violent",
                            exit: "Agree"
                        }
                    }
                ]
            }
        },




        // FOURTH DAY
        4: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "They would never let that happen!",
                    exit: "O-of course not. H-how could I!?"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Oh, oh..."],
                        choices: {
                            next: "Ask if they know who is transmitting the signal.",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Signal? Oh! Oh! They are coming for us!"],
                        choices: {
                            next: false,
                            unlock: "Give him a few minutes to decide",
                            offend: "Tell them they IJC will get there first",
                            exit: "Ask if they sent the signal"
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "The Insurgents will prevail",
                    exit: "Well, I will not keep you from you work"
                },
                steps: [
                    {
                        textBox: ["They will be coming for us! And they will be coming for you! Will you be come on with the Insurgents? Or will you perish with the Commissioners?"],
                        choices: {
                            next: "Tell them you may join the Insurgents",
                            unlock: false,
                            offend: "Tell them the IJC will take care of them",
                            exit: "Tell them you have a job to do"
                        }
                    },
                    {
                        textBox: ["Oh that is most joyous news!"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell him you were kidding",
                            exit: "Agree"
                        }
                    }
                ]
            }
        },


        // FIFTH
        5: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "O-okay",
                    exit: "I am hoping that you have done the correct choice."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Have you made a decision"],
                        choices: {
                            next: false,
                            unlock: "No",
                            offend: false,
                            exit: "Yes"
                        }
                    }
                ]
            },
            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "O-oh. I am sorry",
                    exit: "Something that is of most importance, that is for certain. The Insurgents will take it to ones who need."
                },
                steps: [
                    {
                        textBox: ["You have not made your decision as of yet?"],
                        choices: {
                            next: "Tell them you may join the Insurgents",
                            unlock: false,
                            offend: "Tell them to be quiet",
                            exit: "Ask if they know what is in the cargo"
                        }
                    }
                ]
            }
        }
    };

    var NAME = "ueni";
    discussionTemplate.identifier = NAME;
    discussionTemplate.name = "Ueni";
    discussionTemplate.status = {
        isOffended: false,
        isTired: false,
        isUnlocked: false
    };
    discussionManager.discussions[NAME] = discussionTemplate;
    gameManager.setEvent(gameManager.eventNames.nextDay, function(){
        discussionManager.discussions[NAME].status.isOffended = false;
        discussionManager.discussions[NAME].status.isTired = false;
        discussionManager.discussions[NAME].status.isUnlocked = false;
    });
})();