(function(){
    /// INSERT HERE!!!!!!
    //Boss messages
    var discussionTemplate = {
        identifier: 'boss',
        name: "Message from: BOSS",
        default: {
            textBox: ["Message from boss"],
            choices: {
                exit: "*read message*"
            }
        },
        offended: {
            textBox: ["No new messages"],
            choices: {
                exit: "*finish*"
            }
        },
        tired: {
            textBox: ["No new messages"],
            choices: {
                exit: "*finish*"
            }
        },
        // DAY ONE
        1: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "*nod*",
                    exit: "Message Ended"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["We’ve got five prisoners to pick up. Just a bunch of insurgents crooks transporting stolen goods. "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["They’ll be in holding until the Intergalactic Justice Commission can pick them up. There’s a "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["decent bounty on the five of them so don’t screw this up. Your job isn’t hard. Just make sure "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["they don’t try anything funny before the IJC get here with the reward. If you can, try and see if "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["you can get the code for the cargo bins they were carrying. I’m sure the IJC would be more than"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["grateful to not have to deal with it themselves. They don’t know what’s in it either so, I’m sure "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["they wouldn’t notice if a thing or two got ‘lost’ in the transfer."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Oh, and go ahead and rifle through their personal effects and see if there’s anything worth while. "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["It’s all in the vault. Keep what you want and we’ll pawn the rest. It’s not like these folks need it "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["where they're headed."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "*finish reading*"
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
                    offend: "*finish reading*",
                    exit: "*put message down*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Got word from the IJC. It’ll be about five parsecs before the nearest prisoner transfer ship can"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["reach us. Didn’t think it’d take that long, but you know the government. Incompetent as ever."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["But they aren’t all useless, I guess. One of the prisoners is an IJC informant. Obviously they’re"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["not going to blow their cover outright, but see if you can figure out who it is. "],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "*finish reading*"
                        }
                    }
                ]
            }
        },


        // third DAY
        3: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "*finish reading*",
                    exit: "*put message down*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Got word from the IJC. We're their last pick-up before they dump their haul. They’ve only got 3"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["spots left on their holding. We'll just fudge the paperwork a bit then once they get here. "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["'Prisoner resisted during transfer,' and be done with it. Just make sure you check the reward "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["difference for dead or alive. And see if you could use that to get the prisoners to talk about the"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["vault. Check their belonging for anything you can use as leverage."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "*finish reading*"
                        }
                    }
                ]
            }
        },

        // DAY Four
        4: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "*finish reading*",
                    exit: "*put message down*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Picked up on a Insurgent distress signal. It’s coming from our ship One of the prisoners must be "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["transmitting out location somehow. Next time you screw up like this, I’ll cut more than just your"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["pay. Find that transmitter before they find us. The IJC will be here soon, but we don't want to be found before that."],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "*finish reading*"
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
                    offend: "*finish reading*",
                    exit: "*put message down*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Those insurgents found us. I told you to find the transmitter. I’d throw you out the airlock, but it "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["sounds like they’re wanting to keep things from getting messy. Maybe we can get a decent deal out of this."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["They don’t seem to know exactly who or what we’ve got. Figure it out, but do it quick. IJC will be here soon"],
                        choices: {
                            next: false,
                            unlock: false,
                            offend: false,
                            exit: "*finish reading*"
                        }
                    }
                ]
            }
        }
    };
    var NAME = "boss";
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