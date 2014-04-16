/*------------------- 
a player entity
-------------------------------- */
game.PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity((3), (3));
 
        // set the display to follow our position on both axis
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);

        this.gravity = 0;
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function(dt) {
        if (me.input.isKeyPressed('left')) {
            // flip the sprite on horizontal axis
            // update the entity velocity
            this.vel.x -= this.accel.x * me.timer.tick;
            this.vel.y = 0
        } else if (me.input.isKeyPressed('right')) {
            // unflip the sprite
            // update the entity velocity
            this.vel.x += this.accel.x * me.timer.tick;
            this.vel.y = 0
        }
        else {
            this.vel.x = 0;
        }
        if (me.input.isKeyPressed('up')) {
            this.vel.y -= this.accel.y * me.timer.tick;
            this.vel.x = 0;
            // set the jumping flage
        } else if (me.input.isKeyPressed('down')) {
            this.vel.y += this.accel.y * me.timer.tick;
            this.vel.x = 0;
        } else {
            this.vel.y = 0;
        }
 
        // check & update player movement
        this.updateMovement();
 
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
         
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
    }
    /* ---
     
       callback when everything is loaded
         
       ---  */
         
    /*"loaded" : function ()
    {
       // set the "Play/Ingame" Screen Object
       me.state.set(me.state.PLAY, new game.PlayScreen());
         
       // add our player entity in the entity pool
       me.entityPool.add("mainPlayer", game.PlayerEntity);
                 
       // enable the keyboard
       me.input.bindKey(me.input.KEY.LEFT,  "left");
       me.input.bindKey(me.input.KEY.RIGHT, "right");
       me.input.bindKey(me.input.KEY.DOWN,  "down");
       me.input.bindKey(me.input.KEY.UP,  "up");
          
       // start the game 
       me.state.change(me.state.PLAY);
    }*/
 
});