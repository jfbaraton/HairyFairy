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
                   "where (participant.phase_after >".$action."+10 or (participant.phase_after >".$action." and participant.phase_after <".$action."+10 and participant.player = ".$playerid.")) ".
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
                        if($phase_before % 10 == 4) {
                            $phase_after = $phase_before;
                            $return = [ 'action' => 'i shall help', 'phase' => $phase_after ];
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

                if($granted) {

                    // 4 players have played this turn, open the next one
                    $phase_after_player = $phase_after;
                    $phase_after = $phase_before-($phase_before%100)+100;
                    $return = [ 'action' => 'accepted OK', 'phase' => $phase_after ];
                    $sql = "INSERT INTO player_game_action (recordtime,player,game,description,phase_before,phase_after,action_parameters) VALUES (CURRENT_TIMESTAMP(),0,".$gameid.",'new round',".$phase_after_player.",".$phase_after.",JSON_OBJECT('is_empty',true)) ";
                    if(mysqli_query($conn,$sql)) {

                    } else {
                        $return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
                    }
                }
            }
        } else {
            $return = [ 'action' => 'wait...', 'id' => -1 ];
        }

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
