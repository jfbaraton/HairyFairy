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
$gameid = $_GET["gameid"];
$return = [ 'error' => 'nothing happened', 'id' => -1];
    // will encode to JSON object: {"error":"nothing happened","id":-1}
    // accessed as example in JavaScript like: result.name or result['error'] (returns "nothing happened")
if(!empty($playerid) && !empty($playername) && !empty($gameid)) {
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
        $sql = "select action.id, action.player, action.recordtime, action.description, action.phase_before, action.phase_after, action.action_parameters, player.nickname, player.avatar ".
                       "from player_game_action as action join player on player.id = action.player  ".
                       "where action.game = ".$gameid." order by action.id asc";
        if ($result = mysqli_query($conn, $sql)) {
            if(mysqli_num_rows($result) >0) {
                $return = [ 'action' => 'found', 'count' => mysqli_num_rows($result) ];
                $rescpt = 0;
                while($row = mysqli_fetch_assoc($result)) {
                    $return['data'][''.$rescpt++] = [
                        'id' => $row['id'],
                        'player' => $row['player'],
                        'recordtime' => $row['recordtime'],
                        'description' => $row['description'],
                        'phase_before' => $row['phase_before'],
                        'phase_after' => $row['phase_after'],
                        'action_parameters' => $row['action_parameters'],
                        'nickname' => $row['nickname'],
                        'avatar' => $row['avatar'],
                        'encoded_avatar' => base64_encode('{"data": "Jeff_or_NOT", "is_empty": false}')
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

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
