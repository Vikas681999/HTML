
<?php
// next step is to verifiy the token in php
// user can verify the token through its signature.
$recievedJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoid2ViZGV2ZWxvcGVyIiwiYnJhbmNoIjoiY29tcHV0ZXIiLCJuYW1lIjoidmVkYW50In0=.MeL/mkhcBmQ8CYdWutzDMmXHf/oE64w5A7ZB1GF9wO0=';

$secret_key = 'hello';

// Split a string by '.' 
$jwt_values = explode('.', $recievedJwt);

$recieved_signature = $jwt_values[2];

$recievedHeaderAndPayload = $jwt_values[0] . '.' . $jwt_values[1];

$resultedsignature = base64_encode(hash_hmac('sha256', $recievedHeaderAndPayload, $secret_key, true));

if($resultedsignature == $recieved_signature) 
{
echo "Success";
}
else
{
echo "not matched";
}
?>