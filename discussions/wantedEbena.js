(function(){
    /// INSERT HERE!!!!!!
    //Boss messages
    var discussionTemplate = {
        identifier: 'wantedEbena',
        name: "Wanted: Ebena",
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
                        textBox: ["Name: Ebena. Race: Human. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Burglary, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession/Sale of stolen goods, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Impersonating IJC, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Robbery, four counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Accessory to armed robbery, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Conspiracy to commit crime, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fraud, numerous counts"],
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
                        textBox: ["Name: Ebena. Race: Human. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Burglary, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession/Sale of stolen goods, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Impersonating IJC, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Robbery, four counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Accessory to armed robbery, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Conspiracy to commit crime, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fraud, numerous counts"],
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
                        textBox: ["Name: Ebena. Race: Human. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Burglary, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession/Sale of stolen goods, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Impersonating IJC, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Robbery, four counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Accessory to armed robbery, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Conspiracy to commit crime, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fraud, numerous counts"],
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
                        textBox: ["Name: Ebena. Race: Human. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Burglary, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession/Sale of stolen goods, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Impersonating IJC, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Robbery, four counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Accessory to armed robbery, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Conspiracy to commit crime, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fraud, numerous counts"],
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
                        textBox: ["Name: Ebena. Race: Human. Gender: Female"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Burglary, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Possession/Sale of stolen goods, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Impersonating IJC, two counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Robbery, four counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Accessory to armed robbery, one count"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
					{
                        // First statement
                        textBox: ["Conspiracy to commit crime, numerous counts"],
                        choices: {
                            next: "*continue reading*",
                            unlock: false,
                            offend: false,
                            exit: false
                        }
                    },
                    {
                        // First statement
                        textBox: ["Fraud, numerous counts"],
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