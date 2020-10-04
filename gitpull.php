<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>


<?php
$output = shell_exec('cd /var/www/html/HairyFairy && git pull --rebase');
echo "<pre>$output</pre>";
?>

</body>
</html>
