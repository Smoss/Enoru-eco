/* globals debugPanel */
/* game namespace */
var game = {
 
    /** 
     * an object where to store game global data
     */

    data: {

    },
     
    // Run on page load.
    onload: function () {
 
        // Initialize the video.
        if (!me.video.init("screen", 640, 480, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas. Get a better browser.");
            return;
        }
         
        // add "#debug" to the URL to enable the debug Panel
        if (document.location.hash === "#debug") {
            window.onReady(function () {
                me.plugin.register.defer(debugPanel, "debug");
            });
        }
 
        // Initialize the audio.
        me.audio.init("mp3,ogg");
 
        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);
      
        // Load the resources.
        me.loader.preload(game.resources);
 
        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },
 
 
 
    // Run on game resources loaded.
    loaded: function () {
        me.state.set(me.state.PLAY, new game.PlayScreen());
 
        // Start the game.
        me.state.change(me.state.PLAY);
    }
};