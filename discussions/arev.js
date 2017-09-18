(function(){
    /// INSERT HERE!!!!
    //Arev Conversation
    var discussionTemplate = {
        default: {
            textBox: ["Greetings, va.","What is it, va?","Do you have any news, va?"],
            choices: {
                exit: "Goodbye"
            }
        },
        offended: {
            textBox: ["I won’t talk until you bring my jacket!","Rrgh!"],
            choices: {
                exit: "I cannot give you your jacket"
            }
        },
        tired: {
            textBox: ["I have nothing left to say, va","I’m not up to it right now, va","I’m tired, va. Perhaps I’d be more rested if you were to bring me my jacket, va"],
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
                    offend: "Fine! Then leave me alone, va",
                    exit: "Okay then"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Hey, can I ask you something, va?"],
                        choices: {
                            next: "Ask what they want",
                            unlock: false,
                            offend: false,
                            exit: "Tell them you can’t talk right now"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["It is rather cold in here. Can you bring me my jacket, va?"],
                        choices: {
                            next: "Ask why they need it",
                            unlock: false,
                            offend: "Refuse",
                            exit: "Tell them you’re sorry, but you can’t"
                        }
                    },
                    {
                        //Third statement
                        textBox: ["I just need my jacket. I don’t think you understand, va."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Refuse",
                            exit: "Tell them you’re sorry, but you can’t"
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
                    offend: "Rrgh!",
                    exit: "I need that jacket, va"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Can’t you just bring my jacket, va? "],
                        choices: {
                            next: "Ask why they need it so badly",
                            unlock: false,
                            offend: "Tell them to stop asking",
                            exit: "Ignore"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Before the jacket was mine, it belonged to my big brother, va."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell them to stop asking",
                            exit: "Tell them your answer is still no"
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
                    offend: "While tearing through the jacket, an IJC badge falls out of the lining",
                    exit: "In the jacket lining you find a hidden pocket with an IJC badge inside"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["That jacket was given to me after my big brother died. Just let me have it, va."],
                        choices: {
                            next: "Ask why they need to jacket so badly.",
                            unlock: false,
                            offend: "Go destroy the jacket so he shuts up",
                            exit: "Go check the jacket"
                        }
                    },
                    {
                        // Second statement
                        textBox: [" I need to keep that jacket safe. My big brother put a very expensive lining in that jacket. Just look at it and you’ll see, va!"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Rip up the jacket",
                            exit: "Check the jacket's lining"
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
                    offend: "I don't like your tone, va. Leave me be",
                    exit: "Then you understand what you need to do, va"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Do you understand why I need the jacket now, va?"],
                        choices: {
                            next: "Ask if they know what’s in the cargo",
                            unlock: false,
                            offend: "Tell them they’re a traitor",
                            exit: "Tell them you understand"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["I'm not sure I should tell you, va"],
                        choices: {
                            next: false,
                            unlock: "Give him a few minutes to decide",
                            offend: "Demand answer",
                            exit: false
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "I'm one of the good guys, va",
                    exit: "Makes sense, doesn't it, va?"
                },
                steps: [
                    {
                        textBox: ["I think the cargo is weapons"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Accuse him of lying",
                            exit: "Tell him you agree"
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
                    offend: "Well, you should get to that, va",
                    exit: "Then I hope you made the right ones, va"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Nothing to do now but wait. Have you made your decisions, va?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "No",
                            exit: "Yes"
                        }
                    }
                ]
            }
        }
    };
    discussionTemplate.identifier = "arev";
    discussionTemplate.name = "Arev";
    discussionTemplate.status = {
        isOffended: false,
        isTired: false,
        isUnlocked: false
    };
    discussionManager.discussions.arev = discussionTemplate;
    gameManager.setEvent(gameManager.eventNames.nextDay, function(){
        discussionManager.discussions.arev.status.isOffended = false;
        discussionManager.discussions.arev.status.isTired = false;
        discussionManager.discussions.arev.status.isUnlocked = false;
    });
})();
