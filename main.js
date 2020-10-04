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
    //console.log('init ratio : ',ratio)
    //console.log('inner : ',window.innerWidth , window.innerHeight)
    if (window.innerWidth / window.innerHeight >= ratio) {
      //  console.log('innerWidth bigger : ',window.innerWidth / window.innerHeight)
        //console.log('adapt : ',window.innerHeight /size[1])
        ///newRatio = window.innerHeight * ratio/size[0];
        newRatio = 0.9*window.innerHeight /size[1];

    } else {
        //console.log('innerWidth innerHeight : ',window.innerWidth / window.innerHeight)
        //console.log('adapt : ',window.innerWidth / size[0])
        newRatio = 0.9*window.innerWidth / size[0];
    }

    //console.log('newRatio : ',newRatio)
    if(newRatio <0.3){
        newRatio = 0.3;
    }

    if(newRatio >1){
        newRatio = 1;
    }

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

    sound_bank = {
        'Catch_gold' : 'Catch_gold.mp4',
        'Gun_switch' : 'Gun_switch.mp4',
        'signal_10sec_left' : 'signal_10sec_left.mp4',
        'claps_end_of_level' : 'claps_end_of_level.mp4',
        'Menu_musique' : 'Menu_musique.mp4',
        'take_a_bonus' : 'take_a_bonus.mp4',
        'Countdown_Start_Race' : 'Countdown_Start_Race.mp4',
        'musique_game' : 'musique_game.mp4',
        'tool_select' : 'tool_select.mp4',
        'Crash_on_the_roller_coaster' : 'Crash_on_the_roller_coaster.mp4',
        'oh_no' : 'oh_no.mp4',
        'upgrade_weapon' : 'upgrade_weapon.mp4',
        'Cross_finish_line' : 'Cross_finish_line.mp4',
        'Shot_Deagle_Weapon_1' : 'Shot_Deagle_Weapon_1.mp4',
        'when_lose_because_no_time' : 'when_lose_because_no_time.mp4',
        'ending' : 'ending.mp4',
        'shot_lazer_weapon_2' : 'shot_lazer_weapon_2.mp4'
    };

    loader
    .add("images/BG_empty.png")
    .add("images/FlagsSolo1.3.png")
    .add("images/FlagsSolo2.3.png")
    .add("images/Hotairbaloon2SOLO.png")
    .add("images/HotairbaloonSOLO.png")
    .add("images/BG_win.png")
    .add("images/BG_lose.png")
    .add("images/BG_start.png")
    .add("images/comb_again.png")
    .add("images/messy_hair.png")
    .add("images/nice_hair.png")
    .add("images/rollerCoaster1.png")
    .add("images/blob.png")
    .add("images/wand.png")
    .add("images/Crosshair_lazer_weaponQUARTER-NO-BG.png")
    .add("images/knot.png")
    .add("images/Note_1.png")
    .add("images/Note_2.png")
    .add("images/Note_3.png")
    .add("images/Note_4.png")
    .add("images/Note_5.png")
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
    .add("images/static_ham_wheel.png")
    .add("images/dynamic_ham_wheel.png")
    .add("images/progress_comb.png")
    .add("images/progress_dirty.png")
    .add("images/welcome_princess.png")
    //.add("images/partition.png")
    .add("images/assault_crosshair_gun3.png")
    .add("images/curseur_Menu.png")
    .add("images/BG_2ndloop.png")
    .add("images/OuterMagicGates.png")
    .add("images/Weapons/Weapon1 - Peanut1.3.png")
    .add("images/Weapons/Weapon2 - Lazer3.3.png")
    .add("images/portee vide3.png")
    .add("images/Skills_bar2.png")
    .add("images/Weapons/slingshot charged 1.png")
    .add("images/Weapons/Weapon2.png")
    .add("images/Weapons/Weapon3.png")
    .add("images/Weapons/Weapon2 - Lazer 123 .png")
    .add("sounds/"+sound_bank["Catch_gold"])
    .add("sounds/"+sound_bank["Gun_switch"])
    .add("sounds/"+sound_bank["signal_10sec_left"])
    .add("sounds/"+sound_bank["claps_end_of_level"])
    .add("sounds/"+sound_bank["Menu_musique"])
    .add("sounds/"+sound_bank["take_a_bonus"])
    .add("sounds/"+sound_bank["Countdown_Start_Race"])
    .add("sounds/"+sound_bank["musique_game"])
    .add("sounds/"+sound_bank["tool_select"])
    .add("sounds/"+sound_bank["Crash_on_the_roller_coaster"])
    .add("sounds/"+sound_bank["oh_no"])
    .add("sounds/"+sound_bank["upgrade_weapon"])
    .add("sounds/"+sound_bank["Cross_finish_line"])
    .add("sounds/"+sound_bank["Shot_Deagle_Weapon_1"])
    .add("sounds/"+sound_bank["when_lose_because_no_time"])
    .add("sounds/"+sound_bank["ending"])
    .add("sounds/"+sound_bank["shot_lazer_weapon_2"])

    .load(setup);

    //Define any variables that are used in more than one function
    let timeInSec = 0;
    let mode, tool, music, sound, BGmusicSprite, musicSprite, progress;
    let butt_start, butt_restart, butt_music, butt_sound;
    let BG_start, BG_win, BG_lose;
    let msg_status;
    let msg_menu_1;
    let msg_menu_2;
    let hamster, goo_fairy, goo_fairy_selected, sailor_fairy, sailor_fairy_selected, sax_fairy, sax_fairy_selected, chibi, welcome_princess;
    let skills_bar, weapon1,weapon2,weapon3;
    let blob, rollerCoaster1, back, BG_baloons1,BG_baloons2,BG_flags1,BG_flags2 , looping,outer_gates, box, message, message2, state, tilingSprite, jammers;
    let knot_1, knot_2, knot_3, knot_11, knot_21, knot_31, knot_12, knot_22, knot_32, knot_13, knot_23, knot_33, progress_comb, progress_dirty;
    let Warning_yellow, Warning_orange, Warning_red, Warning_yellow2, Warning_orange2, Warning_red2;
    let bullets;
    let bullet_peanut1, bullet2_peanut1, bullet3_peanut1, bullet4_peanut1;
    let bullet_lazer1,  bullet2_lazer1, bullet3_lazer1, bullet4_lazer1;
    let MENU_MAX = 2 ;
    let MENU_X0 = 100;
    let MENU_Y0 = 300;
    let MENU_OFFSET = 170;
    let menu_cursor = 0;
    let ROLLER_COASTER_LEFT = 150;
    let ROLLER_COASTER_RIGHT = 1760;
    let ROLLER_COASTER_LOW = 900;

    // create a texture from an image path
    const textureMessyHair = PIXI.Texture.from('images/messy_hair.png');
    const textureHamster = PIXI.Texture.from('images/dynamic_ham_wheel.png');
    const textureLazer = PIXI.Texture.from('images/Weapons/Weapon2 - Lazer 123 .png');
    const textureSkillbar= PIXI.Texture.from('images/Skills_bar2.png');
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
    const defaultIcon = "url('images/Crosshair_lazer_weaponQUARTER-NO-BG.png'),auto";
    const hoverIcon = "url('images/Crosshair_lazer_weaponQUARTER-NO-BG.png'),auto";

    // Add custom cursor styles
    app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
    app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
    const progress_offset = 100;

    let count = 0;

    function setup() {
        mode = 'start';
        tool = 'lazer';
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
        back.interactive = true;
        back.on('pointerdown', onButtonDown);
        app.stage.addChild(back);

        //Create hot air balloons for the `BG` sprite
        BG_baloons1 = new Sprite(resources["images/Hotairbaloon2SOLO.png"].texture);
        BG_baloons1.x = 0;
        BG_baloons1.y = 0;
        BG_baloons1.vx = 0;
        BG_baloons1.vy = 0;
        BG_baloons1.interactive = true;
        BG_baloons1.on('pointerdown', onButtonDown);
        app.stage.addChild(BG_baloons1);

        BG_baloons2 = new Sprite(resources["images/HotairbaloonSOLO.png"].texture);
        BG_baloons2.x = 0;
        BG_baloons2.y = 0;
        BG_baloons2.vx = 0;
        BG_baloons2.vy = 0;
        BG_baloons2.interactive = true;
        BG_baloons2.on('pointerdown', onButtonDown);
        app.stage.addChild(BG_baloons2);

        //Create flags for the `BG` sprite
        BG_flags1 = new Sprite(resources["images/FlagsSolo1.3.png"].texture);
        BG_flags1.x = 0;
        BG_flags1.y = 0;
        BG_flags1.vx = 0;
        BG_flags1.vy = 0;
        BG_flags1.interactive = true;
        BG_flags1.on('pointerdown', onButtonDown);
        app.stage.addChild(BG_flags1);

        BG_flags2 = new Sprite(resources["images/FlagsSolo2.3.png"].texture);
        BG_flags2.x = 3;
        BG_flags2.y = size[1];
        BG_flags2.vx = 0;
        BG_flags2.vy = 0;
        BG_flags2.interactive = true;
        BG_flags2.on('pointerdown', onButtonDown);
        app.stage.addChild(BG_flags2);



        //Create the `BG` sprite
        looping = new Sprite(resources["images/BG_2ndloop.png"].texture);
        looping.x = 0;
        looping.y = 280;
        looping.vx = 0;
        looping.vy = 0;
        looping.interactive = true;
        looping.on('pointerdown', onButtonDown);
        looping.scale = new PIXI.ObservablePoint(()=>{},looping,1,0.75);
        app.stage.addChild(looping);


        //Create the 'weapon selection' sprite

        var WEAPON_SCALE = 0.5;
        var WEAPON_MENU_SCALE = 0.8;
        weapon1 = new Sprite(resources["images/Weapons/slingshot charged 1.png"].texture);
        weapon1.x = 160+580;
        weapon1.y = 920+10;
        weapon1.vx = 0;
        weapon1.vy = 0;
        weapon1.interactive = true;
        weapon1.on('pointerdown', onButtonDown);
        weapon1.scale = new PIXI.ObservablePoint(()=>{},weapon1,WEAPON_SCALE,WEAPON_SCALE);
        app.stage.addChild(weapon1);

        var WEAPON_SPACING = 190;
        weapon2 = new Sprite(resources["images/Weapons/Weapon2.png"].texture);
        weapon2.x = weapon1.x+ WEAPON_SPACING;
        weapon2.y = 920+10;
        weapon2.vx = 0;
        weapon2.vy = 0;
        weapon2.interactive = true;
        weapon2.on('pointerdown', onButtonDown);
        weapon2.scale = new PIXI.ObservablePoint(()=>{},weapon2,WEAPON_SCALE,WEAPON_SCALE);
        app.stage.addChild(weapon2);

        weapon3 = new Sprite(resources["images/Weapons/Weapon3.png"].texture);
        weapon3.x = weapon2.x+ WEAPON_SPACING;
        weapon3.y = 920+10;
        weapon3.vx = 0;
        weapon3.vy = 0;
        weapon3.interactive = true;
        weapon3.on('pointerdown', onButtonDown);
        weapon3.scale = new PIXI.ObservablePoint(()=>{},weapon3,WEAPON_SCALE,WEAPON_SCALE);
        app.stage.addChild(weapon3);

        //skills_bar = new Sprite(resources["images/Skills_bar2.png"].texture);
        skills_bar = new PIXI.TilingSprite(
                    textureSkillbar,
                    1992/3+1,
                    340
                );
        skills_bar.x = 150+580;
        skills_bar.y = 807;
        skills_bar.vx = 0;
        skills_bar.vy = 0;
        skills_bar.interactive = true;
        skills_bar.on('pointerdown', onButtonDown);
        skills_bar.scale = new PIXI.ObservablePoint(()=>{},skills_bar,WEAPON_MENU_SCALE,WEAPON_MENU_SCALE);
        app.stage.addChild(skills_bar);

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
        //app.stage.addChild(tilingSpriteMessyHair);

        //Create the `nice_hair` sprite
        nice_hair = new Sprite(resources["images/nice_hair.png"].texture);
        nice_hair.x = 540;
        nice_hair.y = 370-1080;
        nice_hair.vx = 0;
        nice_hair.vy = 0;
        //app.stage.addChild(nice_hair);

        //Create the `rollerCoaster1` sprite
        rollerCoaster1 = new Sprite(resources["images/rollerCoaster1.png"].texture);
        rollerCoaster1.x = 521;
        rollerCoaster1.y = 650;
        rollerCoaster1.vx = 0;
        rollerCoaster1.vy = 0;
        rollerCoaster1.scale = new PIXI.ObservablePoint(()=>{},rollerCoaster1,0.3,0.3);
        //app.stage.addChild(rollerCoaster1);

        //Create the `progress_dirty` sprite
        progress_dirty = new Sprite(resources["images/portee vide3.png"].texture);
        progress_dirty.x = 280;
        progress_dirty.y = 10;
        progress_dirty.vx = 0;
        progress_dirty.vy = 0;
        progress_dirty.scale = new PIXI.ObservablePoint(()=>{},progress_dirty,1,0.7);
        progress_dirty.interactive = true;
        progress_dirty.on('pointerdown', onButtonDown);
        //progress_dirty.rotation = 3.1415/2.;
        app.stage.addChild(progress_dirty);

        //Create the `progress_comb` sprite
        progress_comb = new Sprite(resources["images/progress_comb.png"].texture);
        progress_comb.x = 1600;
        progress_comb.y = 176-progress_offset;
        progress_comb.vx = 0;
        progress_comb.vy = 0;
        progress_comb.interactive = true;
        progress_comb.on('pointerdown', onButtonDown);
        //app.stage.addChild(progress_comb);

        //text for progression
        let style = new TextStyle({
        fontFamily: "sans-serif",
        fontSize: 18,
        fill: "brown",
        });
        message = new Text("100 m", style);
        message.position.set(1700, 650-progress_offset);
        message.interactive = true;
        //message.on('pointerdown', () => onWinGame())
        //app.stage.addChild(message);


        //Create the text sprite
        message2 = new Text("0 m", style);
        message2.position.set(1700, 180-progress_offset);
        //app.stage.addChild(message2);


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
        //app.stage.addChild(goo_fairy);


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
        //app.stage.addChild(sailor_fairy);


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
        //app.stage.addChild(sax_fairy);

        jammers = [];
        var NOTE_SCALE = 0.7;
        //Create the `knot_1` sprite
        knot_1 = new Sprite(resources["images/Note_1.png"].texture);
        knot_1.x = 700;
        knot_1.y = 1080;
        knot_1.vx = 0;
        knot_1.vy = 0;
        knot_1.killedby = 'knot';
        knot_1.interactive = true;
        knot_1.scale = new PIXI.ObservablePoint(()=>{},knot_1,NOTE_SCALE,NOTE_SCALE);
        knot_1.on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonOver)
            .on('pointerout', onButtonOut);
        app.stage.addChild(knot_1);
        jammers.push(knot_1);

        //Create the `knot_2` sprite
        knot_2 = new Sprite(resources["images/Note_2.png"].texture);
        knot_2.x = 850;
        knot_2.y = 1280;
        knot_2.vx = 0;
        knot_2.vy = 0;
        knot_2.killedby = 'gum';
        knot_2.interactive = true;
        knot_2.scale = new PIXI.ObservablePoint(()=>{},knot_2,NOTE_SCALE,NOTE_SCALE);
        knot_2.on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonOver)
            .on('pointerout', onButtonOut);
        app.stage.addChild(knot_2);
        jammers.push(knot_2);

        //Create the `knot_3` sprite
        knot_3 = new Sprite(resources["images/Note_3.png"].texture);
        knot_3.x = 950;
        knot_3.y = 1280;
        knot_3.vx = 0;
        knot_3.vy = 0;
        knot_3.killedby = 'sax';
        knot_3.interactive = true;
        knot_3.scale = new PIXI.ObservablePoint(()=>{},knot_3,NOTE_SCALE,NOTE_SCALE);
        knot_3.on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonOver)
            .on('pointerout', onButtonOut);
        app.stage.addChild(knot_3);
        jammers.push(knot_3);
        //Create the `knot_1` sprite
        knot_11 = new Sprite(resources["images/Note_4.png"].texture);
        knot_11.x = 700;
        knot_11.y = 1080;
        knot_11.vx = 0;
        knot_11.vy = 0;
        knot_11.killedby = 'knot';
        knot_11.interactive = true;
        knot_11.scale = new PIXI.ObservablePoint(()=>{},knot_11,NOTE_SCALE,NOTE_SCALE);
        knot_11.on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonOver)
            .on('pointerout', onButtonOut);
        app.stage.addChild(knot_11);
        jammers.push(knot_11);

        //Create the `knot_2` sprite
        knot_21 = new Sprite(resources["images/Note_5.png"].texture);
        knot_21.x = 850;
        knot_21.y = 1280;
        knot_21.vx = 0;
        knot_21.vy = 0;
        knot_21.killedby = 'gum';
        knot_21.interactive = true;
        knot_21.scale = new PIXI.ObservablePoint(()=>{},knot_21,NOTE_SCALE,NOTE_SCALE);
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


        bullets = [];
        //Create the `bullet` sprite
        bullet_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet_peanut1.x = 950;
        bullet_peanut1.y = 1280;
        bullet_peanut1.vx = 0;
        bullet_peanut1.vy = 0;
        bullet_peanut1.weaponType = 'peanut';
        app.stage.addChild(bullet_peanut1);
        bullets.push(bullet_peanut1);


        //Create the `bullet` sprite
        bullet2_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet2_peanut1.x = 950;
        bullet2_peanut1.y = 1280;
        bullet2_peanut1.vx = 0;
        bullet2_peanut1.vy = 0;
        bullet2_peanut1.weaponType = 'peanut';
        app.stage.addChild(bullet2_peanut1);
        bullets.push(bullet2_peanut1);


        //Create the `bullet` sprite
        bullet3_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet3_peanut1.x = 950;
        bullet3_peanut1.y = 1280;
        bullet3_peanut1.vx = 0;
        bullet3_peanut1.vy = 0;
        bullet3_peanut1.weaponType = 'peanut';
        app.stage.addChild(bullet3_peanut1);
        bullets.push(bullet3_peanut1);

        //Create the `bullet` sprite
        bullet4_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet4_peanut1.x = 950;
        bullet4_peanut1.y = 1280;
        bullet4_peanut1.vx = 0;
        bullet4_peanut1.vy = 0;
        bullet4_peanut1.weaponType = 'peanut';
        app.stage.addChild(bullet4_peanut1);
        bullets.push(bullet4_peanut1);

        //Create the `bullet` sprite
        //bullet_lazer1 = new Sprite(resources["images/Weapons/Weapon2 - Lazer3.3.png"].texture);
        bullet_lazer1 = new PIXI.TilingSprite(
            textureLazer,
            100,
            100
        );
        bullet_lazer1.x = 950;
        bullet_lazer1.y = 1280;
        bullet_lazer1.vx = 0;
        bullet_lazer1.vy = 0;
        bullet_lazer1.weaponType = 'lazer';
        app.stage.addChild(bullet_lazer1);
        bullets.push(bullet_lazer1);


        //Create the `bullet` sprite
        bullet2_lazer1 = new PIXI.TilingSprite(
           textureLazer,
           100,
           100
        );
        bullet2_lazer1.x = 950;
        bullet2_lazer1.y = 1280;
        bullet2_lazer1.vx = 0;
        bullet2_lazer1.vy = 0;
        bullet2_lazer1.weaponType = 'lazer';
        app.stage.addChild(bullet2_lazer1);
        bullets.push(bullet2_lazer1);


        //Create the `bullet` sprite
        bullet3_lazer1 = new Sprite(resources["images/Weapons/Weapon2 - Lazer3.3.png"].texture);
        bullet3_lazer1.x = 950;
        bullet3_lazer1.y = 1280;
        bullet3_lazer1.vx = 0;
        bullet3_lazer1.vy = 0;
        bullet3_lazer1.weaponType = 'lazer';
        app.stage.addChild(bullet3_peanut1);
        bullets.push(bullet3_peanut1);

        //Create the `bullet` sprite
        bullet4_lazer1 = new Sprite(resources["images/Weapons/Weapon2 - Lazer3.3.png"].texture);
        bullet4_lazer1.x = 950;
        bullet4_lazer1.y = 1280;
        bullet4_lazer1.vx = 0;
        bullet4_lazer1.vy = 0;
        bullet4_lazer1.weaponType = 'lazer';
        app.stage.addChild(bullet4_lazer1);
        bullets.push(bullet4_lazer1);


        //Create the `Warning_yellow` sprite
        Warning_yellow = new Sprite(resources["images/Warning-yellow.png"].texture);
        Warning_yellow.x = 480;
        Warning_yellow.y = 1080;
        Warning_yellow.vx = 0;
        Warning_yellow.vy = 0;
        //app.stage.addChild(Warning_yellow);

        //Create the `Warning_orange` sprite
        Warning_orange = new Sprite(resources["images/Warning-orange.png"].texture);
        Warning_orange.x = 480;
        Warning_orange.y = 1080;
        Warning_orange.vx = 0;
        Warning_orange.vy = 0;
        //app.stage.addChild(Warning_orange);

        //Create the `Warning_red` sprite
        Warning_red = new Sprite(resources["images/Warning-red.png"].texture);
        Warning_red.x = 480;
        Warning_red.y = 1080;
        Warning_red.vx = 0;
        Warning_red.vy = 0;
        //app.stage.addChild(Warning_red);

        //Create the `Warning_yellow2` sprite
        Warning_yellow2 = new Sprite(resources["images/Warning-yellow.png"].texture);
        Warning_yellow2.x = 1460;
        Warning_yellow2.y = 1080;
        Warning_yellow2.vx = 0;
        Warning_yellow2.vy = 0;
        //app.stage.addChild(Warning_yellow2);

        //Create the `Warning_orange2` sprite
        Warning_orange2 = new Sprite(resources["images/Warning-orange.png"].texture);
        Warning_orange2.x = 1460;
        Warning_orange2.y = 1080;
        Warning_orange2.vx = 0;
        Warning_orange2.vy = 0;
        //app.stage.addChild(Warning_orange2);

        //Create the `Warning_red2` sprite
        Warning_red2 = new Sprite(resources["images/Warning-red.png"].texture);
        Warning_red2.x = 1460;
        Warning_red2.y = 1080;
        Warning_red2.vx = 0;
        Warning_red2.vy = 0;
        //app.stage.addChild(Warning_red2);


        //Create the `hamster` sprite
        //hamster = new Sprite(resources["images/dynamic_ham_wheel.png"].texture);

        hamster = new PIXI.TilingSprite(
            textureHamster,
            500,
            459
        );

        hamster.x = MENU_X0;
        hamster.y = 1900+MENU_Y0;
        hamster.progress=0;
        hamster.vx = 0;
        hamster.vy = 0;
        hamster.moving = false;
        hamster.toolIcon = defaultIcon;
        hamster.interactive = true;
        hamster.scale = new PIXI.ObservablePoint(()=>{},hamster,0.3,0.3);
        /*hamster.on('pointerdown', onButtonDown)
            .on('pointerup', onButtonUp)
            .on('pointerupoutside', onButtonUp)
            .on('pointerover', onButtonOver)
            .on('pointerout', onButtonOut);*/
        app.stage.addChild(hamster);


        //Create the `BG` sprite
        outer_gates = new Sprite(resources["images/OuterMagicGates.png"].texture);
        outer_gates.x = 0;
        outer_gates.y = 280;
        outer_gates.vx = 0;
        outer_gates.vy = 0;
        outer_gates.interactive = true;
        outer_gates.on('pointerdown', onButtonDown);
        outer_gates.scale = new PIXI.ObservablePoint(()=>{},outer_gates,1,0.75);
        app.stage.addChild(outer_gates);


        const sound_init_texture = PIXI.Texture.from('sounds/tool_select.mp4');
        /*musicSprite = new PIXI.Sprite(sound_init_texture);

        // out of screen
        musicSprite.x = app.screen.width+200;
        musicSprite.y = app.screen.height+200;
        musicSprite.width = 1;
        musicSprite.height = 1;

        app.stage.addChild(musicSprite);*/

        //Create the `chibi` sprite
        chibi = new Sprite(chibi_happy_txt);
        chibi.x = 1350;
        chibi.y = 1080;
        //app.stage.addChild(chibi);

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
        fill: "brown",
        });
        butt_sound = new Text("Sounds On/Off", style3);
        butt_sound.position.set(8, 8);
        butt_sound.interactive = true;
        butt_sound.on('pointerdown', () => {sound = !sound; music = sound;})
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
        msg_status.on('pointerdown', onStartGame)
        app.stage.addChild(msg_status);

        msg_menu_1 = new Text("Start game", style4);
        msg_menu_1.position.set(MENU_X0+80, MENU_Y0);
        console.log('pos1 ',MENU_X0+80, ' ', MENU_Y0);
        msg_menu_1.interactive = true;
        msg_menu_1.on('pointerdown', onStartGame)
        //app.stage.addChild(msg_menu_1);

        msg_menu_2 = new Text("Settings", style4);
        msg_menu_2.position.set(MENU_X0+80, MENU_Y0+MENU_OFFSET);
        console.log('pos2 ',MENU_X0+80, ' ', MENU_Y0+MENU_OFFSET);
        msg_menu_2.interactive = true;
        //msg_menu_2.on('pointerdown', onStartGame)
        //app.stage.addChild(msg_menu_2);



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

            //Change the hamster's velocity when the key is pressed
            //hamster.vx = -5;
            //hamster.vy = 0;
        };

        //Left arrow key `release` method
        left.release = function() {

            //If the left arrow has been released, and the right arrow isn't down,
            //and the hamster isn't moving vertically:
            //Stop the hamster
            /*if (!right.isDown && hamster.vy === 0) {
              hamster.vx = 0;
            }*/
        };

        //Up
        up.press = function() {

            if(mode == 'start') {
                //menu_cursor = (menu_cursor +1)% MENU_MAX;

            } else {
                //hamster.vy = -5;
                //hamster.vx = 0;
            }
        };
        up.release = function() {
            /*if(mode == 'start') {
                menu_cursor = (menu_cursor +1)% MENU_MAX;
                hamster.x = MENU_X0;
                hamster.y = MENU_Y0 +80 + menu_cursor*MENU_OFFSET;
            } else {
                if (!down.isDown && hamster.vx === 0) {
                  hamster.vy = 0;
                }
            }*/
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
        msg_menu_1.y = msg_menu_1.y + 1080;
        msg_menu_2.y = msg_menu_2.y + 1080;
        hamster.progress = 0;
        hamster.moving = true;
        hamster.vx = 1;

        setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

        BG_start.y = 1080;
        BG_win.y = 1080;
        BG_lose.y = 1080;
        butt_restart.y=1080;
        progress = 0;
        welcome_princess.y = 1080;
        //chibi.y = 1080-771;
        //onPlayVideo('claps_end_of_level', true);
        onPlayVideo('musique_game', true);
        mode = 'normal';
    }

    function onWinGame() {
        resetJammers();
        msg_status.text = 'Click here to restart';
        msg_status.y = 300;
        msg_status.x = 1100;

        hamster.moving = false;
        hamster.vx = 1;

        setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

        msg_menu_1.y = msg_menu_1.y - 1080;
        msg_menu_2.y = msg_menu_2.y - 1080;
        BG_start.y = 1080;
        chibi.y=1080;
        BG_win.y = 0;
        BG_lose.y = 1080;
        onPlayVideo('claps_end_of_level', true);
        mode = 'win';
    }

    function onLoseGame() {
        resetJammers();
        msg_status.text = '            ';
        msg_status.y = 400;
        msg_status.x = 1130;

        hamster.moving = false;
        hamster.vx = 1;

        setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

        msg_menu_1.y = msg_menu_1.y - 1080;
        msg_menu_2.y = msg_menu_2.y - 1080;
        chibi.y=1080
        BG_start.y = 1080;
        BG_win.y = 1080;
        BG_lose.y = 0;
        butt_restart.y = 800;
        onPlayVideo('ending', true);
        mode = 'lose';
    }

    function onButtonDown(param) {
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
            /*tool = this.tool;
            onPlayVideo('tool_select');
            updateToolTxt(goo_fairy);
            updateToolTxt(sailor_fairy);
            updateToolTxt(sax_fairy);*/
        } else {
            var targetX = param.data.global.x;
            var targetY = param.data.global.y;

            shoot(targetX,targetY);

            //console.log('click ',param.data.global);
            //var mousePosition = app.renderer.interaction.mouse.global;
            //console.log('click ',mousePosition);
        }
        this.alpha = 1;

    }

    function shoot(targetX,targetY){
        var found = false;
        for (var i = 0; i < bullets.length && !found; i++) {
            if(!bullets[i].flying && bullets[i].weaponType == tool){
                bullets[i].flying = true;
                found = true;
                bullets[i].x = hamster.x+80;
                bullets[i].y = hamster.y+80;

                var curr_weapon_speed = bullets[i].weapon_speed || 10;
                var oppositeSz = targetY > bullets[i].y ? 0 : (targetY - bullets[i].y );
                var adjacentSz = (targetX - bullets[i].x);
                //bullets[i].shoot_angle = adjacentSz == 0 ? 3.1416/2 : adjacentSz <= 0 ? 3.1416/2 + Math.atan(oppositeSz / -adjacentSz ): Math.atan(oppositeSz / adjacentSz );
                if(adjacentSz == 0){
                    bullets[i].vx = 0;
                    bullets[i].vy = -curr_weapon_speed;
                } else {
                    bullets[i].vx =  oppositeSz / adjacentSz > 1 || oppositeSz / adjacentSz < -1 ? curr_weapon_speed / (oppositeSz / adjacentSz) : curr_weapon_speed ;
                    bullets[i].vy =  oppositeSz / adjacentSz > 1 || oppositeSz / adjacentSz < -1 ? curr_weapon_speed: curr_weapon_speed * (oppositeSz / adjacentSz) ;
                    /*if(adjacentSz > 0) {
                        if (oppositeSz > 0) {
                            console.log('++ ',(oppositeSz / adjacentSz));
                            bullets[i].vy = -bullets[i].vy;
                        } else {
                            console.log('+- ',(oppositeSz / adjacentSz));
                        }
                    } else {
                        if (oppositeSz > 0) {
                            console.log('-+ ',(oppositeSz / adjacentSz));
                            bullets[i].vx = -bullets[i].vx;

                        } else {
                            console.log('-- ',(oppositeSz / adjacentSz));
                            bullets[i].vy = -bullets[i].vy;
                            bullets[i].vx = -bullets[i].vx;

                        }
                        //bullets[i].vx = -bullets[i].vx;

                    }*/
                }


                bullets[i].vx = bullets[i].vx > 0 != adjacentSz >0 ? - bullets[i].vx : bullets[i].vx;
                bullets[i].vy = bullets[i].vy > 0 ? -bullets[i].vy : bullets[i].vy;

                //bullets[i].shoot_angle = adjacentSz == 0 ? 3.1416/2 : adjacentSz <= 0 ? 3.1416/2 + Math.atan(oppositeSz / -adjacentSz ): Math.atan(oppositeSz / adjacentSz );

                //bullets[i].vx = curr_weapon_speed* Math.cos(bullets[i].shoot_angle);
                //bullets[i].vy = -curr_weapon_speed* Math.sin(bullets[i].shoot_angle);
                //console.log('shoot ',i, ' ',(bullets[i].shoot_angle*180/3.1416));
                //console.log('shooted ',oppositeSz,adjacentSz , ' ',(bullets[i].shoot_angle*180/3.1416));
                //console.log('shooted ',adjacentSz,oppositeSz ,(oppositeSz / adjacentSz), ' ',bullets[i].vx,bullets[i].vy);
                //console.log('shooted ',bullets[i]);

            }

        }
        if(!found) {
            console.log('shoot in CD');
        }
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
        console.log('onPlayVideo ',sound_name, ' ', is_music);
        if((!is_music && sound) || (is_music && music)) {
            // create a video texture from a path

            if(!is_music) {
                const texture = PIXI.Texture.from('sounds/'+sound_bank[sound_name]);
                // create a new Sprite using the video texture (yes it's that easy)
                const videoSprite = new PIXI.Sprite(texture);

                // Stetch the fullscreen
                videoSprite.x = app.screen.width+200;
                videoSprite.y = app.screen.height+200;
                videoSprite.width = 1;
                videoSprite.height = 1;

                app.stage.addChild(videoSprite);
            } else {
                if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
                    BGmusicSprite.baseTexture.source.pause();
                }
                BGmusicSprite = PIXI.Texture.from('sounds/'+sound_bank[sound_name]);
                if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source){
                    BGmusicSprite.baseTexture.source.loop = true;
                    console.log('music T2 ',BGmusicSprite.baseTexture.source);
                    //BGmusicSprite.baseTexture.source.play();
                }
                /*console.log('music ',BGmusicSprite);
                console.log('music t ',BGmusicSprite.source);
                console.log('music T ',BGmusicSprite.baseTexture.pause);
                console.log('music T1 ',BGmusicSprite.baseTexture.source);
                */
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

    function placeNewJammers(){
        var difficulty = 1; // 0 easy to 9 hardcore
        for (var i = 0; i < jammers.length; i++) {
            if(i<=3+difficulty){
                jammers[i].flying = true;
                jammers[i].x = 200+randomInt(0,1600);
                //jammers[i].y = 100+randomInt(50,600);
                jammers[i].y = 200+randomInt(1,100);
                jammers[i].vx = 0;
                jammers[i].vy = 0;
            }
        }
    }

    function moveJammers(speed){
        var difficulty = 1; // 0 easy to 9 hardcore
        /*for (var i = 0; i < jammers.length; i++) {
            if(i<=3+difficulty){
                jammers[i].y -= speed;
                jammers[i].vy = 0;
                }
        }*/
    }

    function moveBullets(speed){
        for (var i = 0; i < bullets.length; i++) {
            if(bullets[i].flying){
                bullets[i].y += bullets[i].vy;
                bullets[i].x += bullets[i].vx;
            }
        }
    }

    function play(delta) {
        timeInSec += 1;
        timeInSec = timeInSec % 60;
        let speedMultiplier = 1;
        let normalSpeed = 5*speedMultiplier;
        let recoverSpeed = 1*speedMultiplier;
        let dangerSpeed = 1*speedMultiplier;
        let moveSpeed = mode === 'danger' ? dangerSpeed : normalSpeed;
        //moveSpeed = mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed;

        // evolution
        switch (mode) {
            case 'normal':
                checkBulletCollision();

                if(hamster.progress >=  100 && hamster.vx >0) { // touch right
                    // check if there are still notes


                    // teleport back
                    hamster.progress=0;
                    //hamster.x = ROLLER_COASTER_LEFT;

                    hamster.vx = 0.5;
                    placeNewJammers();
                }


                if(hamster.x <=  ROLLER_COASTER_LEFT && hamster.vx <0) { // touch left
                    // end of cycle

                    // go towards right
                    //hamster.vx = -hamster.vx;
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
                    rollerCoaster1.y=176;
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
                hamster.tilePosition.vy = 500;
                tilingSpriteMessyHair.vy = 0;
                rollerCoaster1.vy=0;
                Warning_yellow.y = 1080;
                Warning_orange.y = 1080;
                Warning_red.y = 1080;
                Warning_yellow2.y = 1080;
                Warning_orange2.y = 1080;
                Warning_red2.y = 1080;
                progress++;
                break;
            case 'danger':
                hamster.tilePosition.vy = 500;
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
                rollerCoaster1.vy=0;
                tilingSpriteMessyHair.y = 370;
                nice_hair.y = 370-1080;
                //rollerCoaster1.y=176;
                Warning_yellow.y = 1080;
                Warning_orange.y = 1080;
                Warning_red.y = 1080;
                Warning_yellow2.y = 1080;
                Warning_orange2.y = 1080;
                Warning_red2.y = 1080;

        }

        progress_comb.y = 174+(progress/10)-progress_offset;

        if(isJammersTouchingTop()) {
            //onLoseGame();
        }


        //use the hamster's velocity to make it move
        /*hamster.x += hamster.vx;
        hamster.y += hamster.vy;*/
        //hamster.tilePosition.x += hamster.tilePosition.vy;
        //hamster.tilePosition.x += (timeInSec % 4 == 0 ) ? 500 : 0;
        tilingSpriteMessyHair.y += tilingSpriteMessyHair.vy;
        rollerCoaster1.y += tilingSpriteMessyHair.vy;
        nice_hair.y += tilingSpriteMessyHair.vy;

        hamster.progress += hamster.vx;
        setPositionOnCurve(hamster, hamster.progress, hamsterControlPoints);

        moveJammers(mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed);
        moveBullets(1);
        //check for a collision between the hamster and the box
        if (hitTestRectangle(hamster, box)) {

            //if there's a collision, change the message text
            //and tint the box red
            message.text = "hit!";
            box.tint = 0xff3300;
        } else {

            //if there's no collision, reset the message
            //text and the box's color
            //message.text = "No collision...("+hamster.x+", "+hamster.y+")";
            box.tint = 0xccff99;
        }
        animate_BG(timeInSec);
    }

    function setPositionOnCurve(sprite, newProgress, controlPoints){
        if(!sprite.moving) {
            //console.log('progress ',newProgress, ' not moving ',controlPoints);
            sprite.x = size[1];
            sprite.y = size[0];
            sprite.rotation = 0;
            return;
        }
        var curveProgress = newProgress < 0 ? 0 : newProgress > 100 ? 100 :  newProgress;
        var previousPoint = controlPoints[0]
        for (var i = 1; i < controlPoints.length; i++) {
            var nextPoint = controlPoints[i];
            if(nextPoint.progress >= curveProgress){
                //console.log('progress ',curveProgress,' '+i+ ' using point '+(i+1), ' ', nextPoint,previousPoint);
                //console.log('progress ',curveProgress, (nextPoint.progress-previousPoint.progress));
                sprite.x = previousPoint.x + (nextPoint.x-previousPoint.x)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress);
                sprite.y = previousPoint.y + (nextPoint.y-previousPoint.y)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress);
                sprite.rotation = (-3.1416/180)*(previousPoint.rotation + (nextPoint.rotation-previousPoint.rotation)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress));
                return;
            }
            previousPoint = nextPoint;
        }
        //console.log('progress ',curveProgress, ' no point found');
    }

    let hamsterControlPoints = [
        // progress is the % of progression on the complete rollercoaster curve
        // x and y are the coordinates.
        //          (x=0   , y=0   )  is at the TOP    left  of the game screen
        //          (x=1920, y=1080)  is at the BOTTOM right of the game screen
        // rotation is the angle (in degrees) of the hamster
        //          0   => normal, looks to the right
        //          90  =>         looks to the top
        //          180 =>         looks to the left   (upside down)
        //          270 =>         looks to the bottom (upside down)

        { progress: 0,    x: ROLLER_COASTER_LEFT ,                             y: ROLLER_COASTER_LOW       ,  rotation:0 },// initial point, at enter gate
	{ progress: 11.8,    x: 475 ,                             y: 950      ,  rotation:0 },// initial point, at enter gate
	{ progress: 30,    x: 800 ,                             y: 600      ,  rotation:0 },// initial point, at enter gate
	{ progress: 46.4,    x: 1000 ,                             y: 900      ,  rotation:0 },// initial point, at enter gate
        { progress: 50,   x: (ROLLER_COASTER_RIGHT + ROLLER_COASTER_LEFT) / 2 , y: ROLLER_COASTER_LOW - 800  ,  rotation:0 },// middle point, at enter gate
	{ progress: 56.6,    x: 1200 ,                             y: 675      ,  rotation:0 },// initial point, at enter gate
	{ progress: 74,    x: 1350 ,                             y: 1025      ,  rotation:0 },// initial point, at enter gate
	{ progress: 88.8,    x: 1540 ,                             y: 750      ,  rotation:0 },// initial point, at enter gate
	{ progress: 95.8,    x: 1625 ,                             y: 750      ,  rotation:0 },// initial point, at enter gate
	{ progress: 100,  x: ROLLER_COASTER_RIGHT ,                            y: ROLLER_COASTER_LOW -500  ,  rotation: 0 } // final point, at exit gate
    ];

    function checkBulletCollision(){

        for (var i = 0; i < bullets.length; i++) {
            if(bullets[i].flying){
                // check if out of screen
                if(bullets[i].y < -200 || bullets[i].y > size[0] +200 || bullets[i].x < -200 || bullets[i].y > size[1] +200){
                    bullets[i].flying = false;
                    bullets[i].x = -200;
                    bullets[i].y = -200;
                } else {

                    for (var j = 0; j < jammers.length; j++) {
                        if(jammers[j].flying){
                            //console.log('check ',i,j,bullets,jammers);
                            if (hitTestRectangle(bullets[i], jammers[j])) {
                                // TODO score

                                // TODO impact noise

                                // TODO impact FX

                                // reset note and bullet
                                bullets[i].flying = false;
                                bullets[i].x = -200;
                                bullets[i].y = -200;
                                jammers[j].flying = false;
                                jammers[j].x = -200;
                                jammers[j].y = -200;
                                jammers[j].vx = 0;
                                jammers[j].vy = 0;
                            }
                        }
                    }
                }
            }
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

    function animate_BG(time) {
        if(time % 15 == 1) {
            var max_delta = 30;
            var isGoingUp = ( BG_baloons1.y <= max_delta &&  BG_baloons1.x == 0 ) || BG_baloons1.y <= 0;
            if( BG_baloons1.y >= max_delta) {
                BG_baloons1.x = 1;
            }
            if( BG_baloons1.y <= 0) {
                BG_baloons1.x = 0;
            }
            var dy = isGoingUp ? 2 : -2;

            BG_baloons1.y += dy;
            BG_baloons2.y -= dy;
            BG_flags1.y = size[1]- BG_flags1.y;
            BG_flags2.y = size[1]- BG_flags2.y;
        }
    }

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
