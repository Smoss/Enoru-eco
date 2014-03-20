/* globals game */

game.PlayScreen = me.ScreenObject.extend({
    /** 
     *  action to perform on state change
     */
    onResetEvent: function() {  
     
        // load a level
        me.levelDirector.loadLevel("map");
         
        // reset the score
        game.data.score = 0;
         
        // add our HUD to the game world
         
    },
     
     
    /** 
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});