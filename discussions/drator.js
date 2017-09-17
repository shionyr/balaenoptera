(function(){
    /// INSERT HERE!!!!!!
    var discussionTemplate = {
        identifier:'drator',
        name: "Drator",
        default: {
            textBox: ["Hello","Hi"],
            choices: {
                exit: "Goodbye"
            }
        },
        offended: {
            textBox: ["What do you want?","Go away", "..."],
            choices: {
                exit: "Sorry"
            }
        },
        tired: {
            textBox: ["Let me sleep","Not right now", "..."],
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
                    offend: "What? Am I breathing too loud for you?",
                    exit: "..."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["..."],
                        choices: {
                            next: "Ask what his story is",
                            unlock: false,
                            offend: "Tell him to be quiet",
                            exit: "Ignore him."
                        }
                    },
                    {
                        // Second statement
                        textBox: ["..."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "Okay, I guess."
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
                    offend: "Then you get it. We don’t do this for kicks. We do it because we have to. Are you really going to condemn us all for trying get by?",
                    exit: "..."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["..."],
                        choices: {
                            next: "Approach him",
                            unlock: false,
                            offend: false,
                            exit: "Ignore him"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["…"],
                        choices: {
                            next: "Stare",
                            unlock: false,
                            offend: "The Insurgents are criminals.",
                            exit: "Leave him alone"
                        }
                    },
                    {
                        // Third statement
                        textBox: ["You think you're better than us?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "No",
                            exit: "Yes"
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
                    offend: "You decide to search through the prisoners' items and find a wallet with pictures of Drator, a sickly man, and two children smiling happily.",
                    exit: "None of your business. You decide to search through the prisoners' items and find a wallet with pictures of Drator, a sickly man, and two children smiling happily"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["…"],
                        choices: {
                            next: "Ask why he joined the Insurgents",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["We’ve all got our reasons for doing things."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Search through his belongings since he's being uncooperative",
                            exit: "Ask what his reasons are"
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
                    offend: "You’re disgusting, bounty hunter.",
                    exit: "You rifled through our things, huh? Suppose I shouldn’t be surprised… I don’t know for certain. Valuables, most likely, maybe IJC information. Something important though, wouldn't have been put on the job otherwise."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["..."],
                        choices: {
                            next: "Ask if he knows what’s in the vault",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Why should I tell you?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Threaten his family",
                            exit: "Tell him you’ll ensure he gets back to his family"
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
                    offend: "Screw you.",
                    exit: "Sorry. Wish I knew"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["What now?"],
                        choices: {
                            next: "Ask if he knows who’s transmitting the signal.",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Signal? No. I suspect Ueni or Aver, though."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Threaten him",
                            exit: "Believe him"
                        }
                    }
                ]
            }
        }
    };

    var NAME = "drator";
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