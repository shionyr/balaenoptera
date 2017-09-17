(function(){
    //Ebena Conversation
    var discussionTemplate = {
        status: {
            isOffended: false,
            isTired: false,
            isUnlocked: false
        },
        default: {
            textBox: ["Hey, hey you.","Hey there.","How‘s it going, bounty hunter?"],
            choices: {
                exit: "Goodbye"
            }
        },
        offended: {
            textBox: ["Don’t talk to me.","I’m not in the mood.","Hmph."],
            choices: {
                exit: "Sorry"
            }
        },
        tired: {
            textBox: ["Got nothing more to say.","You’ve worn me out for the day.","You’ll have to excuse me, I need my beauty sleep"],
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
                    offend: "Well, aren't you a feisty one?",
                    exit: "Okay then"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Hey! Hey you."],
                        choices: {
                            next: "Ask what she wants",
                            unlock: false,
                            offend: "Tell her to be quiet",
                            exit: "Ignore her"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["You’ve got it wrong."],
                        choices: {
                            next: "...",
                            unlock: "Ask what she means...",
                            offend: "Tell her to be quiet",
                            exit: false  // if you don't want a choice to show for this question, set it to false
                        }
                    },
                    {
                        // Third statement
                        textBox: ["I’m not one of the bad guys. You’ll see."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "Think about it..."
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Like you’re any different, bounty hunter?",
                    exit: "Well, you do what you can to get by, right?"
                },
                steps: [
                    {
                        textBox: ["What now?"],
                        choices: {
                            next: "Ask what she means about the not being a bad guy",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        textBox: ["None of us are a big fan of the IJC. But to tell you the truth I’m not that be a fan of the Insurgents either."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell her you don’t like people with split loyalties.",
                            exit: "Tell her she’s smart"
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
                    offend: "This is going to be a long couple parsecs",
                    exit: "Boring!"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["So what’s the news, bounty hunter?"],
                        choices: {
                            next: "Tell her it will be how long before the IJC get there",
                            unlock: false,
                            offend: "Tell her to be quiet",
                            exit: "Ignore her"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Good ol’ Intergalactic Justice. They really love letting people rot in a cell."],
                        choices: {
                            next: false,
                            unlock: "Ask if she knows from experience",
                            offend: "Tell her it’s not your problem",
                            exit: "..."
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Yes. And selling us to them like cattle is so much better.",
                    exit: "I suppose you're not wrong."
                },
                steps: [
                    {
                        textBox: ["What now?"],
                        choices: {
                            next: "Ask what she thinks of the IJC",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        textBox: ["The IJC treat prisoners like objects. We’re not people to them."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell her you’re not like them",
                            exit: "Tell her the Insurgents aren’t much different"
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
                    offend: "So this is fun for you?",
                    exit: "Well, alright then."
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Come by to chat?"],
                        choices: {
                            next: "Ask why she joined the Insurgents",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // Second statement
                        textBox: ["Why? A few reasons I suppose. Why’d you become a bounty hunter?"],
                        choices: {
                            next: false,
                            unlock: "Money",
                            offend: "Boredom",
                            exit: "None of her business"
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "You wouldn’t hurt little ol’ me.. right?",
                    exit: "You wouldn’t hurt little ol’ me.. right?"
                },
                steps: [
                    {
                        textBox: ["Money. That’s why I’m really here, if I’m being honest. Can you blame me really?"],
                        choices: {
                            next: "Tell her only three prisoners will be given to the IJC",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        textBox: ["Oh? And what’ll you do with the rest? Hold us here to we rot?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Tell her you’ll kill the remaining two",
                            exit: "Tell her she’s smart"
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
                    offend: "Ugh",
                    exit: "Oh, c'mon"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Hey! Come here."],
                        choices: {
                            next: "Ask what she wants",
                            unlock: false,
                            offend: "Tell her to shut up",
                            exit: "Ignore her"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["You wanna know the truth? Why I’m really here?"],
                        choices: {
                            next: false,
                            unlock: "Tell her it won't change anything",
                            offend: "Tell her to be quiet",
                            exit: "Don’t listen to her"
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "I suppose you're right.",
                    exit: "I suppose you're right."
                },
                steps: [
                    {
                        textBox: ["I never wanted this job. But I didn’t have a choice"],
                        choices: {
                            next: "Ask what she means",
                            unlock: false,
                            offend: "Tell her she’s still a criminal",
                            exit: "Tell her there’s always a choice"
                        }
                    },
                    {
                        textBox: ["I have debts. If I can’t pay in money, they’ll make me pay in other ways."],
                        choices: {
                            next: "Ask who she owes money to.",
                            unlock: false,
                            offend: "Tell her it’s her own fault",
                            exit: false
                        }
                    },
                    {
                        textBox: ["The Insurgents, who else?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "Tell her she made her choice"
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
                    offend: "Fine, then be that way",
                    exit: "C'mon"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Hey…"],
                        choices: {
                            next: "Ask what she wants",
                            unlock: false,
                            offend: false,
                            exit: "Ignore her"
                        }
                    },
                    {
                        // Second statement
                        textBox: ["You’re not gonna let me die right?"],
                        choices: {
                            next: "Ask if she knows who is transmitting the signal",
                            unlock: false,
                            offend: false,
                            exit: "Tell her she probably won’t die"
                        }
                    },
                    {
                        // Third statement
                        textBox: ["Signal? What do you mean signal?"],
                        choices: {
                            next: false,
                            unlock: "Tell her about the Insurgents",
                            offend: "Ignore her",
                            exit: false
                        }
                    }
                ]
            },

            // Second / secret discussion
            unlocked: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "Great. Love your confidence.",
                    exit: "Great. Love your confidence."
                },
                steps: [
                    {
                        textBox: ["So they’re coming? That means you won’t kill me, right?"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: "Probably",
                            exit: "You don’t know"
                        }
                    }
                ]
            }
        }
    };
    discussionManager.discussions.ebena = discussionTemplate;
    gameManager.setEvent(gameManager.eventNames.nextDay, function(){
        discussionManager.discussions.ebena.status.isOffended = false;
        discussionManager.discussions.ebena.status.isTired = false;
        discussionManager.discussions.ebena.status.isUnlocked = false;
    });
})();
