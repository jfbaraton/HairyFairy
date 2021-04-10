// server url
    //let serverURL = '82.181.24.9:81'; // raspberry
    let serverURL = 'localhost:3000';

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
    .add("images/Note_1.png")
    .add("images/Note_2.png")
    .add("images/Note_3.png")
    .add("images/Note_4.png")
    .add("images/Note_5.png")
    .add("images/Badnote_1.png")
    .add("images/Badnote_2.png")
    .add("images/Badnote_3.png")
    .add("images/gum2.png")
    .add("images/static_ham_wheel.png")
    .add("images/dynamic_ham_wheel.png")
    .add("images/curseur_Menu.png")
    .add("images/BG_2ndloop.png")
    .add("images/OuterMagicGates.png")
    .add("images/Weapons/Weapon1 - Peanut1.3.png")
    .add("images/Weapons/Weapon2 - Lazer3.3.png")
    .add("images/portee vide3.png")
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
	.add("images/TESTBG.png")
	.add("images/newPictures/accessories.png")  // place to brag about accessories
	.add("images/newPictures/souvenirs.png")  	// place to brag about souvenirs
	.add("images/newPictures/trade.png")		// place to trade (half blind draft)
	.add("images/newPictures/lostAndFound.png") // place for lost and found (blind draft)
	.add("images/newPictures/party.png")		// place to brag about boose
	.add("images/newPictures/suitCase2.png")	
	//.add("images/newPictures/suitCase2.png")	// STEP 1 add texture file in the loader
	.add("images/newPictures/recap_BG.png")	
	.add("images/newPictures/avatars.png")	
	.add("images/newPictures/startScreen.png")

    .load(setup);

    //Define any variables that are used in more than one function
    let timeInSec = 0;
    let mode, tool, music, sound, BGmusicSprite, musicSprite, progress;
    let butt_music, butt_sound;
    let msg_status;
    let msg_menu_1;
    let msg_menu_2;
    let hamster;
    let weapon1,weapon2,weapon3;
    let blob, rollerCoaster1, BG_baloons1,BG_baloons2,BG_flags1,BG_flags2 , box, message, message2, state, tilingSprite, jammers;
    let instructions, instrunote1;
    let note1;
    let bullets;
    let bullet_peanut1;
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
	let screenSprites;
	let itemSprites = {};
	let itemMiniatureSprites = {};
	let avatarSprites = {};
	let suitCaseSprite;
	let suitCaseSprite2; // STEP 2 create a variable to store your sprite (texture holder)
	let recap_BG;
	let phaseText;
	let gamePhase = "title"
	let UiProgress = new Array();
	let UiState = {}
	let gameState = { history : [], gameId : -1, 
	
	// user properties
		playerid : 2, // server side id, this is not the player position in this game
		playername : 'jeff',
		playeravatar : 'blob'
		}; 
	let waitingForEndOfRound = true;
	let targetPlayer = null;


    // create a texture from an image path
    //const textureMessyHair = PIXI.Texture.from('images/messy_hair.png');
    const textureHamster = PIXI.Texture.from('images/dynamic_ham_wheel.png');
    const textureLazer = PIXI.Texture.from('images/Weapons/Weapon2 - Lazer 123 .png');
    const textureGun = PIXI.Texture.from('images/Weapons/Weapon3 - Bullet1.png');
	const textureItems = PIXI.Texture.from('images/newPictures/itemTileMap.png');
	const textureAvatars = PIXI.Texture.from('images/newPictures/avatars.png');
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


    const getUrlParameter = (name) => {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };


    function setup() {

        let rootURL = window.location.href.slice(0,window.location.href.lastIndexOf("/")+1);
        if(!!getUrlParameter('playername') && !!getUrlParameter('playeravatar')){
            gameState.playername=getUrlParameter('playername');
            gameState.playeravatar=getUrlParameter('playeravatar');
            if(!!getUrlParameter('playerid')){
                console.log('everything ok');
                gameState.playerid = getUrlParameter('playerid');
            } else {
                console.log('credentials but no id, login in');
            }
            login(gameState.playername,gameState.playeravatar, (readPlayerId, readGameId, pleaseJoinGameId) => {
                if(!readPlayerId || readPlayerId != gameState.playerid){
                    console.log('credentials but no id, login in');
                    window.location = rootURL+"index.html?playername="+gameState.playername+"&playeravatar="+gameState.playeravatar+"&playerid="+readPlayerId+"";
                    return;
                }
                if(readGameId) {
                    console.log('currently in game '+readGameId );
                    gameState.gameId = readGameId;
                } else if(pleaseJoinGameId) {
                    console.log('we propose that you join game '+pleaseJoinGameId );
                    joinGame(gameState.playername,gameState.playerid,pleaseJoinGameId);
                    gameState.gameId = pleaseJoinGameId;
                } else if(!!getUrlParameter('gameid')) {
                    gameState.gameId = getUrlParameter('gameid');
                }

                if(!gameState.gameId || gameState.gameId<=0) {
                    console.log('still not in a game, '+gameState.gameId );
                    newGame(gameState.playername,gameState.playerid,(newGameId)=> {
                        if(newGameId) {
                            gameState.gameId = newGameId;
                            console.log('created game, '+gameState.gameId );
                        }
                    });
                }
            });

        } else {
            console.log('no credentials, setting random ones');
            window.location = rootURL+"index.html?playername="+gameState.playername+"&playeravatar="+gameState.playeravatar+"&playerid="+gameState.playerid+"";
        }
/*
        if(!!getUrlParameter('gameid')) {
            gameState.gameId = getUrlParameter('gameid');
        }

        if(!gameState.gameId || gameState.gameId<=0) {
            console.log('still not in a game, '+gameState.gameId );
            newGame(playername,gameState.playerid,(newGameId)=> {
               if(newGameId) {
                   gameState.gameId = newGameId;
                   console.log('created game, '+gameState.gameId );
               }
           });
        }*/

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
		
		// iterable for BG's
		screenSprites = {
			playScreenBG: {},
			BG_start: {},
			BG_win: {},
			BG_lose: {},
			accessories: {},	// place to brag about accessories
			souvenirs: {},		// place to brag about souvenirs
			trade: {},			// place to trade (half blind draft)
			LostAndFound: {},	// place for lost and found (blind draft)
			party: {}, 			// place to brag about boose	
		};
		
		fetchBackgroundSprites()
		
		// BG for the play screen
		screenSprites.playScreenBG = new Sprite(resources["images/TESTBG.png"].texture)
        screenSprites.playScreenBG.x = 0;
        screenSprites.playScreenBG.y = 0;
        screenSprites.playScreenBG.interactive = true;
        screenSprites.playScreenBG.on('pointerdown', onButtonDown);
        app.stage.addChild(screenSprites.playScreenBG);
		
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
        //app.stage.addChild(weapon1);

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
        //app.stage.addChild(weapon2);

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
        //app.stage.addChild(weapon3);

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
		
		suitCaseSprite = new Sprite(resources["images/newPictures/suitCase2.png"].texture)
		suitCaseSprite.x = 0
		suitCaseSprite.y = 1080
		suitCaseSprite.scale = new PIXI.Point(0.5, 0.5)
		app.stage.addChild(suitCaseSprite)
		
		
		// STEP 3 add the texture to the variable
		suitCaseSprite2 = new Sprite(resources["images/newPictures/suitCase2.png"].texture) // file
		suitCaseSprite2.x = 0 // horizontal (0 is the left of the screen, 1900 is the right)
		suitCaseSprite2.y = 0 // vertical (0 is the top of the screen, 1080 is the bottom)
		suitCaseSprite2.scale = new PIXI.Point(0.2, 0.2) // scale/zoom
		app.stage.addChild(suitCaseSprite2)				// always add it to the scene/stage
		
		
		//new sprites
		fetchItemSprites()
		fetchItemMiniatureSprites()
		
		fetchAvatarSprites()
		
		
		recap_BG = new Sprite(resources["images/newPictures/recap_BG.png"].texture) // file
		recap_BG.x = 0 // horizontal (0 is the left of the screen, 1900 is the right)
		recap_BG.y = 0 // vertical (0 is the top of the screen, 1080 is the bottom)
		recap_BG.scale = new PIXI.Point(1.0, 1.0) // scale/zoom
        recap_BG.interactive = true;				// make clickable
        recap_BG.on('pointerdown', onButtonDown);	// make clickable -> call function onButtonDown
		app.stage.addChild(recap_BG)				// always add it to the scene/stage
			
		let style14 = new TextStyle({
			fontFamily: "Bodoni MT", // "chalkduster"
			fontSize: 60,
			//fontStyle: 'underline',
			fill: "blue",
			});
		phaseText = new Text("", style14)
		app.stage.addChild(phaseText)
			
        //Create the `BG_start` sprite
        screenSprites.BG_start = new Sprite(resources["images/newPictures/startScreen.png"].texture);
        screenSprites.BG_start.x = 0;
        screenSprites.BG_start.y = 0;
		screenSprites.BG_start.interactive = true;
		screenSprites.BG_start.on('pointerdown', () => {
			gamePhase = "play"
			setBGactive("party")
			//initializeGameState()
			//parseInitialMessage(mockedMessages.initialMessage, true)
			gameRecap();
			console.log("go to game")
		})
        app.stage.addChild(screenSprites.BG_start);

        //Create the `BG_lose` sprite
        screenSprites.BG_lose = new Sprite(resources["images/BG_lose.png"].texture);
        screenSprites.BG_lose.x = 0;
        screenSprites.BG_lose.y = 1080;
        app.stage.addChild(screenSprites.BG_lose);


        //Create the `BG_win` sprite
        screenSprites.BG_win = new Sprite(resources["images/BG_win.png"].texture);
        screenSprites.BG_win.x = 0;
        screenSprites.BG_win.y = 1080;
        app.stage.addChild(screenSprites.BG_win);

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
        fontSize: 60,
        //fontStyle: 'underline',
        fill: "blue",
        });
		/*
        msg_status = new Text(
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n"+
        "                                                                                                                   .\n", style4);
        msg_status.position.set(30, 30);
        msg_status.interactive = true;
        msg_status.on('pointerdown', onStartGame)
        app.stage.addChild(msg_status);
		*/
        msg_menu_1 = new Text("Jeff Text", style4);
        msg_menu_1.position.set(10,80);
        msg_menu_1.interactive = true;
        msg_menu_1.isJeff = true;
        msg_menu_1.on('pointerdown', onButtonDown)
        app.stage.addChild(msg_menu_1);
		
		debugButton = new Text("debug", style4);
		debugButton.position.set(1500, 0)
		debugButton.interactive = true
		debugButton.on('pointerdown', () => {parseNewRoundMessage(mockedMessages.newTradRoundMsg, true)})
		app.stage.addChild(debugButton)
		

        msg_menu_2 = new Text("Settings", style4);
        msg_menu_2.position.set(MENU_X0+80, MENU_Y0+MENU_OFFSET);
        console.log('pos2 ',MENU_X0+80, ' ', MENU_Y0+MENU_OFFSET);
        msg_menu_2.interactive = true;



        //Capture the keyboard arrow keys
        let keyLetterS = keyboard(83),
          keyLetterD = keyboard(68),
          keyLetterF = keyboard(70)
          ;

        keyLetterS.press = function() {
            //swapWeapon(weapon1);
        };

        keyLetterD.press = function() {

            //swapWeapon(weapon2);

        };

        keyLetterF.press = function() {

            //swapWeapon(weapon3);

        };


        //Set the game state
        state = play;

        //Start the game loop
        app.ticker.add(delta => gameLoop(delta));
    }

    const allItems = [
        {
            category: "boose",
            id: 0
        },
        {
            category: "boose",
            id: 1
        },
        {
            category: "boose",
            id: 2
        },
        {
            category: "boose",
            id: 3
        },
        {
            category: "souvenirs",
            id: 4
        },
        {
            category: "souvenirs",
            id: 5
        },
        {
            category: "souvenirs",
            id: 6
        },
        {
            category: "souvenirs",
            id: 7
        },
        {
            category: "accessories",
            id: 8
        },
        {
            category: "accessories",
            id: 9
        },
        {
            category: "accessories",
            id: 10
        },
        {
            category: "accessories",
            id: 11
        }

    ]
		
	const mockedMessages = {
		initialMessage: {
			players: [
				{
					nickname: "Matti", 
					avatar  : "cat", //refers to filename
					position: 1 //0-3
				},
				{
					nickname: "Pentti",
					avatar  : "cat", //refers to filename
					position: 0
				},
				{
					nickname: "Pete",
					avatar  : "cat", //refers to filename
					position: 3
				},
				{
					nickname: "Ansa",
					avatar  : "cat", //refers to filename
					position: 2
				},
			],
			// special items ordered according to player position
			special_items: [
				0,
				4,
				8,
				3
			],
			new_event_type: 'boose',
			new_round: 'brag',
			new_country: 'finland', // 0-2
			player_hands: [
				[
					4,
					5,
					6
				],
				[

					0, // item id
					1,
					2
				],
				[
					8,
					9,
					10
				],
				[
					3,
					7,
					11
				]
			]
		},
		newRoundmsg: { new_round: 'lost and found', is_new_round: true },
		newTradRoundMsg: {action_parameters: { new_round: 'trade', is_new_round: true }}
	}

	const BGfiles = {
		"lost and found": "images/newPictures/lostAndFound.png",
		"party": "images/newPictures/party.png",
		"accessories": "images/newPictures/accessories.png",
		"trade": "images/newPictures/trade.png",
		"offer trade": "images/newPictures/trade.png",
		"accept trade": "images/newPictures/trade.png",
		"souvenirs": "images/newPictures/souvenirs.png",
	}
	
	const BGForEventType = {
		"boose":"party",
		"accessories":"accessories",
		"souvenirs":"souvenirs"
	};

	const fetchBackgroundSprites = () => {
		for (let key of Object.keys(BGfiles)) {
			let tmpItem = {};
			tmpItem = new Sprite(resources[BGfiles[key]].texture)
			tmpItem.x = 0
			tmpItem.y = 1080
			screenSprites[key] = tmpItem
			app.stage.addChild(screenSprites[key]);
		}
	}

	const setBGactive = (BGtype) => {
		for (let key of Object.keys(screenSprites)) {
			if(key === BGtype) {
				screenSprites[key].y = 0
			} else {
				screenSprites[key].y = 1080
			}
		}
	}
	
	const AvatarFiles = {
		"0": "images/gum2.png",
		"1": "images/gum2.png",
		"2": "images/gum2.png",
		"3": "images/gum2.png"
	}
	
	const fetchAvatarSprites = () => {
		for (let key of Object.keys(AvatarFiles)) {
			let tmpItem = {};
			tmpItem = new Sprite(resources[AvatarFiles[key]].texture)
			tmpItem.x = 0
			tmpItem.y = 1080
			tmpItem.interactive = true;
			tmpItem.on('pointerdown', onButtonDown)
			avatarSprites[key] = tmpItem
			app.stage.addChild(avatarSprites[key]);
			tmpItem.identifyForClick = () => ({elementType: "avatar", id: key})
			//console.log("keytobelogged" + key)
		}
	}
	
		
	const drawAvatars = () => {
		spriteXCoords = [1000, 1300, 1600]
		for(let id of Object.keys(AvatarFiles)){
			let targetPos = id
			if(id > gameState.playerNumber){
				targetPos -= 1
			}			
			avatarSprites[targetPos].position.set(spriteXCoords[targetPos], 300)
		}
	}

	const drawInventory = () => {
		suitCaseSprite.x = 0
		suitCaseSprite.y = 300
		
		/*
		positionItem("0", 0, 200)
		positionItem("1", 300, 200)
		positionItem("2", 600, 200)
		positionItem("3", 900, 200)
		positionItem("4", 1200, 200)
		positionItem("5", 1500, 200)
		positionItem("6", 0, 500)
		positionItem("7", 300, 500)
		positionItem("8", 600, 500)
		positionItem("9", 900, 500)
		positionItem("10", 1200, 500)
		positionItem("11", 1000, 500)
		*/
		
		hand = gameState.hands[gameState.playerNumber]
		positionItem(hand[0], suitCaseSprite.x + 100, suitCaseSprite.y + 300)
		positionItem(hand[1], suitCaseSprite.x + 300, suitCaseSprite.y + 300)
		positionItem(hand[2], suitCaseSprite.x + 500, suitCaseSprite.y + 300)
		
	}
	
	const fetchItemSprites = () => {
		
		for (let key of Object.keys(itemPositions)) {
			let tmpItem = {};
			tmpItem = new PIXI.TilingSprite(
				textureItems,
				600,
				600
			);
			tmpItem.x = 0
			tmpItem.y = 1080
			tmpItem.tilePosition.x = itemPositions[key][0]
			tmpItem.tilePosition.y = itemPositions[key][1]
			tmpItem.interactive = true;
			tmpItem.on('pointerdown', onButtonDown)
			tmpItem.scale = new PIXI.Point(0.3, 0.3)
			//console.log("the key for the future: " + key)
			tmpItem.identifyForClick = () => ({elementType: "item", id: key})
			itemSprites[key] = tmpItem
			app.stage.addChild(itemSprites[key]);
		}
	}
	
	const hideItemsNotInHand = () => {
		for (let key of Object.keys(itemPositions)) {
			if(!gameState.hands[gameState.playerNumber].some(oneItemInHand => oneItemInHand == key)) {
				//console.log("hideItemsNotInHand: hides" + key)
				positionItem(key, 0, 1080);
			} else {
				//console.log("hideItemsNotInHand: KEEP" + key)
			}
		}
	}

	const fetchItemMiniatureSprites = () => {
		
		for (let key of Object.keys(itemPositions)) {
			let tmpItem = {};
			tmpItem = new PIXI.TilingSprite(
				textureItems,
				600,
				600
			);
			tmpItem.x = 0
			tmpItem.y = 1080
			tmpItem.tilePosition.x = itemPositions[key][0]
			tmpItem.tilePosition.y = itemPositions[key][1]
			//tmpItem.interactive = true;
			//tmpItem.on('pointerdown', onButtonDown)
			tmpItem.scale = new PIXI.Point(0.3, 0.3)
			//console.log("the key for the future: " + key)
			tmpItem.identifyForClick = () => ({elementType: "miniatureitem", id: key})
			itemMiniatureSprites[key] = tmpItem
			app.stage.addChild(itemMiniatureSprites[key]);
		}
	}

	const itemPositions = {
		"0": [3200, 2580],
		"1": [2550, 2580],
		"2": [1920, 2580],
		"3": [1240, 2580],
		"4": [600, 2580],
		"5": [3200, 1200],
		"6": [2550, 1200],
		"7": [1920, 1200],
		"8": [1240, 1200],
		"9": [600, 1200],
		"10": [3200, 650],
		"11": [2550, 650],
		"12": [1920, 650],
		"13": [1240, 650],
		"14": [600, 650],
	}
	
	const positionItem = (itemId, newX, newY) => {
		itemSprites[itemId].x = newX
		itemSprites[itemId].y = newY
	}
	
	const positionItemMiniature = (itemId, newX, newY) => {
		itemMiniatureSprites[itemId].x = newX
		itemMiniatureSprites[itemId].y = newY
	}
	
	const createOrUpdatePhaseText = (textForPhase) => {
		if (!phaseText){
			phaseText = new Text(textForPhase, style14)
			app.stage.addChild(phaseText)
		} else {
			phaseText.text = textForPhase
		}
		phaseText.position.set(700, 950)
	}	


	const initializeGameState = () => {
		gameState["currentDay"] = 0
		gameState.playerNumber = 0
		gameState.currentRound = 'brag';
		gameState.currentEvent = 'accessories';
		gameState.currentCountry = 'finland';
		gameState.history = [];
		parseInitialMessage(mockedMessages.initialMessage)
	}

    // join messages are the 4 first after game creation, they define player numbers
    const parseJoinMessage = (joinMessage, isRender) => {
        var playerPosition = parseInt(joinMessage.phase_after)-1;
        gameState.players[playerPosition] = {
            nickname: joinMessage.nickname,
            avatar: joinMessage.avatar,
            position: playerPosition//0-3
        };
		if(joinMessage.player === gameState.playerid){
			gameState.playerNumber = playerPosition
		}
		
		if(isRender) {
			// TODO add to gameRecap panel?
		}
    }
	
	
    // brag action. nothing to do except mark it as done
    const parseBragMessage = (joinMessage, isRender) => {
		if(isRender) {
			if(joinMessage.player === gameState.playerid){
				waitingForEndOfRound = true;
			}
		}
    }
    
	// lost and found action. nothing to do except mark it as done
    const parseLostAndFoundMessage = (joinMessage, isRender) => {
		if(isRender) {
			if(joinMessage.player === gameState.playerid){
				waitingForEndOfRound = true;
			}
		}
    }
	
    // declare trade action. nothing to do except mark it as done
    const parseDeclareTradesMessage = (joinMessage, isRender) => {
		
		if(isRender) {
			if(joinMessage.player === gameState.playerid){
				waitingForEndOfRound = true;
			}
		}
    }
	
    // accept/declide trades action. nothing to do except mark it as done
    const parseAcceptTradesMessage = (joinMessage, isRender) => {
		
		if(isRender) {
			if(joinMessage.player === gameState.playerid){
				waitingForEndOfRound = true;
			}
		}
    }

	const parseInitialMessage = (initialMessage, isRender) => {
		//gameState.playerNumber = initialMessage.playerNumber
		if(initialMessage.players) { // only in the mocked initial message. in real life, the players are read from the join messages. see parseJoinMessage
		    gameState.players = initialMessage.players
		}
		
		if(isRender) {
			gameState.currentRound = initialMessage.new_round;
			gameState.currentEvent = initialMessage.new_event_type
			gameState.currentCountry = initialMessage.new_country;
		}
		gameState.specialCards = initialMessage.special_items
		gameState.hands = initialMessage.player_hands
		
	}

	// new round:  00 = event, 10 = lost & found, 20 = propose trade, 30 = accept/refuse trade
	const parseNewRoundMessage = (newRoundMessage, isRender) => {
		
		if(isRender) {
			gameState.currentRound = newRoundMessage.action_parameters.new_round;
			UiProgress = new Array()
			hideItemsNotInHand();
		}
	}

    // random order: boose, personal items , souvenir& duty free . 100 for theb first, 200 for the second, 300 for the last
	const parseNewEventTypeMessage = (newEventTypeMessage, isRender) => {
		
		if(isRender) {
			gameState.currentEvent = newEventTypeMessage.action_parameters.new_event_type;
		}
	}

    // new country: 0000 for the first, 1000 for the second, 2000 for the third, 3000 for the fourth
	const parseNewCountryMessage = (newEventTypeMessage, isRender) => {
		
		if(isRender) {
			gameState.currentCountry = newEventTypeMessage.action_parameters.new_country;
		}
	}
	
	const renderTitleScreen = () => {
		setBGactive("BG_start")
	}

	function onStartGame() {
        // msg_status.y = 1080;
        if(BGmusicSprite && BGmusicSprite.baseTexture && BGmusicSprite.baseTexture.source && BGmusicSprite.baseTexture.source.pause){
            BGmusicSprite.baseTexture.source.pause();
        }
		
		/*
		initializeGameState()
		parseInitialMessage(mockedMessages.initialMessage)
		*/
		
		/*
		positionItem("0", 0, 200)
		positionItem("1", 200, 200)
		positionItem("2", 400, 200)
		positionItem("3", 600, 200)
		positionItem("4", 800, 200)
		positionItem("5", 1000, 200)
		positionItem("6", 0, 500)
		positionItem("7", 200, 500)
		positionItem("8", 400, 500)
		positionItem("9", 600, 500)
		positionItem("10", 800, 500)
		positionItem("11", 1000, 500)
		*/
		
		/*
		drawInventory()
		createOrUpdatePhaseText("select an item for the event")
		
        CURRENT_LVL = 0;
        resetJammers();

        resetInstru(instrunote1);

        weapon2.available = false;
        weapon2.y = 3000;
        weapon3.available = false;
        weapon3.y = 3000;

        //msg_menu_1.y = msg_menu_1.y + 1080;
        msg_menu_2.y = msg_menu_2.y + 1080;
        hamster.progress = 0;
        hamster.moving = true;
        hamster.vx = 0.35;

        progress = 0;

        screenSprites.BG_start.y = 1080;
        screenSprites.BG_win.y = 1080;
        screenSprites.BG_lose.y = 1080;
        //chibi.y = 1080-771;
        //onPlayVideo('claps_end_of_level', true);
        onPlayVideo('Countdown_Start_Race', true);
        //onPlayVideo('musique_game', true);
        mode = 'normal';
		
		*/
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


        //msg_menu_1.y = msg_menu_1.y - 1080;
        msg_menu_2.y = msg_menu_2.y - 1080;
        screenSprites.BG_start.y = 1080;
        screenSprites.BG_win.y = 0;
        screenSprites.BG_lose.y = 1080;
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


            //msg_menu_1.y = msg_menu_1.y - 1080;
            msg_menu_2.y = msg_menu_2.y - 1080;
            screenSprites.BG_start.y = 1080;
            screenSprites.BG_win.y = 1080;
            screenSprites.BG_lose.y = 0;
            mode = 'lose';
        }
    }
	
	const tradeAvatarSpots = (playerPos, tradePartnerPos) => {
		let targetPosOnScreen = tradePartnerPos
		if(playerPos < tradePartnerPos){
			targetPosOnScreen -= 1
		}
		
		console.log(playerPos, tradePartnerPos)
		
		switch (targetPosOnScreen){
			case 0:
				return {x: 1000, y: 300};
			case 1:
				return {x: 1300, y: 300};
			case 0:
				return {x: 1600, y: 300};
		}
		
	}
	
    function onButtonDown(param) {1
        this.isdown = true;
        if(this.textureButtonDown){
            this.texture = textureButtonDown;
        }
		let clickIdentifier = this.identifyForClick && this.identifyForClick()
		
		console.log("click ",clickIdentifier, " this: ",this)
		console.log("------------------------------------------------- ",gameState.currentRound)
		if( gamePhase == 'play') {
			if(!waitingForEndOfRound && clickIdentifier && clickIdentifier.elementType === "item") {
				switch(gameState.currentRound){
					case 'brag':
						console.log("you clicked item " + "[name of item] " + clickIdentifier.id )
						waitingForEndOfRound = true;
						var actionId = getCurrentActionId();
						playItem(actionId,clickIdentifier.id,targetPlayer);
						if(UiProgress.length === 0){
							UiProgress.push(() => positionItem(clickIdentifier.id, 1300, 800))
						}
						break;
					case 'lost and found':
						console.log("send more actions to server")
						waitingForEndOfRound = true;
						var actionId = getCurrentActionId();
						playItem(actionId,clickIdentifier.id,targetPlayer);
						if(UiProgress.length === 0){
							UiProgress.push(() => positionItem(clickIdentifier.id, 1200, 800))
						} else if(UiProgress.length ===1) {
							UiProgress.push(() => positionItem(clickIdentifier.id, 1400, 800))
						}
						break;
					case 'trade':
						console.log("somewhere here trade actions" + UiProgress.length)
						if(UiProgress.length === 0){
							
							UiState.itemIsBeingTraded = clickIdentifier.id
						}
				}
				
				console.log("end switch" + UiProgress.length)
			} else {
				console.log("waiting or not item" + waitingForEndOfRound+ " , "+(clickIdentifier && clickIdentifier.elementType))
			}
			
			if(clickIdentifier && clickIdentifier.elementType === "avatar") {
				if(UiState.itemIsBeingTraded !== undefined){
					let coordsForItem = tradeAvatarSpots(gameState.playerNumber, parseInt(clickIdentifier.id))
					console.log("itemCoords" + coordsForItem)
					let tradeItemNumber = UiState.itemIsBeingTraded
					UiProgress.push(() => positionItem(tradeItemNumber, coordsForItem.x, coordsForItem.y + 300))
					UiState.itemIsBeingTraded = undefined
				}
			}
			
			var clickX = param.data.global.x;
            var clickY = param.data.global.y;
			// check that the zone to open game recap was clicked
			if(
				(clickX > 1702 && clickY > 102 && clickY  < 255) ||
				(clickX > (1765+(clickY-255)*(200/800)) && clickY > 255) 
				) {
				gamePhase = 'gameRecap'; // leave recap sheet
			}
			
		} else if(gamePhase == 'gameRecap'){
			gamePhase = 'play'; // leave recap sheet
		}
		
		
        if(this.isJeff){
            console.log('click jeff');
            this.text = 'yes you clicked';

            gameRecap(this);
        } else {
            console.log('NOT click weapon',param.data.global);
            var targetX = param.data.global.x;
            var targetY = param.data.global.y;
            if(mode == 'normal') {
                //shoot(targetX,targetY);
            }

            //console.log('click ',param.data.global);
            //var mousePosition = app.renderer.interaction.mouse.global;
            //console.log('click ',mousePosition);
        }
        this.alpha = 1;

    }

    const getCurrentActionId = () => {
        let actionId = gameState.history.length && gameState.history[gameState.history.length-1].phase_after;
    	actionId = actionId-(actionId % 10); // if the latest known phase is 110, 111, 112, 113 or 114, then the current actionId is 110

    	return actionId;
    }

    const login = async (playername,playeravatar,callBack) => {
        console.log('async call login');
        const response = await fetch('http://'+serverURL+'/HairyFairy/login.php?playername='+playername+'&playeravatar='+playeravatar);
        const myJson = await response.json(); //extract JSON from the http response
        console.log('login answer',myJson);
        //messageArea.text = rendergameRecap(myJson);
        if(myJson && myJson.id){
            callBack(myJson.id, myJson.gameid, myJson.pleaseJoinGameId);
        } else if(myJson && myJson.data && myJson.data.id){
            callBack(myJson.data.id,myJson.data.gameid, myJson.data.pleaseJoinGameId);
        } else {
            callBack();
        }
        console.log('login done!!!!');
        // do something with myJson
    };

    const joinGame = async (playername,playerid, joinGameId) => {
        console.log('async call joinGame');
        const response = await fetch('http://'+serverURL+'/HairyFairy/joinGame.php?playername='+playername+'&playerid='+playerid+'&gameid='+joinGameId+'&gametype=lajam');
        const myJson = await response.json(); //extract JSON from the http response
        console.log('joinGame answer',myJson);
        //messageArea.text = rendergameRecap(myJson);
        console.log('joinGame done!!!!');
        // do something with myJson
    };

    const listGames = async (playername,playerid,callBack) => {
        console.log('async call listGames');
        const response = await fetch('http://'+serverURL+'/HairyFairy/listGames.php?playername='+playername+'&playerid='+playerid);
        const myJson = await response.json(); //extract JSON from the http response
        console.log('listGames answer',myJson);
        //messageArea.text = rendergameRecap(myJson);
        if(myJson && myJson.data && myJson.data.length){
            // 1 games in progress where i am already
            // 2 games in progress where i am not yet
            callBack(myJson.data);
            //3 no game found. will have to create one
        } else {
        }
        console.log('listGames done!!!!');
        // do something with myJson
    };

    const newGame = async (playername,playerid,callBack) => {
        console.log('async call newGame');
        const response = await fetch('http://'+serverURL+'/HairyFairy/newGame.php?playername='+playername+'&playerid='+playerid+'&gametype=lajam');
        //const response = await   fetch('http://localhost/HairyFairy/newGame.php?playername=jeff&playerid=2&gametype=lajam);
        const myJson = await response.json(); //extract JSON from the http response
        console.log('newGame answer',myJson);
        //messageArea.text = rendergameRecap(myJson);
        if(myJson && myJson.id){
            callBack(myJson.id);
        } else if(myJson && myJson.data && myJson.data.id){
            callBack(myJson.data.id);
        } else {
            callBack();
        }
        console.log('newGame done!!!!');
        // do something with myJson
    };

    const gameRecap = async (messageArea) => {
        console.log('async call gameRecap '+gameState.gameId);
        const response = await fetch('http://'+serverURL+'/HairyFairy/gameRecap.php?playername='+gameState.playername+'&playerid='+gameState.playerid+'&gameid='+gameState.gameId);
        const myJson = await response.json(); //extract JSON from the http response
        console.log('gameRecap answer',myJson);
		let debug = rendergameRecap(myJson);
		if(messageArea) {
			messageArea.text = debug;
			console.log('gameRecap done!!!!',messageArea.text);
		}
        // do something with myJson
    };

    const playItem = async (actionId,itemId,targetPlayer) => {
        let action_parameters = {itemId : itemId};
        if(targetPlayer) {
            action_parameters.targetPlayer = targetPlayer;
        }
        let base64Parameter = btoa(JSON.stringify(action_parameters));
        console.log('async call doGameAction',actionId,itemId,targetPlayer);
        //const response = await fetch('http://'+serverURL+'/HairyFairy/gameRecap.php?playername='+playername+'&playerid='+playerid+'&gameid='+gameId);
        const response = await fetch('http://'+serverURL+'/HairyFairy/doGameAction.php?playername='+gameState.playername+'&playerid='+gameState.playerid+'&gametype=lajam&action='+actionId+'&description='+gameState.currentRound+'&actionParameter='+base64Parameter+'&gameid='+gameState.gameId);
        const myJson = await response.json(); //extract JSON from the http response
        console.log('doGameAction answer',myJson);
        //this.text = rendergameRecap(myJson);
        //console.log('async done!!!!',myJson);
        // do something with myJson
    };

    function rendergameRecap(gameRecapJSON) {
        result = "not an array "+(gameRecapJSON && typeof(gameRecapJSON.data));
        console.log('rendergameRecap ',gameRecapJSON);
        if(gameRecapJSON && gameRecapJSON.data && gameRecapJSON.data.length){
            if(gameState.history.length != gameRecapJSON.data.length){
                //waitingForEndOfRound = true; // actually, this should be set when we a re done reading the history. in case of refresh of the page
				const serverPhase = gameRecapJSON.data[gameRecapJSON.data.length-1].phase_after;
				const serverPhaseBegin = serverPhase-(serverPhase%10);
				const clientPhase = !gameState.history.length ? 0 : gameState.history[gameState.history.length-1].phase_after;
				const clientPhaseBegin = clientPhase-(clientPhase%10);
				
                targetPlayer = null;
                if(clientPhase == 0){
					initializeGameState();
				}
                result = "here is what happened \n";
                gameRecapJSON.data.forEach(oneRecord => {
					if(!gameState.history.length || 
						( !gameState.history.some(gameevent => gameevent.phase_after == oneRecord.phase_after) && // we only parse unknown events
							(oneRecord.phase_after <=100 || 													  // from initial phases (join, init)
							oneRecord.player == gameState.playerid || 											  // or by us
							oneRecord.phase_after <= serverPhaseBegin))){ 										  // or from finished phases
						gameState.history.push(oneRecord);
						let isRender = oneRecord.phase_after >= serverPhaseBegin;
						//result += "\n"+JSON.stringify(oneRecord);
						result += "\n"+" at "+oneRecord.phase_after+" - "+oneRecord.nickname+" did "+oneRecord.description+" : "+JSON.stringify(oneRecord.action_parameters);
						if(oneRecord.phase_after == "100") {
							parseInitialMessage(oneRecord.action_parameters, isRender);
						}
						switch(oneRecord.description){
							case "join": parseJoinMessage(oneRecord, isRender); break;
							case "brag": parseBragMessage(oneRecord, isRender); break;
							case "lost and found": parseLostAndFoundMessage(oneRecord, isRender); break;
							case "declare trades": parseDeclareTradesMessage(oneRecord, isRender); break;
							case "accept trades": parseAcceptTradesMessage(oneRecord, isRender); break;
						}
						if(oneRecord.action_parameters.is_new_round) {
							parseNewRoundMessage(oneRecord, isRender);
						}
						if(oneRecord.action_parameters.is_new_event_type) {
							parseNewEventTypeMessage(oneRecord, isRender);
						}
						if(oneRecord.action_parameters.is_new_country) {
							parseNewCountryMessage(oneRecord, isRender);
						}

						if(serverPhaseBegin > clientPhaseBegin && oneRecord.phase_after == serverPhaseBegin) {
							// decide whether an action from the player will be needed this turn
							
							// if an action is expected and as not already been made
							waitingForEndOfRound = false;
						}
						
						
					}
                });
            } else {
                 result = "nothing new in history ";
             }
        }

        return result;
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
        }


        if(CURRENT_LVL > 2*LVL_MAX/3 && !weapon3.available){
            weapon3.available = true;
            weapon3.y = WEAPON_3_Y;
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
	
	function showGameRecapSheet() {
		let sheetMoveSpeed = 15;
		
		if(recap_BG.x >0) {
			recap_BG.x -= sheetMoveSpeed;
		}
		
	}
	function hideGameRecapSheet() {
		let SHEET_MAX_OFFSET = 500; // part of the sheet that ends up hidden on the right
		let sheetMoveSpeed = 15;
		
		if(recap_BG.x < SHEET_MAX_OFFSET) {
			recap_BG.x += sheetMoveSpeed;
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
		
		switch (gamePhase){
			case 'title':
				renderTitleScreen()
				break;
			case 'play':
				hideGameRecapSheet();
				switch (gameState.currentRound){
					case 'brag':
						setBGactive(BGForEventType[gameState.currentEvent])
						drawInventory()
						UiProgress.forEach(f => f())
						createOrUpdatePhaseText("select an item for the event")
						break;
					case 'lost and found':
						setBGactive(gameState.currentRound)
						drawInventory()
						UiProgress.forEach(f=> f())
						createOrUpdatePhaseText("select up to two items to send to lost and found")
						break;
					case 'declare trade':
					case 'accept trade':
					case 'trade':
						setBGactive(gameState.currentRound)
						drawAvatars()
						drawInventory()
						UiProgress.forEach(f => f())
						createOrUpdatePhaseText("offer a trade")
						break;
				}
				break;
			case 'gameRecap': // show the score sheet on the right and prevent game actions
				showGameRecapSheet();
				break;
		}
		
		
		
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

        hamster.progress = 10 ;

        moveJammers(mode === 'recover' ? moveSpeed-recoverSpeed : moveSpeed);

    }

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
