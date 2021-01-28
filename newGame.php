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
$return = [ 'error' => 'nothing happened', 'id' => -1];
    // will encode to JSON object: {"error":"nothing happened","id":-1}
    // accessed as example in JavaScript like: result.name or result['error'] (returns "nothing happened")
if(!empty($playerid) && !empty($playername) && !empty($gametype)) {
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
        $sql = "INSERT INTO game_instance (recordtime,creator,gametype,phase) VALUES (CURRENT_TIMESTAMP(),".$playerid.",'".$gametype."',0) ";
        if(mysqli_query($conn,$sql)) {
            $return = [ 'action' => 'INSERT', 'id' => -1 ];

        } else {
            $return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
        }

        if ($result = mysqli_query($conn, "SELECT max(id) as id FROM game_instance WHERE creator = ".$playerid." and gametype = '".$gametype."' and phase = 0 LIMIT 1")) {
            if(mysqli_num_rows($result) >0) {
                $gameid = mysqli_fetch_assoc($result)["id"];
                $return = [ 'action' => 'created', 'id' => $gameid ];
            } /*else {
                $return = [ 'action' => 'FAILED to create', 'id' => -1 ];
            }*/

            mysqli_free_result($result);
        } else {
             $return = [ 'action' => 'FAILED to read 2', 'id' => -1 ];
        }

        $sql = "INSERT INTO player_game_action (recordtime,player,game,description,phase_before,phase_after,action_parameters) VALUES (CURRENT_TIMESTAMP(),".$playerid.",".$gameid.",'join',0,1,JSON_OBJECT('is_empty',true)) ";
        if(mysqli_query($conn,$sql)) {

        } else {
            $return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
        }
        $sql = "UPDATE game_instance SET phase = 1 WHERE creator = ".$playerid." and gametype = '".$gametype."' and phase = 0 ";
        if(mysqli_query($conn,$sql)) {

        } else {
            $return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
        }

    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playerid.', '.$gametype, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>
