window.gameManager = {
    setEvent: function (eventName, func) {
    },
    eventNames: {   // sort of an enum
        loadingScreenComplete: 1,
        gameLoaded: 3,
        
        gameEvent: 10
    },
    __events: {
        //
        loadingScreenComplete: (function () { return new Event('loadingScreenComplete'); })()
    },
    loader: {
        __iterate: function () {
            if (document.readyState === 'complete') {
                // If it's done, clear the interval and trigger the loading screen complete event
                clearInterval(this.__interval);
                document.dispatchEvent(window.gameData.events.loadingScreenComplete);
            }
        },
        initialize: function () {
            this.__interval = window.setInterval( function(){
                window.gameData.loader.__iterate.call(window.gameData.loader);
            },100);
        },
        __interval: null
    }
};

(function (){
    // Set it in half a second to allow things to pre-initialize
    window.setTimeout(function(){
        window.gameManager.loader.initialize();
    },500);
})();