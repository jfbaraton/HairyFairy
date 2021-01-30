<!DOCTYPE html>
<html>
    <head>
        <title>Example</title>
    </head>
    <body>
        <p>This is an example of a simple HTML page with one paragraph.</p>
      <br>
      <?php echo date('Y-m-d H:i:s'); ?>
      <br>
      <?php echo 'hello'; ?>
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
      $gameid = 5;
      echo "
      <br>Connected successfully
      <br>
      <br>create game
      <br>http://localhost/HairyFairy/newGame.php?playername=jeff&playerid=2&gametype=lajam
      <br>
      <br>
      <br>join game
      <br>http://localhost/HairyFairy/joinGame.php?playername=ira&playerid=1&gametype=lajam&gameid=".$gameid.
      "<br>http://localhost/HairyFairy/joinGame.php?playername=jouko&playerid=3&gametype=lajam&gameid=".$gameid.
      "<br>http://localhost/HairyFairy/joinGame.php?playername=anu&playerid=4&gametype=lajam&gameid=".$gameid.
      "<br>
      <br>
      <br>go to next step
      <br> http://localhost/HairyFairy/callGameMaster.php?playername=jeff&playerid=2&gametype=lajam&gameid=".$gameid.
      "<br>
      <br>game action
      <br>http://localhost/HairyFairy/doGameAction.php?playername=jeff&playerid=2&gametype=lajam&action=100&description=oneAction&actionParameter=eyJkYXRhIjogIkplZmZfb3JfTk9UIiwgImlzX2VtcHR5IjogZmFsc2V9&gameid=".$gameid.
      "<br>http://localhost/HairyFairy/doGameAction.php?playername=ira&playerid=1&gametype=lajam&action=100&description=oneAction&actionParameter=eyJkYXRhIjogIkplZmZfb3JfTk9UIiwgImlzX2VtcHR5IjogZmFsc2V9&gameid=".$gameid.
      "<br>http://localhost/HairyFairy/doGameAction.php?playername=jouko&playerid=3&gametype=lajam&action=100&description=oneAction&actionParameter=eyJkYXRhIjogIkplZmZfb3JfTk9UIiwgImlzX2VtcHR5IjogZmFsc2V9&gameid=".$gameid.
      "<br>http://localhost/HairyFairy/doGameAction.php?playername=anu&playerid=4&gametype=lajam&action=100&description=oneAction&actionParameter=eyJkYXRhIjogIkplZmZfb3JfTk9UIiwgImlzX2VtcHR5IjogZmFsc2V9&gameid=".$gameid.
      "<br>
      <br>go to next phase
      <br>http://localhost/HairyFairy/callGameMaster.php?playername=jeff&playerid=2&gametype=lajam&gameid=".$gameid.
      "<br>
      <br> game recap
      <br> http://localhost/HairyFairy/gameRecap.php?playername=random&playerid=5&gameid=".$gameid.
      "<br>";
	  $sql = "SELECT action_parameters FROM player_game_action LIMIT 10";
          if ($result = mysqli_query($conn, $sql)) {
              if(mysqli_num_rows($result) >0) {
                  echo "
				  <br>
				  <br>several resultss
				  <br>";
              } else {
                  echo "
				  <br>
				  <br>NO results
				  <br>";
              }

              mysqli_free_result($result);
          } else {
                  echo "
				  <br>
				  <br> CONNNECT FAIL
				  <br>";
          }
	  
      ?>

      
      <br>
          </body>
</html>