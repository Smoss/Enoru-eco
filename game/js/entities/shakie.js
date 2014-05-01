/* globals game */

game.staticEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
        // call the constructor
        this.parent(x, y, settings);
        // set the default horizontal & vertical speed (accel vector)
        this.setVelocity(3, 3);

        this.gravity = 0;

        this.update();
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
    update: function(dt) {
        var dir = Math.floor(Math.random() * 4);
        if(dir === 0) {
            this.vel.x = 0;
            this.vel.y = 0;
            this.vel.x -= Math.floor(Math.random() * 4);
        } else if(dir === 1) {
            this.vel.x = 0;
            this.vel.y = 0;
            this.vel.x += Math.floor(Math.random() * 4);
        } else if(dir === 2) {
            this.vel.x = 0;
            this.vel.y = 0;
            this.vel.y -= Math.floor(Math.random() * 4);
        } else {
            this.vel.x = 0;
            this.vel.y = 0;
            this.vel.y += Math.floor(Math.random() * 4);
        }

        this.updateMovement();
        
        return true;
    },
    /* ---
     
       callback when everything is loaded
         
       ---  */

    loaded: function (){

    }
});