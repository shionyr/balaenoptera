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
        gameOver: 'gameOver'
    },
    // private var for tracking events
    __events: {
        loadingScreenComplete: [
            // Example
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


    // The UI Popup
    uiPopup: {
        __element: null,
        __checkInit: function() {
            if (window.gameManager.uiPopup.__element === null) {
                window.gameManager.uiPopup.__element = $('.gameObject.popupUI');
            }
        },
        show: function() {
            window.gameManager.uiPopup.__checkInit();
            window.gameManager.uiPopup.__element.removeClass('hidden');
        },
        hide: function() {
            window.gameManager.uiPopup.__checkInit();
            window.gameManager.uiPopup.__element.addClass('hidden');
        }
    }
};