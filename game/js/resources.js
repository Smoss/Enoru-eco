/* globals game */

game.resources = [
    /**
     * Graphics.
     */
    // our level tileset
    //{name: "blue", type: "image", src: "data/blue.png"},
    {name: '32x32_font', type: 'image', src: 'data/img/font/32x32_font.png'},
    {name: 'title_screen', type: 'image', src: 'data/img/gui/title_screen.png'},
    {name: 'trees_ortho', type: 'image', src: 'data/trees_ortho.png'},
    {name: 'bricktiles', type: 'image', src: 'data/bricktiles.png'},
    {name: 'collisiontiles', type: 'image', src: 'data/collisiontiles.png'},
    {name: "water", type: "image", src: "data/water.png"},
    {name: "grasstest", type: "image", src: "data/grasstest.png"},
    {name: "treessmooth", type: "image", src: "data/treessmooth.png"},
    {name: "player", type:"image", src: "data/img/sprite/player.png"},
    {name: "blockman", type:"image", src: "data/img/sprite/player.png"},

    // Title screen image
    {name: 'title_screen', type: 'image', src: 'data/img/gui/title_screen.png'},

    // Font
    {name: "32x32_font",          type:"image", src: "data/img/font/32x32_font.png"},
    /* 
     * Maps. 
     */
    {name: "treesmap", type: "tmx", src: "data/wall_map.tmx"}
    //{name: "treesmap", type: "tmx", src: "data/treesmap.tmx"}
];