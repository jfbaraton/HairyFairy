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
      echo "
      <br>
      <br>Connected successfully
      <br>";
      ?>

      $sql = "SELECT id FROM player LIMIT 10";
          if ($result = mysqli_query($link, $sql)) {
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
      <br>
          </body>
</html>