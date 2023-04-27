
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js "></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>


    <script>
        $(function () {
            $('[data-toggle="popover"]').popover({
                html: true,
                //delay : {"show":1000, "hide":1000}
            });

        });

    </script>

    <script>
        $(function () {
            $("#closebtn").click(function () {
                $("#redbox").alert('close');
            })
        });
    </script>

    <title>Popover/Alert Exmaple </title>
</head>

<body>
    <h3 style="text-align: center;" class="text-white">Popover Example</h3>
        <div class="container">
            <div class="offcanvas offcanvas-bottom" id="demo">
                <div class="row">
                <div class="col">
                    <div class="offcanvas-header">
                        <h6 class="offcanvas-title">Code</h6>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div class="offcanvas-body user-select-none">
                    <textarea readonly class="justify-content-end border border-0 " id="w3review" name="w3review" rows="10" cols="70 ">


                                    <div class="alert alert-primary" role="alert">
                        <strong>Well done!</strong> You successfully read this
                        important alert message.
                    </div>


                    </textarea>

                </div>
            </div>
            <div class="col">
                <div class="offcanvas-header">
                    <h6 class="offcanvas-title">Output</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body">
                    <p><div class="alert alert-primary" role="alert">
                            <strong>Well done!</strong> You successfully read this
                            important alert message.
                        </div></p>
                   
                </div>
            </div>
        </div>
        </div>

        <div class="container-fluid mt-3">
            <h3>Bottom Offcanvas</h3>
            <p>Get Code & Output.</p>
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                Run
            </button>
        </div>
        <div class="container1 text-center mb-2" style="margin-top: 10px;">
            <a href="mediaobject.html" class="  btn btn-primary">PREVIOUS</a>
            <a href="tap.html" class="  btn btn-primary">NEXT</a>
        </div>
</body>

</html>