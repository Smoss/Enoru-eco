/* globals debugPanel, aStarPlugin */
/* game namespace */
var game = {
 
    /** 
     * an object where to store game global data
     */

    data: {
        player_location: {
            x: 0,
            y: 0
        }
    },
     
    // Run on page load.
    onload: function () {
 
        // Initialize the video.
        if (!me.video.init("screen", window.window_size().width, window.window_size().height, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas. Get a better browser.");
            return;
        }

        // A*
        me.plugin.register(aStarPlugin, "astar");
         
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
    loaded: function () {
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());
     
        // set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());
     
        // set a global fading transition for the screen
        me.state.transition("fade", "#FFFFFF", 250);
        //me.pool.register("mainPlayer", game.PlayerEntity);
        //me.pool.register("CoinEntity", game.CoinEntity);
        //me.pool.register("EnemyEntity", game.EnemyEntity);

        //me.state.set(me.state.MENU, new game.TitleScreen());
        //me.state.set(me.state.PLAY, new game.PlayScreen());


        me.entityPool.add("mainPlayer", game.PlayerEntity);
        me.entityPool.add("blockman", game.staticEntity);
                  
        // enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.DOWN,  "down");
        me.input.bindKey(me.input.KEY.UP,    "up");
     
        // display the menu title
 
        // Start the game.
        me.state.change(me.state.MENU);
    }
};

game.TitleScreen = me.ScreenObject.extend({
    onResetEvent: function() {  
        // title screen
        me.game.world.addChild(new me.SpriteObject(0, 0, me.loader.getImage('title_screen')), 1);

        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function() {
                this.parent(new me.Vector2d(0, 0), me.game.viewport.width, me.game.viewport.height);
                // font for the scrolling text
                this.font = new me.BitmapFont("32x32_font", 32);
            },

            update : function (dt) {
                return true;
            },
             
            draw : function (context) {
                this.font.draw (context, "PRESS ENTER TO PLAY", 20, 240);
            },
            onDestroyEvent : function() {
            }
        }))(), 2);

        // change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        //me.input.bindPointer(me.input.mouse.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                me.state.change(me.state.PLAY);
            }
        });
    },
    
    
    /** 
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        //me.input.unbindPointer(me.input.mouse.LEFT);
        me.event.unsubscribe(this.handler);
    }
});

/**
 * A title screen 
 **/
game.TitleScreen = me.ScreenObject.extend({
 
    /**    
     *  action to perform on state change
     */
    onResetEvent : function() {
         
        // title screen
        me.game.world.addChild(
            new me.SpriteObject (
                0,0, 
                me.loader.getImage('title_screen')
            ),
            1
        );
     
        // add a new renderable component with the scrolling text
        me.game.world.addChild(new (me.Renderable.extend ({
            // constructor
            init : function() {
                this.parent(new me.Vector2d(0, 0), me.game.viewport.width, me.game.viewport.height);
                // font for the scrolling text
                this.font = new me.BitmapFont("32x32_font", 32);
                 
                 // a tween to animate the arrow
                this.scrollertween = new me.Tween(this).to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
         
                this.scroller = "A SMALL STEP BY STEP TUTORIAL FOR GAME CREATION WITH MELONJS       ";
                this.scrollerpos = 600;
            },
             
            // some callback for the tween objects
            scrollover : function() {
                // reset to default value
                this.scrollerpos = 640;
                this.scrollertween.to({scrollerpos: -2200 }, 10000).onComplete(this.scrollover.bind(this)).start();
            },
         
            update : function (dt) {
                return true;
            },
             
            draw : function (context) {
                this.font.draw (context, "PRESS ENTER TO PLAY", 20, 240);
                this.font.draw(context, this.scroller, this.scrollerpos, 440);
            },
            onDestroyEvent : function() {
                //just in case
                this.scrollertween.stop();
            }
        })), 2);
         
        // change to play state on press Enter or click/tap
        me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.ENTER);
        this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
            if (action === "enter") {
                // play something on tap / enter
                // this will unlock audio on mobile devices
                //me.audio.play("cling");
                me.state.change(me.state.PLAY);
            }
        });
    },
 
    /**    
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent : function() {
        me.input.unbindKey(me.input.KEY.ENTER);
        me.input.unbindMouse(me.input.mouse.LEFT);
        me.event.unsubscribe(this.handler);
   }
});