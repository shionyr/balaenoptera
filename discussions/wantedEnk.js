(function(){
    /// INSERT HERE!!!!!!
    //Boss messages
    var discussionTemplate = {
        identifier: 'wantedEnk',
        name: "Wanted: Enk",
        default: {
            textBox: ["Wanted Poster"],
            choices: {
                exit: "*read message*"
            }
        },
        offended: {
            textBox: ["Wanted Psoter"],
            choices: {
                exit: "*finish*"
            }
        },
        tired: {
            textBox: ["Wanted Poster"],
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
                        textBox: ["Name: Enk. Race: Incklet. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated assault, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting arrest, one count "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Grand Theft Spaceship, one count"],
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
                        textBox: ["Name: Enk. Race: Incklet. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated assault, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting arrest, one count "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Grand Theft Spaceship, one count"],
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
                    offend: "*nod*",
                    exit: "Message Ended"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Enk. Race: Incklet. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated assault, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting arrest, one count "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Grand Theft Spaceship, one count"],
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
                    offend: "*nod*",
                    exit: "Message Ended"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Enk. Race: Incklet. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated assault, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting arrest, one count "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Grand Theft Spaceship, one count"],
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
                    offend: "*nod*",
                    exit: "Message Ended"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Enk. Race: Incklet. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated assault, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting arrest, one count "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Grand Theft Spaceship, one count"],
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
    var NAME = "wantedEnk";
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