(function(){
    /// INSERT HERE!!!!!!
//Enk Conversation
    var discussionTemplate = {
        identifier: 'enk',
        name: "Enk",
        default: {
            textBox: ["*unintelligible clicking*"],
            choices: {
                exit: "Uh, okay."
            }
        },
        offended: {
            textBox: ["*unintelligible clicking*"],
            choices: {
                exit: "You got it."
            }
        },
        tired: {
            textBox: ["*unintelligible clicking*"],
            choices: {
                exit: "Sure."
            }
        },
        // DAY ONE
        1: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "*nod*",
                    exit: "*unintelligible clicking*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["*unintelligible clicking*"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Ask if she can understand you",
                            exit: "Ignore her."
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
                    offend: "*unintelligible clicking*",
                    exit: "*unintelligible clicking*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["*unintelligible clicking*"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Ask if she knows why she’s here",
                            exit: "Ignore her."
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
                    offend: "*positive clicking*",
                    exit: "*unintelligible clicking*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["*unintelligible clicking*"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Ask if she thinks your jacket is cool",
                            exit: "Ignore her."
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
                    offend: "...",
                    exit: "*tired clicking*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["*unintelligible clicking*"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Ask if she knows who’s transmitting the signal",
                            exit: "Ignore her."
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
                    offend: "*happy clacking*",
                    exit: "*sad chittering*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["*unintelligible clicking*"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Ask if she thinks your whole outfit looks good",
                            exit: "Ignore her."
                        }
                    }
                ]
            }
        }
    };

    var NAME = "enk";
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