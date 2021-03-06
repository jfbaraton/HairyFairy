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
        'slingshot_charging' : 'slingshot_charging.mp4',
        'gun_charging' : 'gun_charging.mp4',
        'shot_no_weapon' : 'shot_no_weapon.mp4',
        'shot_lazer_weapon_2' : 'shot_lazer_weapon_2.mp4',
        'short_slingshot_sound' : 'short_slingshot_sound.mp4'
    };

    loader
    .add("images/BG_empty.png")
    .add("images/FlagsSolo1.3.png")
    .add("images/FlagsSolo2.3.png")
    .add("images/Hotairbaloon2SOLO.png")
    .add("images/HotairbaloonSOLO.png")
    .add("images/BG_win.png")
    .add("images/BG_lose.png")
    .add("images/BG_start2.png")
    //.add("images/comb_again.png")
    //.add("images/messy_hair.png")
    //.add("images/nice_hair.png")
    .add("images/rollerCoaster1.png")
    //.add("images/blob.png")
    //.add("images/wand.png")
    .add("images/Crosshair_lazer_weaponQUARTER-NO-BG.png")
    //.add("images/knot.png")
    .add("images/Note_1.png")
    .add("images/Note_2.png")
    .add("images/Note_3.png")
    .add("images/Note_4.png")
    .add("images/Note_5.png")
    .add("images/Badnote_1.png")
    .add("images/Badnote_2.png")
    .add("images/Badnote_3.png")
    //.add("images/chibi_cry1.png")
    //.add("images/chibi_happy1.png")
    //.add("images/chibi_oups1.png")
    //.add("images/knot_1.png")
    //.add("images/knot_2.png")
    //.add("images/gum1.png")
    //.add("images/gum2.png")
    ///.add("images/Warning-yellow.png")
    //.add("images/Warning-orange.png")
    //.add("images/Warning-red.png")
    //.add("images/Warning-orange2.png")
    //.add("images/Warning-red2.png")
    //.add("images/goo_fairy.png")
    //.add("images/goo_fairy_selected.png")
    //.add("images/sailor_fairy.png")
    //.add("images/sailor_fairy_selected.png")
    //.add("images/split_fairy.png")
    //.add("images/split_fairy_selected.png")
    //.add("images/cat.png")
    .add("images/static_ham_wheel.png")
    .add("images/dynamic_ham_wheel.png")
    //.add("images/progress_comb.png")
    //.add("images/progress_dirty.png")
    //.add("images/welcome_princess.png")
    //.add("images/partition.png")
    //.add("images/assault_crosshair_gun3.png")
    .add("images/curseur_Menu.png")
    .add("images/BG_2ndloop.png")
    .add("images/OuterMagicGates.png")
    .add("images/Weapons/Weapon1 - Peanut1.3.png")
    .add("images/Weapons/Weapon2 - Lazer3.3.png")
    .add("images/portee vide3.png")
    .add("images/Skills_bar3.png")
    .add("images/Weapons/slingshot charged 1.png")
    .add("images/Weapons/Weapon2.png")
    .add("images/Weapons/Weapon3.png")
    .add("images/Weapons/Weapon2 - Lazer 123 .png")
    .add("images/Weapons/Weapon3 - Bullet1.png")
    //.add("sounds/"+sound_bank["Catch_gold"])
    //.add("sounds/"+sound_bank["Gun_switch"])
    //.add("sounds/"+sound_bank["signal_10sec_left"])
    .add("sounds/"+sound_bank["claps_end_of_level"])
    //.add("sounds/"+sound_bank["Menu_musique"])
    //.add("sounds/"+sound_bank["take_a_bonus"])
    .add("sounds/"+sound_bank["Countdown_Start_Race"])
    .add("sounds/"+sound_bank["musique_game"])
    .add("sounds/"+sound_bank["tool_select"])
    //.add("sounds/"+sound_bank["Crash_on_the_roller_coaster"])
    .add("sounds/"+sound_bank["oh_no"])
    //.add("sounds/"+sound_bank["upgrade_weapon"])
    //.add("sounds/"+sound_bank["Cross_finish_line"])
    .add("sounds/"+sound_bank["Shot_Deagle_Weapon_1"])
    //.add("sounds/"+sound_bank["when_lose_because_no_time"])
    .add("sounds/"+sound_bank["ending"])
    .add("sounds/"+sound_bank["slingshot_charging"])
    .add("sounds/"+sound_bank["shot_no_weapon"])
    .add("sounds/"+sound_bank["gun_charging"])
    .add("sounds/"+sound_bank["short_slingshot_sound"])
    .add("sounds/"+sound_bank["shot_lazer_weapon_2"])

    .load(setup);

    //Define any variables that are used in more than one function
    let timeInSec = 0;
    let mode, tool, music, sound, BGmusicSprite, musicSprite, progress;
    let butt_music, butt_sound;
    let BG_start, BG_win, BG_lose;
    let msg_status;
    let msg_menu_1;
    let msg_menu_2;
    let hamster;
    let skills_bar, weapon1,weapon2,weapon3;
    let blob, rollerCoaster1, back, BG_baloons1,BG_baloons2,BG_flags1,BG_flags2 , looping,outer_gates, box, message, message2, state, tilingSprite, jammers;
    let instructions, instrunote1, instrunote2, instrunote3, instrunote4, instrunote5;
    let note1, note2, note3, note4, note5,note21, note22, note23, note24, note25;
    let knot_31, knot_12, knot_22, knot_32, knot_13, knot_23, knot_33,  progress_dirty;
    let bullets;
    let bullet_peanut1, bullet2_peanut1, bullet3_peanut1, bullet4_peanut1;
    let bullet_lazer1,  bullet2_lazer1, bullet3_lazer1, bullet4_lazer1;
    let bullet_gun1,  bullet2_gun1, bullet3_gun1, bullet4_gun1;
    let MENU_MAX = 2 ;
    let LVL_MAX = 12 ;
    //let LVL_MAX = 10 ;
    let CURRENT_LVL = 0 ;
    let MENU_X0 = 100;
    let MENU_Y0 = 300;
    let MENU_OFFSET = 170;
    let menu_cursor = 0;
    let ROLLER_COASTER_LEFT = 150;
    let ROLLER_COASTER_RIGHT = 1760;
    let ROLLER_COASTER_LOW = 900;

    // create a texture from an image path
    //const textureMessyHair = PIXI.Texture.from('images/messy_hair.png');
    const textureHamster = PIXI.Texture.from('images/dynamic_ham_wheel.png');
    const textureLazer = PIXI.Texture.from('images/Weapons/Weapon2 - Lazer 123 .png');
    const textureGun = PIXI.Texture.from('images/Weapons/Weapon3 - Bullet1.png');
    const textureSkillbar= PIXI.Texture.from('images/Skills_bar3.png');
    //const goo_fairy_txt = PIXI.Texture.from('images/goo_fairy.png');
    //const goo_fairy_selected_txt = PIXI.Texture.from('images/goo_fairy_selected.png');
    //const sailor_fairy_txt = PIXI.Texture.from('images/sailor_fairy.png');
    //const sailor_fairy_selected_txt = PIXI.Texture.from('images/sailor_fairy_selected.png');
    //const sax_fairy_txt = PIXI.Texture.from('images/split_fairy.png');
    //const sax_fairy_selected_txt = PIXI.Texture.from('images/split_fairy_selected.png');
    //const chibi_cry_txt = PIXI.Texture.from('images/chibi_cry1.png');
    //const chibi_happy_txt = PIXI.Texture.from('images/chibi_happy1.png');
    //const chibi_oups_txt = PIXI.Texture.from('images/chibi_oups1.png');
    //const warning_yellow1_txt = PIXI.Texture.from('images/Warning-yellow.png');
    //const warning_yellow2_txt = PIXI.Texture.from('images/Warning-yellow.png');
    ////const warning_orange1_txt = PIXI.Texture.from('images/Warning-orange.png');
    //const warning_orange2_txt = PIXI.Texture.from('images/Warning-orange2.png');
    //const warning_red1_txt = PIXI.Texture.from('images/Warning-red.png');
    //const warning_red2_txt = PIXI.Texture.from('images/Warning-red2.png');


    // Css style for icons
    const defaultIcon = "url('images/Crosshair_lazer_weaponQUARTER-NO-BG.png'),auto";
    const hoverIcon = "url('images/Crosshair_lazer_weaponQUARTER-NO-BG.png'),auto";

    // Add custom cursor styles
    app.renderer.plugins.interaction.cursorStyles.default = defaultIcon;
    app.renderer.plugins.interaction.cursorStyles.hover = hoverIcon;
    const progress_offset = 100;
    const WEAPON_2_Y = 920+15;
    const WEAPON_3_Y = 915;
    let count = 0;

    function setup() {
        mode = 'start';
        tool = 'peanut';
        music = true;
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
        weapon1.y = 920+15;
        weapon1.vx = 0;
        weapon1.vy = 0;
        weapon1.tilingPosition = 0;
        weapon1.weaponSwitch = 'slingshot_charging';
        weapon1.weaponShoot = 'short_slingshot_sound';
        weapon1.tool = 'peanut';
        weapon1.weapon_speed = 10;
        weapon1.bulletAngle = 3.1416/8;
        weapon1.interactive = true;
        weapon1.available = true;
        weapon1.on('pointerdown', onButtonDown);
        weapon1.scale = new PIXI.ObservablePoint(()=>{},weapon1,WEAPON_SCALE,WEAPON_SCALE);
        app.stage.addChild(weapon1);

        var WEAPON_SPACING = 190;

        weapon2 = new Sprite(resources["images/Weapons/Weapon2.png"].texture);
        weapon2.x = weapon1.x+ WEAPON_SPACING -5;
        weapon2.y = 3000; // 920+15
        weapon2.vx = 0;
        weapon2.vy = 0;
        weapon2.tilingPosition = 1324;
        weapon2.weaponSwitch = 'shot_lazer_weapon_2';
        weapon2.weaponShoot = 'shot_lazer_weapon_2';
        weapon2.tool = 'lazer';
        weapon2.weapon_speed = 50;
        weapon2.bulletAngle = 0;
        weapon2.interactive = true;
        weapon2.available = true;
        weapon2.on('pointerdown', onButtonDown);
        weapon2.scale = new PIXI.ObservablePoint(()=>{},weapon2,WEAPON_SCALE,WEAPON_SCALE);
        app.stage.addChild(weapon2);

        weapon3 = new Sprite(resources["images/Weapons/Weapon3.png"].texture);
        weapon3.x = weapon2.x+ WEAPON_SPACING - 30;
        weapon3.y = 3000// 915
        weapon3.vx = 0;
        weapon3.vy = 0;
        weapon3.tilingPosition = 659;
        weapon3.weaponSwitch = 'gun_charging';
        weapon3.weaponShoot = 'Shot_Deagle_Weapon_1';
        weapon3.tool = 'gun';
        weapon3.weapon_speed = 20;
        weapon3.bulletAngle =  0;
        weapon3.isGoesThrough = true;
        weapon3.interactive = true;
        weapon3.available = true;
        weapon3.on('pointerdown', onButtonDown);
        weapon3.scale = new PIXI.ObservablePoint(()=>{},weapon3,WEAPON_SCALE*1.5,WEAPON_SCALE*1.5);
        app.stage.addChild(weapon3);

        //skills_bar = new Sprite(resources["images/Skills_bar2.png"].texture);
        skills_bar = new PIXI.TilingSprite(
            textureSkillbar,
            1992/3,
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

        //Create the `rollerCoaster1` sprite
        rollerCoaster1 = new Sprite(resources["images/rollerCoaster1.png"].texture);
        rollerCoaster1.x = 521;
        rollerCoaster1.y = 650;
        rollerCoaster1.vx = 0;
        rollerCoaster1.vy = 0;
        rollerCoaster1.interactive = true;
        rollerCoaster1.on('pointerdown', onButtonDown);
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

        var NOTE_SCALE = 0.7;
        instructions = [];
        //Create the `instrunote1` sprite
        instrunote1 = new Sprite(resources["images/Note_1.png"].texture);
        instrunote1.x = 700;
        instrunote1.y = 1080;
        instrunote1.vx = 0;
        instrunote1.vy = 0;
        instrunote1.amountCpt = 0;
        //instrunote1.killedby = 'knot';
        instrunote1.interactive = true;
        instrunote1.scale = new PIXI.ObservablePoint(()=>{},instrunote1,NOTE_SCALE,NOTE_SCALE);
        instrunote1.on('pointerdown', onButtonDown);
        app.stage.addChild(instrunote1);
        instructions.push(instrunote1);

        //Create the `instrunote2` sprite
        instrunote2 = new Sprite(resources["images/Note_2.png"].texture);
        instrunote2.x = 850;
        instrunote2.y = 1280;
        instrunote2.vx = 0;
        instrunote2.vy = 0;
        instrunote2.amountCpt = 0;
        //instrunote2.killedby = 'gum';
        instrunote2.interactive = true;
        instrunote2.scale = new PIXI.ObservablePoint(()=>{},instrunote2,NOTE_SCALE,NOTE_SCALE);
        instrunote2.on('pointerdown', onButtonDown);
        app.stage.addChild(instrunote2);
        instructions.push(instrunote2);

        //Create the `instrunote3` sprite
        instrunote3 = new Sprite(resources["images/Note_3.png"].texture);
        instrunote3.x = 950;
        instrunote3.y = 1280;
        instrunote3.vx = 0;
        instrunote3.vy = 0;
        instrunote3.amountCpt = 0;
        //instrunote3.killedby = 'sax';
        instrunote3.interactive = true;
        instrunote3.scale = new PIXI.ObservablePoint(()=>{},instrunote3,NOTE_SCALE,NOTE_SCALE);
        instrunote3.on('pointerdown', onButtonDown);
        app.stage.addChild(instrunote3);
        instructions.push(instrunote3);

        //Create the `instrunote4` sprite
        instrunote4 = new Sprite(resources["images/Note_4.png"].texture);
        instrunote4.x = 700;
        instrunote4.y = 1080;
        instrunote4.vx = 0;
        instrunote4.vy = 0;
        instrunote4.amountCpt = 0;
        //instrunote4.killedby = 'knot';
        instrunote4.interactive = true;
        instrunote4.scale = new PIXI.ObservablePoint(()=>{},instrunote4,NOTE_SCALE,NOTE_SCALE);
        instrunote4.on('pointerdown', onButtonDown);
        app.stage.addChild(instrunote4);
        instructions.push(instrunote4);

        //Create the `instrunote5` sprite
        instrunote5 = new Sprite(resources["images/Note_5.png"].texture);
        instrunote5.x = 850;
        instrunote5.y = 1280;
        instrunote5.vx = 0;
        instrunote5.vy = 0;
        instrunote5.amountCpt = 0;
        //instrunote5.killedby = 'gum';
        instrunote5.interactive = true;
        instrunote5.scale = new PIXI.ObservablePoint(()=>{},instrunote5,NOTE_SCALE,NOTE_SCALE);
        instrunote5.on('pointerdown', onButtonDown);
        app.stage.addChild(instrunote5);
        instructions.push(instrunote5);

        jammers = [];
        //Create the `note1` sprite
        note1 = new Sprite(resources["images/Note_1.png"].texture);
        note1.x = 700;
        note1.y = 1080;
        note1.instru = instrunote1;
        note1.vx = 0;
        note1.vy = 0;
        //note1.killedby = 'knot';
        note1.interactive = true;
        note1.scale = new PIXI.ObservablePoint(()=>{},note1,NOTE_SCALE,NOTE_SCALE);
        note1.on('pointerdown', onButtonDown);
        app.stage.addChild(note1);
        jammers.push(note1);

        //Create the `note2` sprite
        note2 = new Sprite(resources["images/Note_2.png"].texture);
        note2.x = 850;
        note2.y = 1280;
        note2.instru = instrunote2;
        note2.vx = 0;
        note2.vy = 0;
        //note2.killedby = 'gum';
        note2.interactive = true;
        note2.scale = new PIXI.ObservablePoint(()=>{},note2,NOTE_SCALE,NOTE_SCALE);
        note2.on('pointerdown', onButtonDown);
        app.stage.addChild(note2);
        jammers.push(note2);

        //Create the `note3` sprite
        note3 = new Sprite(resources["images/Note_3.png"].texture);
        note3.x = 950;
        note3.y = 1280;
        note3.instru = instrunote3;
        note3.vx = 0;
        note3.vy = 0;
        //note3.killedby = 'sax';
        note3.interactive = true;
        note3.scale = new PIXI.ObservablePoint(()=>{},note3,NOTE_SCALE,NOTE_SCALE);
        note3.on('pointerdown', onButtonDown);
        app.stage.addChild(note3);
        jammers.push(note3);

        //Create the `note4` sprite
        note4 = new Sprite(resources["images/Note_4.png"].texture);
        note4.x = 700;
        note4.y = 1080;
        note4.instru = instrunote4;
        note4.vx = 0;
        note4.vy = 0;
        //note4.killedby = 'knot';
        note4.interactive = true;
        note4.scale = new PIXI.ObservablePoint(()=>{},note4,NOTE_SCALE,NOTE_SCALE);
        note4.on('pointerdown', onButtonDown);
        app.stage.addChild(note4);
        jammers.push(note4);

        //Create the `note5` sprite
        note5 = new Sprite(resources["images/Note_5.png"].texture);
        note5.x = 850;
        note5.y = 1280;
        note5.instru = instrunote5;
        note5.vx = 0;
        note5.vy = 0;
        //note5.killedby = 'gum';
        note5.interactive = true;
        note5.scale = new PIXI.ObservablePoint(()=>{},note5,NOTE_SCALE,NOTE_SCALE);
        note5.on('pointerdown', onButtonDown);
        app.stage.addChild(note5);
        jammers.push(note5);

        //Create the `note21` sprite
        note21 = new Sprite(resources["images/Note_1.png"].texture);
        note21.x = 700;
        note21.y = 1080;
        note21.instru = instrunote1;
        note21.vx = 0;
        note21.vy = 0;
        //note21.killedby = 'knot';
        note21.interactive = true;
        note21.scale = new PIXI.ObservablePoint(()=>{},note21,NOTE_SCALE,NOTE_SCALE);
        note21.on('pointerdown', onButtonDown);
        app.stage.addChild(note21);
        jammers.push(note21);

        //Create the `note22` sprite
        note22 = new Sprite(resources["images/Note_2.png"].texture);
        note22.x = 850;
        note22.y = 1280;
        note22.instru = instrunote2;
        note22.vx = 0;
        note22.vy = 0;
        //note22.killedby = 'gum';
        note22.interactive = true;
        note22.scale = new PIXI.ObservablePoint(()=>{},note22,NOTE_SCALE,NOTE_SCALE);
        note22.on('pointerdown', onButtonDown);
        app.stage.addChild(note22);
        jammers.push(note22);

        //Create the `note23` sprite
        note23 = new Sprite(resources["images/Note_3.png"].texture);
        note23.x = 950;
        note23.y = 1280;
        note23.instru = instrunote3;
        note23.vx = 0;
        note23.vy = 0;
        //note23.killedby = 'sax';
        note23.interactive = true;
        note23.scale = new PIXI.ObservablePoint(()=>{},note23,NOTE_SCALE,NOTE_SCALE);
        note23.on('pointerdown', onButtonDown);
        app.stage.addChild(note23);
        jammers.push(note23);

        //Create the `note24` sprite
        note24 = new Sprite(resources["images/Note_4.png"].texture);
        note24.x = 700;
        note24.y = 1080;
        note24.instru = instrunote4;
        note24.vx = 0;
        note24.vy = 0;
        //note24.killedby = 'knot';
        note24.interactive = true;
        note24.scale = new PIXI.ObservablePoint(()=>{},note24,NOTE_SCALE,NOTE_SCALE);
        note24.on('pointerdown', onButtonDown);
        app.stage.addChild(note24);
        jammers.push(note24);

        //Create the `note25` sprite
        note25 = new Sprite(resources["images/Note_5.png"].texture);
        note25.x = 850;
        note25.y = 1280;
        note25.instru = instrunote5;
        note25.vx = 0;
        note25.vy = 0;
        //note25.killedby = 'gum';
        note25.interactive = true;
        note25.scale = new PIXI.ObservablePoint(()=>{},note25,NOTE_SCALE,NOTE_SCALE);
        note25.on('pointerdown', onButtonDown);
        app.stage.addChild(note25);
        jammers.push(note25);

        //Create the `knot_31` sprite
        knot_31 = new Sprite(resources["images/Badnote_1.png"].texture);
        knot_31.x = 950;
        knot_31.y = 1280;
        knot_31.vx = 0;
        knot_31.vy = 0;
        knot_31.killedby = 'sax';
        knot_31.interactive = true;
        knot_31.isBad = true;
        knot_31.on('pointerdown', onButtonDown);
        app.stage.addChild(knot_31);
        jammers.push(knot_31);
        //Create the `knot_12` sprite
        knot_12 = new Sprite(resources["images/Badnote_2.png"].texture);
        knot_12.x = 700;
        knot_12.y = 1080;
        knot_12.vx = 0;
        knot_12.vy = 0;
        knot_12.killedby = 'knot';
        knot_12.interactive = true;
        knot_12.isBad = true;
        knot_12.on('pointerdown', onButtonDown);
        app.stage.addChild(knot_12);
        jammers.push(knot_12);

        //Create the `knot_22` sprite
        knot_22 = new Sprite(resources["images/Badnote_3.png"].texture);
        knot_22.x = 850;
        knot_22.y = 1280;
        knot_22.vx = 0;
        knot_22.vy = 0;
        knot_22.killedby = 'gum';
        knot_22.isBad = true;
        knot_22.interactive = true;
        knot_22.on('pointerdown', onButtonDown);
        app.stage.addChild(knot_22);
        jammers.push(knot_22);


        bullets = [];
        //Create the `bullet` sprite
        bullet_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet_peanut1.x = 950;
        bullet_peanut1.y = 1280;
        bullet_peanut1.vx = 0;
        bullet_peanut1.vy = 0;
        bullet_peanut1.weaponType = 'peanut';
        bullet_peanut1.weapon = weapon1;
        bullet_peanut1.interactive = true;
        bullet_peanut1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet_peanut1);
        bullets.push(bullet_peanut1);


        //Create the `bullet` sprite
        bullet2_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet2_peanut1.x = 950;
        bullet2_peanut1.y = 1280;
        bullet2_peanut1.vx = 0;
        bullet2_peanut1.vy = 0;
        bullet2_peanut1.weaponType = 'peanut';
        bullet2_peanut1.weapon = weapon1;
        bullet2_peanut1.interactive = true;
        bullet2_peanut1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet2_peanut1);
        bullets.push(bullet2_peanut1);


        //Create the `bullet` sprite
        bullet3_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet3_peanut1.x = 950;
        bullet3_peanut1.y = 1280;
        bullet3_peanut1.vx = 0;
        bullet3_peanut1.vy = 0;
        bullet3_peanut1.weaponType = 'peanut';
        bullet3_peanut1.weapon = weapon1;
        bullet3_peanut1.interactive = true;
        bullet3_peanut1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet3_peanut1);
        bullets.push(bullet3_peanut1);

        //Create the `bullet` sprite
        bullet4_peanut1 = new Sprite(resources["images/Weapons/Weapon1 - Peanut1.3.png"].texture);
        bullet4_peanut1.x = 950;
        bullet4_peanut1.y = 1280;
        bullet4_peanut1.vx = 0;
        bullet4_peanut1.vy = 0;
        bullet4_peanut1.weaponType = 'peanut';
        bullet4_peanut1.weapon = weapon1;
        bullet4_peanut1.interactive = true;
        bullet4_peanut1.on('pointerdown', onButtonDown);
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
        bullet_lazer1.weapon = weapon2;
        bullet_lazer1.interactive = true;
        bullet_lazer1.on('pointerdown', onButtonDown);
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
        bullet2_lazer1.weapon = weapon2;
        bullet2_lazer1.interactive = true;
        bullet2_lazer1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet2_lazer1);
        bullets.push(bullet2_lazer1);


        //Create the `bullet` sprite
        bullet3_lazer1 = new PIXI.TilingSprite(
            textureLazer,
            100,
            100
         );
        bullet3_lazer1.x = 950;
        bullet3_lazer1.y = 1280;
        bullet3_lazer1.vx = 0;
        bullet3_lazer1.vy = 0;
        bullet3_lazer1.weaponType = 'lazer';
        bullet3_lazer1.weapon = weapon2;
        bullet3_lazer1.interactive = true;
        bullet3_lazer1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet3_peanut1);
        bullets.push(bullet3_peanut1);

        //Create the `bullet` sprite
        bullet4_lazer1 = new PIXI.TilingSprite(
            textureLazer,
            100,
            100
         );
        bullet4_lazer1.x = 950;
        bullet4_lazer1.y = 1280;
        bullet4_lazer1.vx = 0;
        bullet4_lazer1.vy = 0;
        bullet4_lazer1.weaponType = 'lazer';
        bullet4_lazer1.weapon = weapon2;
        bullet4_lazer1.interactive = true;
        bullet4_lazer1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet4_lazer1);
        bullets.push(bullet4_lazer1);

        bullet_gun1 = new PIXI.TilingSprite(
            textureGun,
            100,
            100
        );
        bullet_gun1.x = 950;
        bullet_gun1.y = 1280;
        bullet_gun1.vx = 0;
        bullet_gun1.vy = 0;
        bullet_gun1.weaponType = 'gun';
        bullet_gun1.weapon = weapon3;
        bullet_gun1.interactive = true;
        bullet_gun1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet_gun1);
        bullets.push(bullet_gun1);


        //Create the `bullet` sprite
        bullet2_gun1 = new PIXI.TilingSprite(
           textureGun,
           100,
           100
        );
        bullet2_gun1.x = 950;
        bullet2_gun1.y = 1280;
        bullet2_gun1.vx = 0;
        bullet2_gun1.vy = 0;
        bullet2_gun1.weaponType = 'gun';
        bullet2_gun1.weapon = weapon3;
        bullet2_gun1.interactive = true;
        bullet2_gun1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet2_gun1);
        bullets.push(bullet2_gun1);


        //Create the `bullet` sprite
        bullet3_gun1 = new PIXI.TilingSprite(
            textureGun,
            100,
            100
         );
        bullet3_gun1.x = 950;
        bullet3_gun1.y = 1280;
        bullet3_gun1.vx = 0;
        bullet3_gun1.vy = 0;
        bullet3_gun1.weaponType = 'gun';
        bullet3_gun1.weapon = weapon3;
        bullet3_gun1.interactive = true;
        bullet3_gun1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet3_gun1);
        bullets.push(bullet3_gun1);

        //Create the `bullet` sprite
        bullet4_gun1 = new PIXI.TilingSprite(
            textureGun,
            100,
            100
         );
        bullet4_gun1.x = 950;
        bullet4_gun1.y = 1280;
        bullet4_gun1.vx = 0;
        bullet4_gun1.vy = 0;
        bullet4_gun1.weaponType = 'gun';
        bullet4_gun1.weapon = weapon3;
        bullet4_gun1.interactive = true;
        bullet4_gun1.on('pointerdown', onButtonDown);
        app.stage.addChild(bullet4_gun1);
        bullets.push(bullet4_gun1);



        //Create the `hamster` sprite
        //hamster = new Sprite(resources["images/dynamic_ham_wheel.png"].texture);

        hamster = new PIXI.TilingSprite(
            textureHamster,
            500,
            459
        );

        hamster.x = MENU_X0;
        hamster.y = 1900+MENU_Y0;
        hamster.curve_offsetX = -100;
        hamster.curve_offsetY = -110;
        hamster.progress=0;
        hamster.vx = 0;
        hamster.vy = 0;
        hamster.moving = false;
        hamster.toolIcon = defaultIcon;
        hamster.interactive = true;
        hamster.on('pointerdown', onButtonDown);
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


        //const sound_init_texture = PIXI.Texture.from('sounds/tool_select.mp4');
        /*musicSprite = new PIXI.Sprite(sound_init_texture);

        // out of screen
        musicSprite.x = app.screen.width+200;
        musicSprite.y = app.screen.height+200;
        musicSprite.width = 1;
        musicSprite.height = 1;

        app.stage.addChild(musicSprite);*/


        //Create the `BG_start` sprite
        BG_start = new Sprite(resources["images/BG_start2.png"].texture);
        BG_start.x = 0;
        BG_start.y = 0;
        BG_start.vx = 0;
        BG_start.vy = 0;
        app.stage.addChild(BG_start);



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
        butt_sound = new Text("Sounds On", style3);
        butt_sound.position.set(8, 8);
        butt_sound.interactive = true;
        butt_sound.on('pointerdown', () => {
            sound = !sound;
            music = sound;
            if(sound){
                if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.play){
                    BGmusicSprite.baseTexture.source.play();
                }
            } else {
                if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
                    BGmusicSprite.baseTexture.source.pause();
                }
            }
            butt_sound.text = sound ? 'Sounds On' :"Sounds Off";
        });
        app.stage.addChild(butt_sound);

        //Create the text sprite
        let style4 = new TextStyle({
        fontFamily: "Bodoni MT", // "chalkduster"
        fontSize: 190,
        //fontStyle: 'underline',
        fill: "brown",
        });
        msg_status = new Text("                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n"+
        "                                        .\n", style4);
        msg_status.position.set(30, 30);
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
        let keyLetterS = keyboard(83),
          keyLetterD = keyboard(68),
          keyLetterF = keyboard(70)
          ;

        keyLetterS.press = function() {
            swapWeapon(weapon1);
        };

        keyLetterD.press = function() {

            swapWeapon(weapon2);

        };

        keyLetterF.press = function() {

            swapWeapon(weapon3);

        };


        //Set the game state
        state = play;

        //Start the game loop
        app.ticker.add(delta => gameLoop(delta));
    }

    function swapWeapon (oneWeapon){

        if(oneWeapon.available) {
            if(tool != oneWeapon.tool) {
                tool = oneWeapon.tool;
                skills_bar.tilePosition.x = oneWeapon.tilingPosition;
                onPlayVideo(oneWeapon.weaponSwitch,false);
            }

        } else {
            // play sound for unavailable
        }
    }

    function onStartGame() {
        msg_status.y = 1080;
        if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
            BGmusicSprite.baseTexture.source.pause();
        }
        CURRENT_LVL = 0;
        resetJammers();

        resetInstru(instrunote1);
        resetInstru(instrunote2);
        resetInstru(instrunote3);
        resetInstru(instrunote4);
        resetInstru(instrunote5);

        weapon2.available = false;
        weapon2.y = 3000;
        weapon3.available = false;
        weapon3.y = 3000;
        swapWeapon(weapon1);

        msg_menu_1.y = msg_menu_1.y + 1080;
        msg_menu_2.y = msg_menu_2.y + 1080;
        hamster.progress = 0;
        hamster.moving = true;
        hamster.vx = 0.35;

        progress = 0;
        setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

        BG_start.y = 1080;
        BG_win.y = 1080;
        BG_lose.y = 1080;
        //chibi.y = 1080-771;
        //onPlayVideo('claps_end_of_level', true);
        onPlayVideo('Countdown_Start_Race', true);
        //onPlayVideo('musique_game', true);
        mode = 'normal';
    }

    function onWinGame() {
        resetJammers();
        if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
            BGmusicSprite.baseTexture.source.pause();
        }
        onPlayVideo('claps_end_of_level', true);
        msg_status.text = 'Click here to restart';
        msg_status.y = 850;
        msg_status.x = 200;

        hamster.moving = false;
        hamster.vx = 0;

        setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

        msg_menu_1.y = msg_menu_1.y - 1080;
        msg_menu_2.y = msg_menu_2.y - 1080;
        BG_start.y = 1080;
        BG_win.y = 0;
        BG_lose.y = 1080;
        mode = 'win';
    }

    function onLoseGame() {
        resetJammers();
        if(mode != 'lose') {
            if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
                BGmusicSprite.baseTexture.source.pause();
            }
            onPlayVideo('oh_no', false);
            onPlayVideo('ending', true);
            msg_status.text = 
            '             don\'t miss notes \n'+
            '       don\'t hit black notes \n';
            msg_status.y = 700;
            msg_status.x = 40;

            hamster.moving = false;
            hamster.vx = 0;

            setPositionOnCurve(hamster, hamster.progress++, hamsterControlPoints);

            msg_menu_1.y = msg_menu_1.y - 1080;
            msg_menu_2.y = msg_menu_2.y - 1080;
            BG_start.y = 1080;
            BG_win.y = 1080;
            BG_lose.y = 0;
            mode = 'lose';
        }
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
            if(mode == 'normal') {
                shoot(targetX,targetY);
            }

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


                var curr_weapon_speed = bullets[i].weapon.weapon_speed || 10;
                console.log('shoot speed ',bullets[i].weapon,' ',curr_weapon_speed, 3.1416/16);
                var oppositeSz = targetY > bullets[i].y ? ( bullets[i].y -targetY ) :(targetY - bullets[i].y );
                var goes_down = targetY > bullets[i].y ? true : false;
                var adjacentSz = (targetX - bullets[i].x);
                //bullets[i].shoot_angle = adjacentSz == 0 ? 3.1416/2 : adjacentSz <= 0 ? 3.1416/2 + Math.atan(oppositeSz / -adjacentSz ): Math.atan(oppositeSz / adjacentSz );
                bullets[i].rotation = bullets[i].weapon.bulletAngle || 0 ;
                console.log('shoot base angle',bullets[i].rotation);
                if(adjacentSz == 0){
                    bullets[i].vx = 0;
                    bullets[i].vy = -curr_weapon_speed;
                    bullets[i].rotation -= 3.1416/4;
                } else {
                    bullets[i].vx =  oppositeSz / adjacentSz > 1 || oppositeSz / adjacentSz < -1 ? curr_weapon_speed / (oppositeSz / adjacentSz) : curr_weapon_speed ;
                    bullets[i].vy =  oppositeSz / adjacentSz > 1 || oppositeSz / adjacentSz < -1 ? curr_weapon_speed                             : curr_weapon_speed * (oppositeSz / adjacentSz) ;

                    bullets[i].rotation += adjacentSz < 0 ? 3.1416+Math.atan(oppositeSz / adjacentSz ) : Math.atan(oppositeSz / adjacentSz ) ;
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
                console.log('shoot final angle',bullets[i].rotation);


                bullets[i].vx = bullets[i].vx > 0 != adjacentSz >0 ? - bullets[i].vx : bullets[i].vx;
                bullets[i].vy = bullets[i].vy > 0 != goes_down ? -bullets[i].vy : bullets[i].vy;

                //bullets[i].shoot_angle = adjacentSz == 0 ? 3.1416/2 : adjacentSz <= 0 ? 3.1416/2 + Math.atan(oppositeSz / -adjacentSz ): Math.atan(oppositeSz / adjacentSz );

                //bullets[i].vx = curr_weapon_speed* Math.cos(bullets[i].shoot_angle);
                //bullets[i].vy = -curr_weapon_speed* Math.sin(bullets[i].shoot_angle);
                //console.log('shoot ',i, ' ',(bullets[i].shoot_angle*180/3.1416));
                //console.log('shooted ',oppositeSz,adjacentSz , ' ',(bullets[i].shoot_angle*180/3.1416));
                //console.log('shooted ',adjacentSz,oppositeSz ,(oppositeSz / adjacentSz), ' ',bullets[i].vx,bullets[i].vy);
                //console.log('shooted ',bullets[i]);

                onPlayVideo(bullets[i].weapon.weaponShoot, false);
            }

        }
        if(!found) {
            //console.log('shoot in CD');
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
                    BGmusicSprite.baseTexture.source.loop = 'claps_end_of_level' != sound_name && 'Countdown_Start_Race' != sound_name;
                    //console.log('music T2 ',BGmusicSprite.baseTexture.source);
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


    function resetJammers(){
        for (var i = 0; i < jammers.length; i++) {
             // fold
            jammers[i].flying = false;
            jammers[i].x = -2000;
            jammers[i].y = -2000;
            jammers[i].vx = 0;
            jammers[i].vy = 0;
        }
    }

    function resetInstru(instruToReset) {
        instruToReset.x = 3000;
        instruToReset.y = 3000;
        instruToReset.amountCpt = 0;
    }

    function addInstru(instruToAdd) {

        if(instruToAdd.amountCpt == 0){
            instruToAdd.x = randomInt(300,1720);
            instruToAdd.y = randomInt(1,120);
        }

        instruToAdd.amountCpt++;
    }

    function placeNewJammers(){
        if(0 == CURRENT_LVL++){
            hamster.vx = 0.35;
            onPlayVideo('musique_game', true);
        }

        if(CURRENT_LVL > LVL_MAX/3 && !weapon2.available){
            weapon2.available = true;
            weapon2.y = WEAPON_2_Y;
            swapWeapon(weapon2);
        }


        if(CURRENT_LVL > 2*LVL_MAX/3 && !weapon3.available){
            weapon3.available = true;
            weapon3.y = WEAPON_3_Y;
            swapWeapon(weapon3);
            hamster.vx = 0.5;
        }

        for (var i = 0; i < bullets.length; i++) {
            bullets[i].flying = false;
            bullets[i].x = -200;
            bullets[i].y = -200;
        }

        // TODO unjam guns
        //weapon1.un

        resetInstru(instrunote1);
        resetInstru(instrunote2);
        resetInstru(instrunote3);
        resetInstru(instrunote4);
        resetInstru(instrunote5);

        var difficulty = (CURRENT_LVL/2) % 8 ; // 0 easy to 9 hardcore
        var badNotesCpt = 0;
        for (var i = 0; i < jammers.length; i++) {
            if(i<=2+difficulty && !jammers[i].isBad){
                jammers[i].flying = true;
                jammers[i].x = 20+randomInt(0,1820);
                jammers[i].y = 180+randomInt(1,400);
                jammers[i].vx = (randomInt(0,5)-1)/10;
                jammers[i].vy = (randomInt(0,5)-1)/10;

                addInstru(jammers[i].instru);


            } else if(jammers[i].isBad && badNotesCpt+1 < CURRENT_LVL/(LVL_MAX/3)){
                badNotesCpt++
                jammers[i].flying = true;
                jammers[i].x = 20+randomInt(0,1820);
                //jammers[i].y = 100+randomInt(50,600);
                jammers[i].y = 180+randomInt(1,300);
                jammers[i].vx = (randomInt(0,5)-1)/10;
                jammers[i].vy = (randomInt(0,5)-1)/10;
            } else {
                 // fold
                jammers[i].flying = false;
                jammers[i].x = -2000;
                jammers[i].y = -2000;
                jammers[i].vx = 0;
                jammers[i].vy = 0;
            }
        }
    }

    function moveJammers(speed){
        for (var i = 0; i < jammers.length; i++) {
            if(jammers[i].flying){
                jammers[i].y += jammers[i].vy;
                if(jammers[i].y <= 250 && jammers[i].vy < 0){
                    jammers[i].vy = -jammers[i].vy;
                }
                if(jammers[i].y >= size[1]-650 && jammers[i].vy > 0){
                    jammers[i].vy = -jammers[i].vy;
                }
                jammers[i].x += jammers[i].vx;
                if(jammers[i].x <= 0 || jammers[i].vx <0){
                    jammers[i].vx = -jammers[i].vx;
                }
                if(jammers[i].x >= size[0]-150 && jammers[i].vx >0){
                    jammers[i].vx = -jammers[i].vx;
                }
            }
        }
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

                    for (var i = 0; i < jammers.length; i++) {
                        if(!jammers[i].isBad && jammers[i].flying){
                            resetJammers();
                            onLoseGame();
                            return;
                        }
                    }

                    // teleport back
                    hamster.progress=0;
                    //hamster.x = ROLLER_COASTER_LEFT;

                    if(CURRENT_LVL >LVL_MAX){
                        onWinGame();
                    }

                    placeNewJammers();
                }

                break;
        }

        // action
        switch (mode) {
            case 'normal':
                hamster.tilePosition.vy = 500;
                rollerCoaster1.vy=0;
                progress++;
                break;

             default:
                moveSpeed =0;
                recoverSpeed =0;
                rollerCoaster1.vy=0;
                //rollerCoaster1.y=176;

        }


        //use the hamster's velocity to make it move
        /*hamster.x += hamster.vx;
        hamster.y += hamster.vy;*/
        //hamster.tilePosition.x += hamster.tilePosition.vy;
        hamster.tilePosition.x += (timeInSec % 4 == 0 ) ? 500 : 0;

        bullet_lazer1.tilePosition.x += (timeInSec % 4 == 0 ) ? 100 : 0;
       // bullet1_lazer1.tilePosition.x += (timeInSec % 4 == 0 ) ? 100 : 0;
        bullet2_lazer1.tilePosition.x += (timeInSec % 4 == 0 ) ? 100 : 0;
        bullet3_lazer1.tilePosition.x += (timeInSec % 4 == 0 ) ? 100 : 0;
        bullet4_lazer1.tilePosition.x += (timeInSec % 4 == 0 ) ? 100 : 0;

        //rollerCoaster1.y += tilingSpriteMessyHair.vy;

        hamster.progress += hamster.vx;
        setPositionOnCurve(hamster, hamster.progress, hamsterControlPoints);

        moveJammers(mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed);
        moveBullets(1);
        //check for a collision between the hamster and the box
        /*if (hitTestRectangle(hamster, box)) {

            //if there's a collision, change the message text
            //and tint the box red
            message.text = "hit!";
            box.tint = 0xff3300;
        } else {

            //if there's no collision, reset the message
            //text and the box's color
            //message.text = "No collision...("+hamster.x+", "+hamster.y+")";
            box.tint = 0xccff99;
        }*/
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
                sprite.rotation = 0;
                //sprite.rotation = (-3.1416/180)*(previousPoint.rotation + (nextPoint.rotation-previousPoint.rotation)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress));

                var curve_offsetX = (sprite.curve_offsetX || 0)
                var curve_offsetY = (sprite.curve_offsetY -10 || 0)
                sprite.x =  Math.cos(sprite.rotation)*curve_offsetX + previousPoint.x + (nextPoint.x-previousPoint.x)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress);
                sprite.y =  Math.cos(sprite.rotation)*curve_offsetY  + previousPoint.y + (nextPoint.y-previousPoint.y)*(curveProgress-previousPoint.progress)/(nextPoint.progress-previousPoint.progress);


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

        { progress: 0,    x: 300 ,                             y: 752       ,  rotation:0 },// initial point, at enter gate
	{ progress: 1,    x: 325 ,                             y: 777       ,  rotation:-45 },// initial point, at enter gate
	{ progress: 11.8,    x: 475 ,                             y: 950      ,  rotation:0 },// initial point, at enter gate
	{ progress: 12.5,    x: 500 ,                             y: 975      ,  rotation:45 },// initial point, at enter gate
	{ progress: 15.25,    x: 575 ,                             y: 895      ,  rotation:45 },// initial point, at enter gate
	{ progress: 30,    x: 800 ,                             y: 600      ,  rotation:0 },// initial point, at enter gate
	{ progress: 32,    x: 825 ,                             y: 625      ,  rotation:-45 },// initial point, at enter gate
	{ progress: 33.9,    x: 850 ,                             y: 700      ,  rotation:-45 },// initial point, at enter gate
	{ progress: 46.4,    x: 1000 ,                             y: 900      ,  rotation:0 },// initial point, at enter gate
	{ progress: 48,    x: 1025 ,                             y: 925      ,  rotation:45 },// initial point, at enter gate
    //{ progress: 50,   x: (ROLLER_COASTER_RIGHT + ROLLER_COASTER_LEFT) / 2 , y: 675  ,  rotation:0 },// middle point, at enter gate
	{ progress: 56.6,    x: 1200 ,                             y: 675      ,  rotation:0 },// initial point, at enter gate
	{ progress: 58,    x: 1225 ,                             y: 700      ,  rotation:-45 },// initial point, at enter gate
	{ progress: 74,    x: 1350 ,                             y: 1025      ,  rotation:0 },// initial point, at enter gate
	{ progress: 77,    x: 1375 ,                             y: 1050      ,  rotation:45 },// initial point, at enter gate
	{ progress: 88.8,    x: 1540 ,                             y: 750      ,  rotation:0 },// initial point, at enter gate
	{ progress: 93.8,    x: 1625 ,                             y: 750      ,  rotation:0 },// initial point, at enter gate
	{ progress: 95.8,    x: 1650 ,                             y: 775      ,  rotation:-45 },// initial point, at enter gate
	{ progress: 100,  x: 1750 ,                            y: 875  ,  rotation: -45 } // final point, at exit gate
    ];

    function checkBulletCollision(){

        for (var i = 0; i < bullets.length; i++) {
            if(bullets[i].flying){
                // check if out of screen
                if(bullets[i].y < -100 || bullets[i].y > size[0] + 20 || bullets[i].x < -100 || bullets[i].y > size[1] +20){
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
                                if(!bullets[i].weapon.isGoesThrough){
                                    bullets[i].flying = false;
                                    bullets[i].x = -200;
                                    bullets[i].y = -200;
                                }

                                // clear note instruction?
                                jammers[j].instru && jammers[j].instru.amountCpt --;
                                if(jammers[j].instru && jammers[j].instru.amountCpt <=0){
                                    resetInstru(jammers[j].instru);
                                }

                                jammers[j].flying = false;
                                jammers[j].x = -200;
                                jammers[j].y = -200;
                                jammers[j].vx = 0;
                                jammers[j].vy = 0;

                                if(jammers[j].isBad){
                                    onLoseGame();
                                } else {
                                    onPlayVideo('tool_select',false);
                                }
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
