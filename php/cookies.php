<?php
 error_reporting(0);
    include ('session.php');
   
   
    setcookie("fname", "Vikas", time() + 3600, "/");
   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
     echo $_session[name];
    
    echo $_COOKIE[fname];
       
    ?>
</body>
</html>