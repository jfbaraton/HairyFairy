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
	  $sql = "SELECT id FROM player LIMIT 10";
          if ($result = mysqli_query($conn, $sql)) {
              if(mysqli_num_rows($result) >0) {
                  echo "
				  <br>
				  <br>several results
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