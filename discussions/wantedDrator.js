(function(){
    /// INSERT HERE!!!!!!
    //Ueni wanted poster
    var discussionTemplate = {
        identifier: 'wantedDrator',
        name: "Wanted: Draator",
        default: {
            textBox: ["Wanted Poster"],
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
                    exit: "*finish reading*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Draator. Race: Human. Gender: Male."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Trespassing, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Parole Violation, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession of deadly weapon, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting Arrest, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fleeing government (parole), one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Suspected of fraud, conspiracy to commit crimes, distribution of illegal goods"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
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
                    exit: "*finish reading*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Draator. Race: Human. Gender: Male."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Trespassing, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Parole Violation, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession of deadly weapon, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting Arrest, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fleeing government (parole), one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Suspected of fraud, conspiracy to commit crimes, distribution of illegal goods"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
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
                    exit: "*finish reading*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Draator. Race: Human. Gender: Male."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Trespassing, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Parole Violation, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession of deadly weapon, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting Arrest, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fleeing government (parole), one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Suspected of fraud, conspiracy to commit crimes, distribution of illegal goods"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
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
                    exit: "*finish reading*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Draator. Race: Human. Gender: Male."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Trespassing, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Parole Violation, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession of deadly weapon, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting Arrest, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fleeing government (parole), one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Suspected of fraud, conspiracy to commit crimes, distribution of illegal goods"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
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
                    exit: "*finish reading*"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["Name: Draator. Race: Human. Gender: Male."],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Trespassing, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Parole Violation, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession of deadly weapon, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Resisting Arrest, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fleeing government (parole), one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Suspected of fraud, conspiracy to commit crimes, distribution of illegal goods"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    }				
                ]
            }
        }
    };
    var NAME = "wantedDrator";
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