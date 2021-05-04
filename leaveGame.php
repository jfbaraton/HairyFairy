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
                $granted = true;
            } else {
                //$player_seq = mysqli_fetch_assoc($result)["phase_after"];
                $return = [ 'action' => 'not your game', 'not_present' => -1 ];
                $granted = false;
            }

            mysqli_free_result($result);
        } else {
             $return = [ 'action' => 'FAILED to read 2 ##'.$sql.'##', 'id' => -1 ];
        }
			
		if($granted) {
			$sql = "DELETE FROM player_game_action WHERE player = ".$playerid." AND game = ".$gameid." ";
			if(mysqli_query($conn,$sql)) {

			} else {
				$return = [ 'action' => 'FAILED to leave 1##'.$sql.'##', 'id' => -1 ];
			}
			$sql = "UPDATE player_game_action SET phase_after = phase_after -1, phase_before = phase_before -1 WHERE game = ".$gameid." AND phase_before < 10 and phase_after > (.
					.select min(phase_after) from player_game_action where game=1 and phase_after not in (select phase_after from player_game_action WHERE game = ".$gameid."))";
			if(mysqli_query($conn,$sql)) {

			} else {
				$return = [ 'action' => 'FAILED to leave 2##'.$sql.'##', 'id' => -1 ];
			}
		}

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
