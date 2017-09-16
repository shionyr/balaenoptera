window.gameData = {
    events: {
        loadedEvent: (function () { return new Event('loaded'); })()
    }
};

(function () {
    window.addEventListener('loaded', function () {
    });
})();
