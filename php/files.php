<?php


if(isset($_FILES['image']))
{
    
     $file_name = $_FILES['image']['name'];
     $file_size = $_FILES['image']['size'];
     $file_tmp = $_FILES['image']['tmp_name'];
     $file_type = $_FILES['image']['type'];
     
     if (file_exists("upload-image/". $file_name)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
      }elseif(move_uploaded_file($file_tmp,"upload-image/". $file_name)){
        echo "File success";
     }else {
        echo "File not update ";
     }

    


}
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
    <form action="" method="Post" enctype="multipart/form-data">

        <input type="file" name="image">

       <input type="submit"/>


    </form>
</body>
</html>