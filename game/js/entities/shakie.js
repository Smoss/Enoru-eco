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
        /*
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
        */


        // var player_loc = game.data.player_location;
        // me.plugin.astar.refresh();
        // var nodes = me.astar.search(player_loc.x, player_loc.y, this.pos.x, this.pos.y);
        // console.log(nodes);
        // if (typeof nodes[0] !== 'undefined'){
        //     this.vel.x = nodes[0].pos.x;
        //     this.vel.y = nodes[0].pos.y;
        // }
        // this.updateMovement();

        
        return true;
    },
    /* ---
     
       callback when everything is loaded
         
       ---  */

    loaded: function (){

    }
});