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
$return = [ 'error' => 'nothing happened', 'id' => -1];
    // will encode to JSON object: {"error":"nothing happened","id":-1}
    // accessed as example in JavaScript like: result.name or result['error'] (returns "nothing happened")
if(!empty($playerid) && !empty($playername)) {
    /* Select queries return a resultset */
    $sql = "SELECT id FROM player WHERE nickname = '".$playername."' and id = ".$playerid." LIMIT 10";
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

        if ($result = mysqli_query($conn, "select game.id, game.gametype, participant.player, participant.phase_after, player.nickname, player.avatar from game_instance as game join player_game_action as participant on game.id = participant.game join player on player.id = participant.player  where (participant.phase_after >0 and participant.phase_after <100) and (game.id in (select game from player_game_action where player = ".$playerid.") or game.id not in (select game from player_game_action where phase_after > 100)) and game.id not in (select game from player_game_action where phase_after >= 2000000) order by game.id limit 20000")) {
            if(mysqli_num_rows($result) >0) {
                $return = [ 'action' => 'found', 'count' => mysqli_num_rows($result) ];
                $rescpt = 0;
                while($row = mysqli_fetch_assoc($result)) {
                    $return['data'][''.$rescpt++] = [ 'id' => $row['id'], 'gametype' => $row['gametype'],'player' => $row['player'],'phase_after' => $row['phase_after'],'nickname' => $row['nickname'],'avatar' => $row['avatar']];
                }
                //$return[ 'action2'] = 'happy';
            } /*else {
                $return = [ 'action' => 'FAILED to create', 'id' => -1 ];
            }*/

            mysqli_free_result($result);
        } else {
             $return = [ 'action' => 'FAILED to read 2', 'id' => -1 ];
        }

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
