

function getTestDiscussion(){
    var testDiscussion = {
        status: {
            isOffended: false,
            isTired: false,
            isUnlocked: false
        },
        default: {
            textBox: ["General offended statement 1","General offended statement 2","General offended statement 3","4"],
            choices: {
                exit: "exit option"
            }
        },
        offended: {
            textBox: ["General offended statement 1","General offended statement 2","General offended statement 3","4"],
            choices: {
                exit: "exit option"
            }
        },
        tired: {
            textBox: ["General tired statement 1","general tired statement 2","general tired statement 3"],
            choices: {
                exit: "exit option"
            }
        },
        // stuff for first day
        1: {
            // Basic / first discussion
            basic: {
                // General things they say when you exit a discussion
                reactions: {
                    offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                    exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
                },
                steps:[
                    {
                        // First statement
                        textBox: ["FIRST QUESTION / STATEMENT"],
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
                    offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                    exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
                },
                steps: [
                    {
                        textBox: ["What now?"],
                        choices: {
                            next: "Ask what she means about the IJC",
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
        }
    };
    gameManager.setEvent(gameManager.eventNames.nextDay, function(){
        testDiscussion.status.isOffended = false;
        testDiscussion.status.isTired = false;
        testDiscussion.status.isUnlocked = false;
    });
    //discussionManager.initDiscussionObject.call(testDiscussion);
    return testDiscussion;
}

var discussionTemplate = {
    status: {
        isOffended: false,
        isTired: false,
        isUnlocked: false
    },
    offended: {
        textBox: ["General offended statement 1","General offended statement 2","General offended statement 3","4"],
        choices: {
            exit: "exit option"
        }
    },
    tired: {
        textBox: ["General tired statement 1","general tired statement 2","general tired statement 3"],
        choices: {
            exit: "exit option"
        }
    },
    // stuff for first day
    1: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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

    // stuff for second day
    2: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // DAY THREE
    3: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // THIRD
    3: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // FOURTH
    4: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // FIFTH
    5: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // SIXTH
    6: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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


    // SEVENTH
    7: {
        // Basic / first discussion
        basic: {
            // General things they say when you exit a discussion
            reactions: {
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps:[
                {
                    // First statement
                    textBox: ["FIRST QUESTION / STATEMENT"],
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
                offend: "WHAT THEY SAY WHEN THEY'RE OFFENDED IN THIS DISCUSSION",
                exit: "WHAT THEY SAY WHEN YOU EXIT THIS DISCUSSION"
            },
            steps: [
                {
                    textBox: ["What now?"],
                    choices: {
                        next: "Ask what she means about the IJC",
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
    }
};