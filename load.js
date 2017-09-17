window.gameManager = {
    // Add an event trigger of @eventName
    setEvent: function (eventName, func) {
        // eventName can be something from this.eventNames, or a custom event
        if (!this.__events.hasOwnProperty(eventName)) {
            this.__events[eventName] = [];
        }
        this.__events[eventName].push(func);
    },

    // Fire an event trigger for @eventName
    fireEvent: function (eventName) {
        if (typeof(this.__events[eventName]) === 'object') {
            var len = this.__events[eventName].length;
            for (var i = 0; i < len; i++) {
                if (typeof(this.__events[eventName][i]) === 'function') {
                    this.__events[eventName][i]();
                }
            }
        }
    },

    // An "enum" of names of events.  Can have stuff added to it
    eventNames: {   // sort of an enum
        loadingScreenComplete: 'loadingScreenComplete',
        gameLoaded: 'gameLoaded',
        gamePause: 'gamePause',
        gameOver: 'gameOver',
        nextDay: 'nextDay'
    },

    // private var for tracking events
    __events: {
        loadingScreenComplete: [
            // Example
        ],
        nextDay: [
        ]
    },


    // Manages preLoading functionality
    preLoader: {
        __loadSemaphore: {},
        __checkSemaphore: function () {
            for (var i in gameManager.preLoader.__loadSemaphore) {
                if (gameManager.preLoader.__loadSemaphore[i] !== null)
                    return false;
            }
            return true;
        },
        __iterate: function () {
            if (document.readyState === 'complete') {
                //if (!gameManager.preLoader.__checkSemaphore()) return;
                window.clearInterval(window.gameManager.preLoader.__interval);
                window.gameManager.fireEvent(window.gameManager.eventNames.loadingScreenComplete);
                window.gameManager.fireEvent(window.gameManager.eventNames.gameLoaded);
            }
        },
        initialize: function () {
            window.gameManager.preLoader.__interval = window.setInterval( function(){
                window.gameManager.preLoader.__iterate();
            },100);
        },
        addSemaphore: function(name, obj) {
            gameManager.preLoader.__loadSemaphore [name] = obj;
        },
        removeSemaphore: function(name) {
            if (gameManager.preLoader.__loadSemaphore.hasOwnProperty(name)) {
                gameManager.preLoader.__loadSemaphore[name] = null;
            }
        },
        __interval: null
    },


    // Sounds
    sounds: {},


    // Points manager
    pointsManager: {
        points: 7,
        resetPoints: function(){
            gameManager.pointsManager.points = 7;
        },
        deductPoints: function(p){
            if (typeof(p) === "number") {
                gameManager.pointsManager.points--;
                if (gameManager.pointsManager.points < 0)
                    gameManager.pointsManager.points = 0;
            }
        }
    },


    // Sleep manager
    sleepManager: {
        currentDay: 1,
        maxDays: 5,
        doSleep: function() {
            // fade out stuff
            gameManager.sleepManager.__nextDay();
            // fade stuff in
        },
        __nextDay: function() {
            gameManager.fireEvent(gameManager.eventNames.nextDay);
            gameManager.sleepManager.currentDay ++;
            if (gameManager.sleepManager.currentDay > gameManager.sleepManager.maxDays) {
                gameManager.sleepManager.currentDay = gameManager.sleepManager.maxDays;
            }
        }
    },


    // FLAGS
    globalFlags: []
};

navigation = {
    fps: 24,
    walkSpeed: 200,
    objects: {},
    centerOffset: 450,
    playerCurrentPosition: 1000,
    playerTargetPosition: 1000,
    __pixelsToRemRatio: null,
    pixelsToRem: function (pixels) {
        return pixels * navigation.__pixelsToRemRatio;
    },
    remToPixels: function (rem) {
        return rem / navigation.__pixelsToRemRatio;
    },
    __targetDiscussion: null,
    initialize: function(){
        var pixelHeight = document.getElementById('playArea').scrollHeight;
        navigation.__pixelsToRemRatio = 480 / pixelHeight;
        navigation.objects.hallway = $('.shipInterior.gameObject');
        navigation.objects.player = $('#player');
        navigation.objects.cells = $('.gameScreen .playArea .shipInterior .jailcell');
        navigation.objects.backWall = $('.gameObject.backWall');
        navigation.objects.backWall.click(function(event){
            if (discussionManager.__currentSubject == null) {
                navigation.walkTo (event.offsetX);
            }
        });
        $('.gameObject.interactable.clickable').click(function(event){
            // Get name if discussion
            if (this.attributes['discussionname']) {
                // Navigate
                navigation.__targetDiscussion = this.attributes.discussionname.value;
                // Set trigger to get there
                // Just call this function for now
                (function(){
                    discussionManager.startDiscussion(discussionManager.discussions[navigation.__targetDiscussion]);
                })();
                navigation.walkTo(parseFloat($(this).css('left')) + event.offsetX);
            }
            // See if it's a world trigger
            else if (this.attributes['worldtrigger']) {
                if (this.attributes.worldtrigger.value == 'sleep') {
                    gameManager.sleepManager.doSleep();
                }
            }
        });
        navigation.render();
        window.setInterval(navigation.navigate,1000/navigation.fps);
    },

    walkTo: function (leftVal) {
        //console.log(leftVal, navigation.pixelsToRem(leftVal));
        gameManager.sounds.walk.stop();
        gameManager.sounds.walk.volume(0.7);
        gameManager.sounds.walk.play();
        navigation.playerTargetPosition = navigation.pixelsToRem(leftVal);
    },

    navigate: function () {
        //if (discussionManager.__currentSubject != null)
            //return;
        // See if I need to move
        if (navigation.playerTargetPosition != navigation.playerCurrentPosition) {
            navigation.walk (navigation.playerTargetPosition - navigation.playerCurrentPosition);
        }
        navigation.render();
    },

    walk: function (difference) {
        if (Math.abs(difference) < Math.abs(navigation.walkSpeed / navigation.fps)) {
            navigation.playerCurrentPosition += difference;
            gameManager.sounds.walk.fade(1,0,0.2);
            return;
        }
        if (difference < 0) {
            navigation.playerCurrentPosition -= navigation.walkSpeed / navigation.fps;
            navigation.objects.player.removeClass('walkRight');
        } else if (difference > 0) {
            navigation.playerCurrentPosition += navigation.walkSpeed / navigation.fps;
            navigation.objects.player.addClass('walkRight');
        }
    },

    render: function() {
        var playerValue = navigation.playerCurrentPosition + 'rem',
            hallwayValue = ((-navigation.playerCurrentPosition + navigation.centerOffset) - 1) + 'rem';
        navigation.objects.player.css('left', playerValue);
        navigation.objects.hallway.css('left', hallwayValue);
    }
};
gameManager.setEvent(gameManager.eventNames.gameLoaded, function() {
    navigation.initialize();
});

window.utils = {
    randomArrayMember: function (array) {
        if (typeof(array) != 'object') {
            console.error('window.utils.randomArrayMember: input not an array');
            return array.toString();
        }
        var len = array.length;
        if (!len) {
            console.error('window.utils.randomArrayMember: input length invalid');
            return array.toString();
        }
        return array[Math.floor(.999999 * Math.random() * len)];
    },
    shuffleArray: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
};