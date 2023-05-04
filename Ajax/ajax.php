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
    <link rel="stylesheet" href="css/style.css">





    <title>Add Update for Ajax</title>
</head>

<body>
    




    <div class="container">
        <div class="row">
            <div class="col mt-3 bg-warning ">
                <h3 style="text-align: center;">Add Records with PHP & Ajax</h3>
            </div>
        </div>

        <div class="row">
            <div class="col bg-primary d-flex justify-content-end p-2">
                 <form id="formadd">
                    First Name :<input type="text" class="mx-2" id="fname" placeholder="Enter First Name" > 

            </div> 
            <div class="col bg-primary d-flex justify-content-start p-2">       
                    Last Name :  <input type="text"class="mx-2" id="lname" placeholder="Enter Last Name" >
            </div>
            <div class="col bg-primary d-flex justify-content-start p-2"> 
                    <button class="btn btn-success mx-2" id="insert">Insert</button>
                 
            </div>
            <div class="col bg-primary d-flex justify-content-start p-2"> 
                
                <label>Search</label>
                <input type="text" class="mx-2" id="search" autocomplet="off"  >
                 </form> 
            </div>
            
        </div>

        <div class="row">
                 <table id="table-data" class="table table-hover">

                </table>
                 
                <div id="error-message"></div>
                <div id="success-message"></div>


            <div id="modal">
                <div id="modal-form">

                    <h3> Edit Form</h3>
                    
                    <table cellpadding="10px" width="100%">
                          
                    </table>
                        <div id="close-btn">X</div>


                </div>
           </div>

            
        </div>
    </div>
    
<style>

.delete-btn {
    background :red;
    color: #fff;
    border: 0;
    padding: 4px 10px;
    border-radius: 3px;
    cursor: pointer;
}
.edit-btn {
    background :green;
    color: #fff;
    border: 0;
    padding: 4px 10px;
    border-radius: 3px;
    cursor: pointer;
}

</style>




</body>
<script>

    $(document).ready(function(){
        function loadTable(){
            $.ajax({
            url : "load.php",
            typr : "POST", 
            success : function(data){
                $("#table-data").html(data);
            }
           });
        }
        loadTable();

        $("#insert").on("click", function (e) {
            e.preventDefault();
            var fname = $("#fname").val();
            var lname = $("#lname").val();

            if(fname == "" || lname == "")
            {
                $("#error-message").html("All Filed are required").slideDown();
                $("#success-message").slideDown();
            }else {
                 
                $.ajax({
                url: "insert.php",
                type: "POST",
                data: { fname: fname, lname: lname },
                success: function (data) {
                    
                    loadTable();
                        $("#formadd").trigger("reset")
                       

                }


            });
            $("#error-message").hide();
            }

            
        });

        //Delete

        $(document).on("click",".delete-btn", function(){

            if(confirm("Do You want to delete ?"))
            {

                var studentId= $(this).data("id");
                var element = this;
                
                $.ajax({
                    url: "delete.php",
                    type: "POST",
                    data: {id: studentId},
                    success: function (data)
                     {
                        
                        if(data == 1)
                        {
                            $(element).closest("tr").fadeOut();
                        }else {
                            $("#error-message").html("Can't delete record").slideDown();
                            $("#success-message").slideDown();
                        }
                    }

                });
             }
        });

        //Show Modal Box
        $(document).on("click",".edit-btn", function(){
            $("#modal").show();
            var studentId = $(this).data("eid")
           
            $.ajax({
                url: "edit.php",
                type: "POST",
                data: {id: studentId},
                success: function (data)
                {
                    $("#modal-form table").html(data);   
                }
            });

        });

        //hide modal box    
        $("#close-btn").on("click", function(){
            $("#modal").hide();
        });

        //save update from

        $(document).on("click", "#edit-submit", function(){

            var stuID = $("#edit-id").val();
            var fname = $("#edit-fname").val();
            var lname = $("#edit-lname").val();
            
            $.ajax({
                    url:"edit2.php",
                    type: "POST",
                     data: {id: stuID, first_name: fname, last_name: lname},
                     success: function (data)
                     {
                        if(data == 1)
                        {
                            $("#modal").hide(); 
                            loadTable();

                        }
                    }
            })

        });
        //Search

        $("#search").on("keyup",function(){
            var search_term = $(this).val ();

            $.ajax({
                   
                url:"search.php",
                type: "POST",
                data: {search:search_term},
                success: function (data)
                {
                  $("#table-data").html(data)
                }




            });
        });


    });


    /*
   $(document).ready(function(){
        $("#load-btn").on("click", function(e){
           $.ajax({
            url : "load.php",
            typr : "POST", 
            success : function(data){
                $("#table-data").html(data);
            }
           }) ;
        })

    });
*/


  
</script>
</html>