<?php
$servername = "localhost";
$username = "gamemaster";
$password = "gamemaster";
$db = "gamejam";
// Create connection
$conn = mysqli_connect($servername, $username, $password,$db);
// Check connection
if (!$conn) {
   die("Connection failed: " . mysqli_connect_error());
}


$ROUND_AMOUNT = 4;           // 00 = event, 10 = lost & found, 20 = propose trade, 30 = accept/refuse trade
$EVENT_TYPE_AMOUNT = 3;      // random order: boose, personal items , souvenir& duty free . 100 for theb first, 200 for the second, 300 for the last
$ITEMS_PER_TYPE_AMOUNT = $EVENT_TYPE_AMOUNT+1;
$COUNTRY_AMOUNT = 4;         // 0000 for the first, 1000 for the seconf, 2000 for the third, 3000 for the fourth
$PLAYER_AMOUNT = 4;



$playername = $_GET["playername"];
$playerid = $_GET["playerid"];
$gametype = $_GET["gametype"];
$gameid = $_GET["gameid"];
$granted = false;
$return = [ 'error' => 'nothing happened', 'id' => -1];
    // will encode to JSON object: {"error":"nothing happened","id":-1}
    // accessed as example in JavaScript like: result.name or result['error'] (returns "nothing happened")
if(!empty($playerid) && !empty($playername) && !empty($gametype) && !empty($gameid)) {
    /* Select queries return a resultset */
    $sql = "SELECT id FROM player WHERE nickname = '".$playername."' and id = '".$playerid."' LIMIT 10";
    if ($result = mysqli_query($conn, $sql)) {
        if(mysqli_num_rows($result) >0) {
            $playerid = mysqli_fetch_assoc($result)["id"];
            $return = [ 'action' => 'found', 'id' => $playerid ];
        } else {
            $return = [ 'action' => 'NOT found', 'id' => -1 ];
            $playerid = -1;
        }

        mysqli_free_result($result);
    } else {
         $return = [ 'action' => 'FAILED to read 1 ##'.$sql.'##', 'id' => -1 ];
        $playerid = -1;
    }

    if ($playerid >0 ) {
        $sql = "select game.id, game.gametype, participant.player, participant.phase_after from game_instance as game ".
               "join player_game_action as participant on game.id = participant.game ".
               "where participant.phase_after >0 and participant.phase_after <100 and game.id = ".$gameid." and participant.player = ".$playerid." and game.gametype = '".$gametype."' LIMIT 1";
        // if game exists, is in setup phase (0-99) and this player is not already a participant
        if ($result = mysqli_query($conn, $sql)) {
            if(mysqli_num_rows($result) > 0) {
                $player_seq = mysqli_fetch_assoc($result)["phase_after"];
                $granted = true;
            } else {
                $granted = false;
                $return = [ 'action' => 'not your game', 'not_present' => -1 ];
            }

            mysqli_free_result($result);
        } else {
             $return = [ 'action' => 'FAILED to read 2 ##'.$sql.'##', 'id' => -1 ];
        }
        if($granted && $player_seq == 1) {
            $sql = "select game.id, game.gametype, participant.player, participant.phase_after from game_instance as game ".
                   "join player_game_action as participant on game.id = participant.game ".
                   //"where (participant.phase_after >".$action."+10 or (participant.phase_after >".$action." and participant.phase_after <".$action."+10 and participant.player = ".$playerid.")) ".
                   "where (participant.phase_after >".$player_seq."+10 or (participant.phase_after >".$player_seq." and participant.phase_after <".$player_seq."+10 and participant.player = ".$playerid.")) ".
                   " and game.id = ".$gameid." and game.gametype = '".$gametype."' LIMIT 1";
            // if game exists, is in setup phase (0-99) and this player is not already a participant
            if ($result = mysqli_query($conn, $sql)) {
                if(mysqli_num_rows($result) > 0) {
                    $reason_phase = mysqli_fetch_assoc($result)["phase_after"];
                    $granted = false;
                    $return = [ 'action' => 'forbidden', 'reason_phase' => $reason_phase ];
                } else {
                    $granted = true;
                }

                mysqli_free_result($result);
            } else {
                 $return = [ 'action' => 'FAILED to read 22 ##'.$sql.'##', 'id' => -1 ];
            }


            if($granted) {
                $sql2 = "select participant.phase_after from player_game_action as participant ".
                       "where participant.game = ".$gameid." order by participant.phase_after desc LIMIT 1";
                if ($result = mysqli_query($conn, $sql2)) {
                    if(mysqli_num_rows($result) == 1) {
                        $phase_before = mysqli_fetch_assoc($result)["phase_after"];
                        // check gamemaster action needed
                        if($phase_before % 10 == 4 && $gametype == "lajam") {
                            $current_round   = $phase_before-($phase_before%10);
                            $current_event_type = $phase_before-($phase_before%100);
                            $current_country = $phase_before-($phase_before%1000)+100;

                            $current_round_cpt   = ($current_round % 100) /10; // current tenth
                            $current_event_type_cpt = ($current_event_type % 1000) /100;

                            $current_country_cpt = floor($current_country/1000);

                            $is_new_country = false;
                            $is_new_event_type = false;
                            $is_new_round = false;
                            if($current_round_cpt+1 >= $ROUND_AMOUNT) {
                                $new_current_round_cpt = 0;
                                // new event type
                                if($current_event_type_cpt+1 >= $EVENT_TYPE_AMOUNT) {
                                    $new_current_event_type_cpt = 0;
                                    $new_current_country_cpt = $current_country_cpt;
                                    // new country
                                    if( $current_country_cpt+1 >= $COUNTRY_AMOUNT) {
                                        // end of game
                                        $phase_after = 1000000;
                                        $transition = 'game_over';
                                    } else {
                                        // just new country
                                        $is_new_country = true;
                                        $is_new_event_type = true;
                                        $is_new_round = true;
                                        $transition = 'new_country';
                                        $phase_after = $current_country +1000;
                                    }
                                } else {
                                    // just new event type in the same country
                                    $new_current_event_type_cpt = $current_event_type_cpt+1;
                                    $phase_after = $current_round+100;
                                    $is_new_event_type = true;
                                    $is_new_round = true;
                                    $transition = 'new_event_type';
                                }

                            } else {
                                // just new round in the same event type
                                if($current_round == 0) { // special case of the first round of the whole game
                                    $phase_after = $phase_after+100;
                                    $is_new_country = true;
                                    $is_new_event_type = true;
                                    $new_current_round_cpt = $current_round_cpt;
                                } else {
                                    $phase_after = $current_round+10;
                                    $new_current_round_cpt = $current_round_cpt+1;
                                }
                                $is_new_round = true;
                                $transition = 'new_round';
                            }

                            $return = [ 'action' => 'i shall help', 'phase' => $phase_after , 'transition' => $transition];


                        } else if($gametype == "pending") {
							$is_new_round = true;
							$transition = 'new_round';
                            $current_round   = $phase_before-($phase_before%10);
							$phase_after = $current_round +10;
                            $return = [ 'action' => 'i shall help', 'phase' => $phase_after , 'transition' => $transition];
                        } else {
                            $granted = false;
                            $return = [ 'action' => 'nothing to be done', 'id' => -1 ];
                        }
                    } else {
                        $granted = false;
                         $return = [ 'action' => 'FAILED no game'//.$sql2
                                    , 'id' => -1 ];
                    }

                    mysqli_free_result($result);
                } else {
                     $return = [ 'action' => 'FAILED to read 3 ##'.$sql2.'##', 'id' => -1 ];
                }

                if($granted && $transition != 'game_over') {
					if($gametype == "lajam") {
						// read all game actions
						$sql = "select action.id, action.player, action.recordtime, action.description, action.phase_before, action.phase_after, action.action_parameters, player.nickname, player.avatar ".
							   "from player_game_action as action join player on player.id = action.player  ".
							   "where action.game = ".$gameid." order by action.phase_after asc";
						if ($result = mysqli_query($conn, $sql)) {
							if(mysqli_num_rows($result) >0) {
								$return = [ 'action' => 'found', 'count' => mysqli_num_rows($result) ];
								$rescpt = 0;
								while($row = mysqli_fetch_assoc($result)) {
									$gameRecap['data'][$row['phase_after']] = [
										'player' => $row['player'],
										'description' => $row['description'],
										'phase_after' => $row['phase_after'],
										'action_parameters' => json_decode($row['action_parameters']),
										'nickname' => $row['nickname']
										//,'encoded_avatar' => base64_encode('{"data": "Jeff_or_NOT", "is_empty": false}')
									];

								}
								//$return[ 'action2'] = 'happy';
							} /*else {
								$return = [ 'action' => 'FAILED to create', 'id' => -1 ];
							}*/

							mysqli_free_result($result);
						} else {
							 $return = [ 'action' => 'FAILED to read 2  ##'.$sql, 'id' => -1 ];
						}

						// compute $actionParameter for next phase
						if($is_new_round){
							if($current_round == 0) { // special case of the first round of the whole game
								//hands
								$actionParameter['player_hands'] = [
									 [0,1,2] // 1st player hand
									,[4,5,6] // 2nd player hand
									,[8,9,10] // 3rd player hand
									,[3,7,11] // 4th player hand
									];
								// special items
								$actionParameter['special_items'] = [0,4,8,3];

							}

							// normal new round stuff
							$actionParameter['is_new_round'] = true;
							if($new_current_round_cpt == 0) {
								$actionParameter['new_round'] = 'brag';
							} else if ($new_current_round_cpt == 1) {
								$actionParameter['new_round'] = 'lost and found';
							} else if ($new_current_round_cpt == 2) {
								$actionParameter['new_round'] = 'declare trades';
							} else if ($new_current_round_cpt == 3) {
								$actionParameter['new_round'] = 'accept trades';
							}
						}

						if($is_new_event_type){

							$actionParameter['is_new_event_type'] = true;
							if($new_current_event_type_cpt == 0) {
								$actionParameter['new_event_type'] = 'boose';
							} else if ($new_current_event_type_cpt == 1) {
								$actionParameter['new_event_type'] = 'personal items';
							} else if ($new_current_event_type_cpt == 2) {
								$actionParameter['new_event_type'] = 'souvenirs and duty free';
							} else if ($new_current_event_type_cpt == 3) {
								$actionParameter['new_event_type'] = 'unplanned';
							}
						}

						if($is_new_country){

							$actionParameter['is_new_country'] = true;
							if($new_current_country_cpt == 0) {
								$actionParameter['new_country'] = 'finland';
							} else if ($new_current_country_cpt == 1) {
								$actionParameter['new_country'] = 'russia';
							} else if ($new_current_country_cpt == 2) {
								$actionParameter['new_country'] = 'france';
							} else if ($new_current_country_cpt == 3) {
								$actionParameter['new_country'] = 'equator';
							}

						}


						// 4 players have played this turn, open the next one
						$return = [ 'action' => 'accepted OK', 'phase' => $phase_after, 'transition' => $transition ];
						$sql = "INSERT INTO player_game_action (recordtime,player,game,description,phase_before,phase_after,action_parameters) VALUES (CURRENT_TIMESTAMP(),0,".$gameid.",'new round',".$phase_before.",".$phase_after.",'".json_encode($actionParameter,JSON_UNESCAPED_SLASHES)."') ";
						if(mysqli_query($conn,$sql)) {

						} else {
							$return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
						}
					} else if ($gametype == "pending"){
						// pending game
						// open the next one
						// generate 8 random numbers
						$actionParameter['rand1'] = rand ( 0 , 1000 );
						$actionParameter['rand2'] = rand ( 0 , 1000 );
						$actionParameter['rand3'] = rand ( 0 , 1000 );
						$actionParameter['rand4'] = rand ( 0 , 1000 );
						$actionParameter['rand5'] = rand ( 0 , 1000 );
						$actionParameter['rand6'] = rand ( 0 , 1000 );
						$actionParameter['rand7'] = rand ( 0 , 1000 );
						$actionParameter['rand8'] = rand ( 0 , 1000 );
						
						$return = [ 'action' => 'accepted OK', 'phase' => $phase_after, 'transition' => $transition ];
						$sql = "INSERT INTO player_game_action (recordtime,player,game,description,phase_before,phase_after,action_parameters) VALUES (CURRENT_TIMESTAMP(),0,".$gameid.",'new round',".$phase_before.",".$phase_after.",'".json_encode($actionParameter,JSON_UNESCAPED_SLASHES)."') ";
						if(mysqli_query($conn,$sql)) {

						} else {
							$return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
						}
					}
                } else {
                    if($granted) {
                        // $transition = 'game_over'
                        $return = [ 'action' => 'game over', 'id' => -1 ];
                    }
                }
            }
        } else {
            $return = [ 'action' => 'wait...', 'id' => -1, 'player_seq' => $player_seq, 'granted' => $granted ];
        }

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
