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
//$playername = $_GET["playername"]);
$playeravatar = $_GET["playeravatar"];
$playerid = -1;
$return = [ 'error' => 'nothing happened', 'id' => -1];
    // will encode to JSON object: {"error":"nothing happened","id":-1}
    // accessed as example in JavaScript like: result.name or result['error'] (returns "nothing happened")
if(!empty($playeravatar) && !empty($playername)) {
    /* Select queries return a resultset */
    $sql = "SELECT id FROM player WHERE nickname = '".$playername."' and avatar = '".$playeravatar."' LIMIT 10";
    if ($result = mysqli_query($conn, $sql)) {
        if(mysqli_num_rows($result) >0) {
            $playerid = mysqli_fetch_assoc($result)["id"];
            $return = [ 'action' => 'found', 'id' => $playerid ];
        } else {
            $return = [ 'action' => 'NOT found', 'id' => -1 ];
        }

        mysqli_free_result($result);
    } else {
         $return = [ 'action' => 'FAILED to read 1 ##'.$sql.'##', 'id' => -1 ];
    }

    if ($playerid == -1) {
        $sql = "INSERT INTO player (recordtime,nickname,avatar) VALUES (CURRENT_TIMESTAMP(),'".$playername."','".$playeravatar."') ";
        if(mysqli_query($conn,$sql)) {
            $return = [ 'action' => 'INSERT', 'id' => -1 ];

        } else {
            $return = [ 'action' => 'FAILED to write 1##'.$sql.'##', 'id' => -1 ];
        }

        if ($result = mysqli_query($conn, "SELECT id FROM player WHERE nickname = '".$playername."' and avatar = '".$playeravatar."' LIMIT 1")) {
            if(mysqli_num_rows($result) >0) {
                $playerid = mysqli_fetch_assoc($result)["id"];
                $return = [ 'action' => 'created', 'id' => $playerid ];
            } else {
                $return = [ 'action' => 'FAILED to create', 'id' => -1 ];
            }

            mysqli_free_result($result);
        } else {
             $return = [ 'action' => 'FAILED to read 2', 'id' => -1 ];
        }
    }


} else {
    $return = [ 'error' => 'wrong arguments '.$playername.', '.$playeravatar, 'id' => -1];
}


header('Content-type: application/json');
echo json_encode( $return );
?>