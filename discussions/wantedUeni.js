(function(){
    /// INSERT HERE!!!!!!
    //Boss messages
    var discussionTemplate = {
        identifier: 'wantedUeni',
        name: "Wanted: Ueni",
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
                        textBox: ["Name: Ueni. Race: Nolstep. Gender: Unknown"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, three counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Destruction of government property, four counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Armed robbery, two counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated Assault, eight counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Accessory to murder, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Known member of illegal group, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession and distribution of illegal documents, numerous counts"],
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
                    offend: "*nod*",
                    exit: "Message Ended"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Ueni. Race: Nolstep. Gender: Unknown"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, three counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Destruction of government property, four counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Armed robbery, two counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated Assault, eight counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Accessory to murder, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Known member of illegal group, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession and distribution of illegal documents, numerous counts"],
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
                        textBox: ["Name: Ueni. Race: Nolstep. Gender: Unknown"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, three counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Destruction of government property, four counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Armed robbery, two counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated Assault, eight counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Accessory to murder, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Known member of illegal group, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession and distribution of illegal documents, numerous counts"],
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
                        textBox: ["Name: Ueni. Race: Nolstep. Gender: Unknown"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, three counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Destruction of government property, four counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Armed robbery, two counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated Assault, eight counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Accessory to murder, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Known member of illegal group, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession and distribution of illegal documents, numerous counts"],
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
                        textBox: ["Name: Ueni. Race: Nolstep. Gender: Unknown"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Assaulting IJC officer, three counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Destruction of government property, four counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Armed robbery, two counts "],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Aggravated Assault, eight counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Accessory to murder, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Known member of illegal group, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession and distribution of illegal documents, numerous counts"],
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
    var NAME = "wantedUeni";
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