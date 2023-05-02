<?php include "connect.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.js"></script>

    <title>Add Update for Ajax</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col mt-3 bg-warning ">
                <h3 style="text-align: center;">Add Records with PHP & Ajax</h3>
            </div>
        </div>

        <div class="row gy-2">
            <div class="col bg-primary d-flex justify-content-center p-2">

                First Name :<input type="text" class="mx-2" id="fname" placeholder="Enter First Name" > 
                Last Name :  <input type="text"class="mx-2" id="lname" placeholder="Enter Last Name" >
                <button class="btn btn-success" id="insert">Insert</button>
            </div>
        </div>

        <div class="row">
            <div class="col">

                
                <table class="table table-hover">


                    <thead>
                      <tr>
                     
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                       <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody>
         <?php
           
                
                $eve = "select * from student";
                $re = mysqli_query ($conn, $eve);

                while($rt = mysqli_fetch_assoc($re)) 
                {
                              
                
        ?>

                    
                      <tr>
                            <?php 
                                $sid = $rt ['sid'];
                                $s_first_name = $rt['s_first_name'];
                                $s_last_name = $rt['s_last_name'];
                            ?>

                        
                        <th scope="row"><?php echo $sid ?></th>
                        <td><?php echo $s_first_name ?></td>
                        <td><?php echo $s_last_name ?></td>
                        <td><a href="editajax.php?id=<?php echo $sid ?>">Edit</td>
                      </tr>
                      
                      <?php
                      };
                      ?>
                    </tbody>
                  </table>
                  <h5 id="anw"></h5>
            </div>
        </div>
    </div>



    </div>




</body>
<script>
    $(document).ready(function () {

        $("#insert").on("click", function (e) {
            e.preventDefault();
            var fname = $("#fname").val();
            var lname = $("#lname").val();

            $.ajax({
                url: "ajax2.php",
                type: "POST",
                data: { fname: fname, lname: lname },
                success: function (data) {
                    $("#anw").html(data);

                }

            });
        })
    });
</script>
</html>