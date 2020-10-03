//Aliases
    let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle;
    
	var size = [1920, 1080];
	var ratio = size[0] / size[1];
	var newRatio = 0.5;
		if (window.innerWidth / window.innerHeight >= ratio) {
			newRatio = window.innerHeight * ratio/size[0];
			//var w = window.innerHeight * ratio;
			//var h = window.innerHeight;
		} else {
			
			//var newRatio = window.innerWidth / ratio/size[1];
			//var w = window.innerWidth;
			//var h = window.innerWidth / ratio;
		}
		//renderer.view.style.width = w + 'px';
		//renderer.view.style.height = h + 'px';
		if(newRatio <0.3){
			newRatio = 0.3;
		}
		
		if(newRatio >1){
			newRatio = 1;
		}
		
		/*app.renderer.resolution = newRatio;
		//app.renderer.resize(newRatio *size[0] , newRatio*size[1]);
		app.renderer.resize(size[0] , size[1]);
		console.log('newRes ',newRatio);
		console.log('res ',app.renderer.resolution);
		console.log('renderer ',app.renderer);*/
    //Create a Pixi Application
    let app = new Application({
        width: size[0],
        height: size[1],
        antialiasing: true,
        transparent: false,
        resolution: newRatio
        }
    );
    
    function resize() {
		
		var newRatio = 0.5;
		if (window.innerWidth / window.innerHeight >= ratio) {
			newRatio = window.innerHeight * ratio/size[0];
			//var w = window.innerHeight * ratio;
			//var h = window.innerHeight;
		} else {
			
			//var newRatio = window.innerWidth / ratio/size[1];
			//var w = window.innerWidth;
			//var h = window.innerWidth / ratio;
		}
		//renderer.view.style.width = w + 'px';
		//renderer.view.style.height = h + 'px';
		if(newRatio <0.3){
			newRatio = 0.3;
		}
		
		if(newRatio >1){
			newRatio = 1;
		}
		
		/*app.renderer.resolution = newRatio;
		//app.renderer.resize(newRatio *size[0] , newRatio*size[1]);
		app.renderer.resize(size[0] , size[1]);
		console.log('newRes ',newRatio);
		console.log('res ',app.renderer.resolution);
		console.log('renderer ',app.renderer);*/
	}
	/*window.onresize = function(event) {
		resize();
	};*/

    //Add the canvas that Pixi automatically created for you to the HTML document
    document.body.appendChild(app.view);

    loader
    .add("images/BG_empty.png")
    .add("images/BG_win.png")
    .add("images/BG_lose.png")
    .add("images/BG_start.png")
    .add("images/comb_again.png")
    .add("images/messy_hair.png")
    .add("images/nice_hair.png")
    .add("images/comb_short.png")
    .add("images/blob.png")
    .add("images/wand.png")
    .add("images/knot.png")
    .add("images/chibi_cry1.png")
    .add("images/chibi_happy1.png")
    .add("images/chibi_oups1.png")
    .add("images/knot_1.png")
    .add("images/knot_2.png")
    .add("images/gum1.png")
    .add("images/gum2.png")
    .add("images/Warning-yellow.png")
    .add("images/Warning-orange.png")
    .add("images/Warning-red.png")
    .add("images/Warning-orange2.png")
    .add("images/Warning-red2.png")
    .add("images/goo_fairy.png")
    .add("images/goo_fairy_selected.png")
    .add("images/sailor_fairy.png")
    .add("images/sailor_fairy_selected.png")
    .add("images/split_fairy.png")
    .add("images/split_fairy_selected.png")
    .add("images/cat.png")
    .add("images/progress_comb.png")
    .add("images/progress_dirty.png")
    .add("images/welcome_princess.png")
    .add("sounds/oh_no.mp4")
    .add("sounds/ending.mp4")
    .add("sounds/tool_select.mp4")
    .load(setup);

    //Define any variables that are used in more than one function
    let mode, tool, music, sound, musicSprite, progress;
    let butt_start, butt_restart, butt_music, butt_sound;
    let BG_start, BG_win, BG_lose;
    let msg_status;
    let msg_menu_1;
    let msg_menu_2;
    let cat, goo_fairy, goo_fairy_selected, sailor_fairy, sailor_fairy_selected, sax_fairy, sax_fairy_selected, chibi, welcome_princess;
    let blob, comb_short, back, box, message, message2, state, tilingSprite, jammers;
    let knot_1, knot_2, knot_3, knot_11, knot_21, knot_31, knot_12, knot_22, knot_32, knot_13, knot_23, knot_33, progress_comb, progress_dirty;
    let Warning_yellow, Warning_orange, Warning_red, Warning_yellow2, Warning_orange2, Warning_red2;
    let MENU_MAX = 2 ;
    let MENU_X0 = 100;
    let MENU_Y0 = 300;
    let MENU_OFFSET = 170;
    let menu_cursor = 0;

    // create a texture from an image path
    const textureMessyHair = PIXI.Texture.from('images/messy_hair.png');
    const goo_fairy_txt = PIXI.Texture.from('images/goo_fairy.png');
    const goo_fairy_selected_txt = PIXI.Texture.from('images/goo_fairy_selected.png');
    const sailor_fairy_txt = PIXI.Texture.from('images/sailor_fairy.png');
    const sailor_fairy_selected_txt = PIXI.Texture.from('images/sailor_fairy_selected.png');
    const sax_fairy_txt = PIXI.Texture.from('images/split_fairy.png');
    const sax_fairy_selected_txt = PIXI.Texture.from('images/split_fairy_selected.png');
    const chibi_cry_txt = PIXI.Texture.from('images/chibi_cry1.png');
    const chibi_happy_txt = PIXI.Texture.from('images/chibi_happy1.png');
    const chibi_oups_txt = PIXI.Texture.from('images/chibi_oups1.png');
    const warning_yellow1_txt = PIXI.Texture.from('images/Warning-yellow.png');
    const warning_yellow2_txt = PIXI.Texture.from('images/Warning-yellow.png');
    const warning_orange1_txt = PIXI.Texture.from('images/Warning-orange.png');
    const warning_orange2_txt = PIXI.Texture.from('images/Warning-orange2.png');
    const warning_red1_txt = PIXI.Texture.from('images/Warning-red.png');
    const warning_red2_txt = PIXI.Texture.from('images/Warning-red2.png');


    // Css style for icons
    const defaultIcon = "url('images/wand.png'),auto";
    const hoverIcon = "url('images/cat.png'),auto";

    // Add custom cursor styles
    app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
    app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
    const progress_offset = 100;

    let count = 0;

    function setup() {
    mode = 'start';
    tool = 'knot';
    music = false;
    sound = true;
    progress = 0;
    //Create the box
    box = new PIXI.Graphics();
    box.beginFill(0xCCFF99);
    box.drawRect(0, 0, 64, 64);
    box.endFill();
    box.x = 120;
    box.y = 96;
    app.stage.addChild(box);

    //Create the `BG` sprite
    back = new Sprite(resources["images/BG_empty.png"].texture);
    back.x = 0;
    back.y = 0;
    back.vx = 0;
    back.vy = 0;
    app.stage.addChild(back);

    //Create the `messy_hair` sprite
    messy_hair = new Sprite(resources["images/messy_hair.png"].texture);
    messy_hair.x = 540;
    messy_hair.y = 370;
    messy_hair.vx = 0;
    messy_hair.vy = 0;
    //app.stage.addChild(messy_hair);
    tilingSpriteMessyHair = new PIXI.TilingSprite(
        textureMessyHair,
        961,
        2160,
    );
    tilingSpriteMessyHair.x=540;
    tilingSpriteMessyHair.y=370;
    app.stage.addChild(tilingSpriteMessyHair);

    //Create the `nice_hair` sprite
    nice_hair = new Sprite(resources["images/nice_hair.png"].texture);
    nice_hair.x = 540;
    nice_hair.y = 370-1080;
    nice_hair.vx = 0;
    nice_hair.vy = 0;
    app.stage.addChild(nice_hair);

    //Create the `comb_short` sprite
    comb_short = new Sprite(resources["images/comb_short.png"].texture);
    comb_short.x = 521;
    comb_short.y = 176;
    comb_short.vx = 0;
    comb_short.vy = 0;
    app.stage.addChild(comb_short);

    //Create the `progress_dirty` sprite
    progress_dirty = new Sprite(resources["images/progress_dirty.png"].texture);
    progress_dirty.x = 1600;
    progress_dirty.y = 176-progress_offset;
    progress_dirty.vx = 0;
    progress_dirty.vy = 0;
    app.stage.addChild(progress_dirty);

    //Create the `progress_comb` sprite
    progress_comb = new Sprite(resources["images/progress_comb.png"].texture);
    progress_comb.x = 1600;
    progress_comb.y = 176-progress_offset;
    progress_comb.vx = 0;
    progress_comb.vy = 0;
    app.stage.addChild(progress_comb);

    //text for progression
    let style = new TextStyle({
    fontFamily: "sans-serif",
    fontSize: 18,
    fill: "white",
    });
    message = new Text("100 m", style);
    message.position.set(1700, 650-progress_offset);
    message.interactive = true;
    //message.on('pointerdown', () => onWinGame())
    app.stage.addChild(message);


    //Create the text sprite
    message2 = new Text("0 m", style);
    message2.position.set(1700, 180-progress_offset);
    app.stage.addChild(message2);


    //Create the `goo_fairy` sprite
    goo_fairy = new Sprite(goo_fairy_txt);
    goo_fairy.x = 50;
    goo_fairy.y = 50;
    goo_fairy.vx = 0;
    goo_fairy.vy = 0;
    goo_fairy.tool = 'gum';
    goo_fairy.toolIcon = defaultIcon;
    goo_fairy.sel_txt = goo_fairy_selected_txt;
    goo_fairy.unsel_txt = goo_fairy_txt;
    goo_fairy.interactive = true;
    goo_fairy.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(goo_fairy);


    //Create the `sailor_fairy` sprite
    sailor_fairy = new Sprite(sailor_fairy_txt);
    sailor_fairy.x = 50;
    sailor_fairy.y = 400;
    sailor_fairy.vx = 0;
    sailor_fairy.vy = 0;
    sailor_fairy.tool = 'knot';
    sailor_fairy.toolIcon = defaultIcon;
    sailor_fairy.sel_txt = sailor_fairy_selected_txt;
    sailor_fairy.unsel_txt = sailor_fairy_txt;
    sailor_fairy.interactive = true;
    sailor_fairy.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(sailor_fairy);


    //Create the `sax_fairy` sprite
    sax_fairy = new Sprite(sax_fairy_txt);
    sax_fairy.x = 50;
    sax_fairy.y = 750;
    sax_fairy.vx = 0;
    sax_fairy.vy = 0;
    sax_fairy.tool = 'sax';
    sax_fairy.toolIcon = defaultIcon;
    sax_fairy.sel_txt = sax_fairy_selected_txt;
    sax_fairy.unsel_txt = sax_fairy_txt;
    sax_fairy.interactive = true;
    sax_fairy.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(sax_fairy);

    jammers = [];
    //Create the `knot_1` sprite
    knot_1 = new Sprite(resources["images/knot.png"].texture);
    knot_1.x = 700;
    knot_1.y = 1080;
    knot_1.vx = 0;
    knot_1.vy = 0;
    knot_1.killedby = 'knot';
    knot_1.interactive = true;
    knot_1.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_1);
    jammers.push(knot_1);

    //Create the `knot_2` sprite
    knot_2 = new Sprite(resources["images/gum1.png"].texture);
    knot_2.x = 850;
    knot_2.y = 1280;
    knot_2.vx = 0;
    knot_2.vy = 0;
    knot_2.killedby = 'gum';
    knot_2.interactive = true;
    knot_2.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_2);
    jammers.push(knot_2);

    //Create the `knot_3` sprite
    knot_3 = new Sprite(resources["images/knot_1.png"].texture);
    knot_3.x = 950;
    knot_3.y = 1280;
    knot_3.vx = 0;
    knot_3.vy = 0;
    knot_3.killedby = 'sax';
    knot_3.interactive = true;
    knot_3.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_3);
    jammers.push(knot_3);
    //Create the `knot_1` sprite
    knot_11 = new Sprite(resources["images/knot.png"].texture);
    knot_11.x = 700;
    knot_11.y = 1080;
    knot_11.vx = 0;
    knot_11.vy = 0;
    knot_11.killedby = 'knot';
    knot_11.interactive = true;
    knot_11.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_11);
    jammers.push(knot_11);

    //Create the `knot_2` sprite
    knot_21 = new Sprite(resources["images/gum2.png"].texture);
    knot_21.x = 850;
    knot_21.y = 1280;
    knot_21.vx = 0;
    knot_21.vy = 0;
    knot_21.killedby = 'gum';
    knot_21.interactive = true;
    knot_21.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_21);
    jammers.push(knot_21);

    //Create the `knot_31` sprite
    knot_31 = new Sprite(resources["images/knot_1.png"].texture);
    knot_31.x = 950;
    knot_31.y = 1280;
    knot_31.vx = 0;
    knot_31.vy = 0;
    knot_31.killedby = 'sax';
    knot_31.interactive = true;
    knot_31.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_31);
    jammers.push(knot_31);
    //Create the `knot_12` sprite
    knot_12 = new Sprite(resources["images/knot.png"].texture);
    knot_12.x = 700;
    knot_12.y = 1080;
    knot_12.vx = 0;
    knot_12.vy = 0;
    knot_12.killedby = 'knot';
    knot_12.interactive = true;
    knot_12.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_12);
    jammers.push(knot_12);

    //Create the `knot_22` sprite
    knot_22 = new Sprite(resources["images/gum1.png"].texture);
    knot_22.x = 850;
    knot_22.y = 1280;
    knot_22.vx = 0;
    knot_22.vy = 0;
    knot_22.killedby = 'gum';
    knot_22.interactive = true;
    knot_22.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_22);
    jammers.push(knot_22);

    //Create the `knot_32` sprite
    knot_32 = new Sprite(resources["images/knot_1.png"].texture);
    knot_32.x = 950;
    knot_32.y = 1280;
    knot_32.vx = 0;
    knot_32.vy = 0;
    knot_32.killedby = 'sax';
    knot_32.interactive = true;
    knot_32.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_32);
    jammers.push(knot_32);
    //Create the `knot_13` sprite
    knot_13 = new Sprite(resources["images/knot.png"].texture);
    knot_13.x = 700;
    knot_13.y = 1080;
    knot_13.vx = 0;
    knot_13.vy = 0;
    knot_13.killedby = 'knot';
    knot_13.interactive = true;
    knot_13.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_13);
    jammers.push(knot_13);

    //Create the `knot_2` sprite
    knot_23 = new Sprite(resources["images/gum2.png"].texture);
    knot_23.x = 850;
    knot_23.y = 1280;
    knot_23.vx = 0;
    knot_23.vy = 0;
    knot_23.killedby = 'gum';
    knot_23.interactive = true;
    knot_23.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_23);
    jammers.push(knot_23);

    //Create the `knot_3` sprite
    knot_33 = new Sprite(resources["images/knot_1.png"].texture);
    knot_33.x = 950;
    knot_33.y = 1280;
    knot_33.vx = 0;
    knot_33.vy = 0;
    knot_33.killedby = 'sax';
    knot_33.interactive = true;
    knot_33.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);
    app.stage.addChild(knot_33);
    jammers.push(knot_33);

    //Create the `Warning_yellow` sprite
    Warning_yellow = new Sprite(resources["images/Warning-yellow.png"].texture);
    Warning_yellow.x = 480;
    Warning_yellow.y = 1080;
    Warning_yellow.vx = 0;
    Warning_yellow.vy = 0;
    app.stage.addChild(Warning_yellow);

    //Create the `Warning_orange` sprite
    Warning_orange = new Sprite(resources["images/Warning-orange.png"].texture);
    Warning_orange.x = 480;
    Warning_orange.y = 1080;
    Warning_orange.vx = 0;
    Warning_orange.vy = 0;
    app.stage.addChild(Warning_orange);

    //Create the `Warning_red` sprite
    Warning_red = new Sprite(resources["images/Warning-red.png"].texture);
    Warning_red.x = 480;
    Warning_red.y = 1080;
    Warning_red.vx = 0;
    Warning_red.vy = 0;
    app.stage.addChild(Warning_red);

    //Create the `Warning_yellow2` sprite
    Warning_yellow2 = new Sprite(resources["images/Warning-yellow.png"].texture);
    Warning_yellow2.x = 1460;
    Warning_yellow2.y = 1080;
    Warning_yellow2.vx = 0;
    Warning_yellow2.vy = 0;
    app.stage.addChild(Warning_yellow2);

    //Create the `Warning_orange2` sprite
    Warning_orange2 = new Sprite(resources["images/Warning-orange.png"].texture);
    Warning_orange2.x = 1460;
    Warning_orange2.y = 1080;
    Warning_orange2.vx = 0;
    Warning_orange2.vy = 0;
    app.stage.addChild(Warning_orange2);

    //Create the `Warning_red2` sprite
    Warning_red2 = new Sprite(resources["images/Warning-red.png"].texture);
    Warning_red2.x = 1460;
    Warning_red2.y = 1080;
    Warning_red2.vx = 0;
    Warning_red2.vy = 0;
    app.stage.addChild(Warning_red2);


    const sound_init_texture = PIXI.Texture.from('sounds/tool_select.mp4');
    musicSprite = new PIXI.Sprite(sound_init_texture);

    // out of screen
    musicSprite.x = app.screen.width+200;
    musicSprite.y = app.screen.height+200;
    musicSprite.width = 1;
    musicSprite.height = 1;

    app.stage.addChild(musicSprite);

    //Create the `chibi` sprite
    chibi = new Sprite(chibi_happy_txt);
    chibi.x = 1350;
    chibi.y = 1080;
    app.stage.addChild(chibi);

    //Create the `BG_start` sprite
    BG_start = new Sprite(resources["images/BG_start.png"].texture);
    BG_start.x = 0;
    BG_start.y = 0;
    BG_start.vx = 0;
    BG_start.vy = 0;
    app.stage.addChild(BG_start);

    //Create the `welcome_princess` sprite
    welcome_princess = new Sprite(resources["images/welcome_princess.png"].texture);
    welcome_princess.x = 0;
    welcome_princess.y = 0;
    welcome_princess.vx = 0;
    welcome_princess.vy = 0;
    //app.stage.addChild(welcome_princess);


    //Create the `BG_lose` sprite
    BG_lose = new Sprite(resources["images/BG_lose.png"].texture);
    BG_lose.x = 0;
    BG_lose.y = 1080;
    BG_lose.vx = 0;
    BG_lose.vy = 0;
    app.stage.addChild(BG_lose);


    //Create the `BG_win` sprite
    BG_win = new Sprite(resources["images/BG_win.png"].texture);
    BG_win.x = 0;
    BG_win.y = 1080;
    BG_win.vx = 0;
    BG_win.vy = 0;
    app.stage.addChild(BG_win);


    butt_restart = new Sprite(resources["images/comb_again.png"].texture);
    butt_restart.x = 950;
    butt_restart.y = 1280;
    //butt_restart.y = 1280;
    butt_restart.interactive = true;
    butt_restart.on('pointerdown', onStartGame);


    //Create the text sprite
    let style2 = new TextStyle({
    fontFamily: "sans-serif",
    fontSize: 35,
    fill: "black",
    });
    butt_music = new Text("Music", style2);
    butt_music.position.set(8, 8);
    butt_music.interactive = true;
    butt_music.on('pointerdown', () => music = !music)
    //app.stage.addChild(butt_music);


    //Create the text sprite
    let style3 = new TextStyle({
    fontFamily: "sans-serif",
    fontSize: 35,
    fill: "pink",
    });
    butt_sound = new Text("Sounds On/Off", style3);
    butt_sound.position.set(108, 8);
    butt_sound.interactive = true;
    butt_sound.on('pointerdown', () => sound = !sound)
    app.stage.addChild(butt_sound);

    //Create the text sprite
    let style4 = new TextStyle({
    fontFamily: "Bodoni MT", // "chalkduster"
    fontSize: 190,
    //fontStyle: 'underline',
    fill: "pink",
    });
    msg_status = new Text("                                     .", style4);
    msg_status.position.set(100, 300);
    msg_status.interactive = true;
    //msg_status.on('pointerdown', onStartGame)
    app.stage.addChild(msg_status);

    msg_menu_1 = new Text("Start game", style4);
    msg_menu_1.position.set(MENU_X0+80, MENU_Y0);
    console.log('pos1 ',MENU_X0+80, ' ', MENU_Y0);
    msg_menu_1.interactive = true;
    //msg_menu_1.on('pointerdown', onStartGame)
    app.stage.addChild(msg_menu_1);

    msg_menu_2 = new Text("Settings", style4);
    msg_menu_2.position.set(MENU_X0+80, MENU_Y0+MENU_OFFSET);
    console.log('pos2 ',MENU_X0+80, ' ', MENU_Y0+MENU_OFFSET);
    msg_menu_2.interactive = true;
    //msg_menu_2.on('pointerdown', onStartGame)
    app.stage.addChild(msg_menu_2);


    //Create the `cat` sprite
    cat = new Sprite(resources["images/cat.png"].texture);
    cat.x = MENU_X0;
    cat.y = MENU_Y0+80;
    cat.vx = 0;
    cat.vy = 0;
    cat.toolIcon = defaultIcon;
    cat.interactive = true;
    /*cat.on('pointerdown', onButtonDown)
        .on('pointerup', onButtonUp)
        .on('pointerupoutside', onButtonUp)
        .on('pointerover', onButtonOver)
        .on('pointerout', onButtonOut);*/
    app.stage.addChild(cat);

    //Capture the keyboard arrow keys
    let left = keyboard(37),
      up = keyboard(38),
      right = keyboard(39),
      down = keyboard(40),
      enter = keyboard(13),
      space = keyboard()
      ;

    //Left arrow key `press` method
    left.press = function() {

        //Change the cat's velocity when the key is pressed
        //cat.vx = -5;
        //cat.vy = 0;
    };

    //Left arrow key `release` method
    left.release = function() {

        //If the left arrow has been released, and the right arrow isn't down,
        //and the cat isn't moving vertically:
        //Stop the cat
        /*if (!right.isDown && cat.vy === 0) {
          cat.vx = 0;
        }*/
    };

    //Up
    up.press = function() {

        if(mode == 'start') {
            //menu_cursor = (menu_cursor +1)% MENU_MAX;

        } else {
            cat.vy = -5;
            cat.vx = 0;
        }
    };
    up.release = function() {
        if(mode == 'start') {
            menu_cursor = (menu_cursor +1)% MENU_MAX;
            cat.x = MENU_X0;
            cat.y = MENU_Y0 +80 + menu_cursor*MENU_OFFSET;
        } else {
            if (!down.isDown && cat.vx === 0) {
              cat.vy = 0;
            }
        }
    };

    //Right
    right.press = function() {

    };
    right.release = function() {

    };

    //Down
    down.press = function() {
    };
    down.release = function() {
    };

    //Set the game state
    state = play;

    //Start the game loop
    app.ticker.add(delta => gameLoop(delta));
}

    function onStartGame() {
        resetJammers();
        msg_status.y = 1080;
        BG_start.y = 1080;
        BG_win.y = 1080;
        BG_lose.y = 1080;
        butt_restart.y=1080;
        progress = 0;
        welcome_princess.y = 1080;
        chibi.y = 1080-771;
        onPlayVideo('ending', true);
        mode = 'normal';
    }

    function onWinGame() {
        resetJammers();
        msg_status.text = 'Click here to restart';
        msg_status.y = 300;
        msg_status.x = 1100;
        BG_start.y = 1080;
        chibi.y=1080;
        BG_win.y = 0;
        BG_lose.y = 1080;
        onPlayVideo('ending', true);
        mode = 'win';
    }

    function onLoseGame() {
        resetJammers();
        msg_status.text = '            ';
        msg_status.y = 400;
        msg_status.x = 1130;
        chibi.y=1080
        BG_start.y = 1080;
        BG_win.y = 1080;
        BG_lose.y = 0;
        butt_restart.y = 800;
        onPlayVideo('ending', true);
        mode = 'lose';
    }

    function onButtonDown() {
        let my_string = 'butt down '+this.killedby + ' t('+this.tool+')';
        this.isdown = true;
        if(this.textureButtonDown){
            this.texture = textureButtonDown;
        }
        if(this.killedby && this.killedby === tool){
            this.x = 580+randomInt(0,700);
            this.y = 1080+randomInt(50,1600);
            my_string += ' killed!';
        }

        if(this.tool){
            tool = this.tool;
            onPlayVideo('tool_select');
            updateToolTxt(goo_fairy);
            updateToolTxt(sailor_fairy);
            updateToolTxt(sax_fairy);
        }
        this.alpha = 1;

    }

    function updateToolTxt(fairy) {
        if(tool === fairy.tool){
            fairy.texture = fairy.sel_txt;
        } else {
            fairy.texture = fairy.unsel_txt;
        }
    }

    function onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            if(this.textureButtonOver){
                this.texture = textureButtonOver;
            }
        } else {
            if(this.textureButton){
                this.texture = textureButton;
            }
        }
    }

    function onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        if(this.textureButtonOver){
            this.texture = textureButtonOver;
        }
    }

    function onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        if(this.textureButton){
            this.texture = textureButton;
        }
    }
    function onPlayVideo(sound_name, is_music) {

        if((!is_music && sound) || (is_music && music)) {
            // create a video texture from a path
            const texture = PIXI.Texture.from('sounds/'+sound_name+'.mp4');

            if(!is_music) {
                // create a new Sprite using the video texture (yes it's that easy)
                const videoSprite = new PIXI.Sprite(texture);

                // Stetch the fullscreen
                videoSprite.x = app.screen.width+200;
                videoSprite.y = app.screen.height+200;
                videoSprite.width = 1;
                videoSprite.height = 1;

                app.stage.addChild(videoSprite);
            } else {
                // need to be able to interrupt music when muted or screen changes. so for now no music :(
                /*app.stage.removeChild(musicSprite);
                musicSprite.texture.source.pause();
                musicSprite.texture.dispose();
                musicSprite.texture = texture;

                app.stage.addChild(musicSprite);*/
            }
        }
    }

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gameLoop(delta){

        //Update the current game state:
        state(delta);
    }

    function isJammersTouchingComb() {
        for(jammer in jammers){
            if(jammer.y <= tilingSpriteMessyHair.y){
                return true;
            }
        }
        return false;
    }

    function isJammersTouchingComb() {
        for (var i = 0; i < jammers.length; i++) {
            if(jammers[i].y <= tilingSpriteMessyHair.y){
                return true;
            }
        }
        return false;
    }

    function isJammersTouchingTop() {
        for (var i = 0; i < jammers.length; i++) {
            if(jammers[i].y <= 10){
                return true;
            }
        }
        return false;
    }


    function resetJammers(){
        for (var i = 0; i < jammers.length; i++) {
            jammers[i].x = 580+randomInt(0,600);
            jammers[i].y = 1080+randomInt(50,1600);
            jammers[i].vy = 0;
        }
    }

    function moveJammers(speed){
        var difficulty = 4; // 0 easy to 9 hardcore
        for (var i = 0; i < jammers.length; i++) {
            if(i<=3+difficulty){
                jammers[i].y -= speed;
                jammers[i].vy = 0;
                }
        }
    }

    function play(delta) {
        let speedMultiplier = 1;
        let normalSpeed = 5*speedMultiplier;
        let recoverSpeed = 1*speedMultiplier;
        let dangerSpeed = 1*speedMultiplier;
        let moveSpeed = mode === 'danger' ? dangerSpeed : normalSpeed;
        //moveSpeed = mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed;

        // evolution
        switch (mode) {
            case 'normal':
                if(isJammersTouchingComb()) {
                    onPlayVideo('oh_no');
                    chibi.texture = chibi_oups_txt;
                    mode = 'danger';
                }
                break;
            case 'danger':
                if(!isJammersTouchingComb()) {
                    mode = 'recover';
                    chibi.texture = chibi_oups_txt;
                }
                break;
            case 'recover':
                if(isJammersTouchingComb()) {
                    onPlayVideo('oh_no');
                    chibi.texture = chibi_oups_txt;
                    mode = 'danger';
                }
                if(370 <= tilingSpriteMessyHair.y) {
                    mode = 'normal';
                    chibi.texture = chibi_happy_txt;
                    tilingSpriteMessyHair.y = 370;
                    nice_hair.y = 370-1080;
                    comb_short.y=176;
                }
                if (progress_comb.y >= 660-progress_offset){
                    progress_comb.y = 174-progress_offset;
                    onWinGame();
                }
                break;
        }

        // action
        switch (mode) {
            case 'normal':
                tilingSpriteMessyHair.tilePosition.vy = -moveSpeed;
                tilingSpriteMessyHair.vy = 0;
                comb_short.vy=0;
                Warning_yellow.y = 1080;
                Warning_orange.y = 1080;
                Warning_red.y = 1080;
                Warning_yellow2.y = 1080;
                Warning_orange2.y = 1080;
                Warning_red2.y = 1080;
                progress++;
                break;
            case 'danger':
                tilingSpriteMessyHair.tilePosition.vy = 0;
                tilingSpriteMessyHair.vy = -moveSpeed;
                Warning_yellow.y = 0;
                Warning_yellow2.y = 0;
                if(tilingSpriteMessyHair.y <= 200){
                    Warning_red.y = 0;
                    Warning_red2.y = 0;
                    chibi.texture = chibi_cry_txt;
                    switch (tilingSpriteMessyHair.y % 60){
                        case 0:
                            Warning_red.texture = warning_red1_txt;
                            Warning_red2.texture = warning_red1_txt;
                        break;
                        case 10:
                            Warning_red.texture = warning_orange1_txt;
                            Warning_red2.texture = warning_orange1_txt;
                        break;
                        case 20:
                            Warning_red.texture = warning_yellow1_txt;
                            Warning_red2.texture = warning_yellow1_txt;
                        break;
                        case 30:
                            Warning_red.texture = warning_red2_txt;
                            Warning_red2.texture = warning_red2_txt;
                        break;
                        case 40:
                            Warning_red.texture = warning_orange2_txt;
                            Warning_red2.texture = warning_orange2_txt;
                        break;
                        case 50:
                            Warning_red.texture = warning_yellow2_txt;
                            Warning_red2.texture = warning_yellow2_txt;
                        break;
                    }
                } else {
                    chibi.texture = chibi_oups_txt;
                    Warning_red.y = 1080;
                    Warning_red2.y = 1080;
                    switch (tilingSpriteMessyHair.y % 40){
                        case 0:
                            Warning_yellow.texture = warning_orange1_txt;
                            Warning_yellow2.texture = warning_orange1_txt;
                        break;
                        case 10:
                            Warning_yellow.texture = warning_yellow1_txt;
                            Warning_yellow2.texture = warning_yellow1_txt;
                        break;
                        break;
                        case 20:
                            Warning_yellow.texture = warning_orange2_txt;
                            Warning_yellow2.texture = warning_orange2_txt;
                        break;
                        case 30:
                            Warning_yellow.texture = warning_yellow2_txt;
                            Warning_yellow2.texture = warning_yellow2_txt;
                        break;
                    }
                }
                break;

            case 'recover':
                tilingSpriteMessyHair.tilePosition.vy = -moveSpeed;
                tilingSpriteMessyHair.vy = recoverSpeed;
                Warning_yellow.y = 1080;
                Warning_orange.y = 1080;
                Warning_red.y = 1080;
                Warning_yellow2.y = 1080;
                Warning_orange2.y = 1080;
                Warning_red2.y = 1080;
                progress++;

                break;

             default:
                moveSpeed =0;
                recoverSpeed =0;
                tilingSpriteMessyHair.vy = 0;
                tilingSpriteMessyHair.tilePosition.vy = 0;
                comb_short.vy=0;
                tilingSpriteMessyHair.y = 370;
                nice_hair.y = 370-1080;
                comb_short.y=176;
                Warning_yellow.y = 1080;
                Warning_orange.y = 1080;
                Warning_red.y = 1080;
                Warning_yellow2.y = 1080;
                Warning_orange2.y = 1080;
                Warning_red2.y = 1080;

        }

        progress_comb.y = 174+(progress/10)-progress_offset;

        if(isJammersTouchingTop()) {
            onLoseGame();
        }


        //use the cat's velocity to make it move
        /*cat.x += cat.vx;
        cat.y += cat.vy;*/
        tilingSpriteMessyHair.tilePosition.y += tilingSpriteMessyHair.tilePosition.vy;
        tilingSpriteMessyHair.y += tilingSpriteMessyHair.vy;
        comb_short.y += tilingSpriteMessyHair.vy;
        nice_hair.y += tilingSpriteMessyHair.vy;

        moveJammers(mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed);

        //check for a collision between the cat and the box
        if (hitTestRectangle(cat, box)) {

            //if there's a collision, change the message text
            //and tint the box red
            message.text = "hit!";
            box.tint = 0xff3300;
        } else {

            //if there's no collision, reset the message
            //text and the box's color
            //message.text = "No collision...("+cat.x+", "+cat.y+")";
            box.tint = 0xccff99;
        }
    }

    //The `hitTestRectangle` function
    function hitTestRectangle(r1, r2) {

        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

        //A collision might be occurring. Check for a collision on the y axis
        if (Math.abs(vy) < combinedHalfHeights) {

          //There's definitely a collision happening
          hit = true;
        } else {

          //There's no collision on the y axis
          hit = false;
        }
        } else {

        //There's no collision on the x axis
        hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
    };


    //The `keyboard` helper function
    function keyboard(keyCode) {
        let key = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;

        //The `downHandler`
        key.downHandler = function(event) {
            if (event.keyCode === key.code) {
              if (key.isUp && key.press) key.press();
              key.isDown = true;
              key.isUp = false;
            }
            event.preventDefault();
        };

        //The `upHandler`
        key.upHandler = function(event) {
            if (event.keyCode === key.code) {
              if (key.isDown && key.release) key.release();
              key.isDown = false;
              key.isUp = true;
            }
            event.preventDefault();
        };

        //Attach event listeners
        window.addEventListener(
            "keydown", key.downHandler.bind(key), false
        );
        window.addEventListener(
            "keyup", key.upHandler.bind(key), false
        );
        return key;
    }