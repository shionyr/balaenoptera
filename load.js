window.gameData = {
    events: {
        loadingScreenComplete: (function () { return new Event('loadingScreenComplete'); })()
    },
    loader: {
        __iterate: function () {
            if (document.readyState === 'complete') {
                clearInterval(this.__interval);
                this.__onloaded();
            }
        },
        initialize: function () {
            this.__interval = window.setInterval( function(){
                window.gameData.loader.__iterate.call(window.gameData.loader);
            },100);
        },
        setOnloaded: function (func) {
            if (typeof(func) === 'function')
                this.__onloaded = func;
        },
        __onloaded: null,
        __interval: null
    }
};

(function (){
    window.gameData.loader.setOnloaded(function(){
        document.dispatchEvent(window.gameData.events.loadingScreenComplete);
        console.log('poop');
    });
    window.setTimeout(function(){
        window.gameData.loader.initialize();
    },500);
})();