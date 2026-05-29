<?php 

$host = "localhost";
$user = "root";
$password = "";
$database = "sys_fs_task01";

$conn = mysqli_connect($host, $user, $password, $database);

if(!$conn) {
    die ("Connection Failed : " . mysqli_connect_error());
}

echo ("Database Connected !");

$fname = $_POST['fnamesignup'];
$lname = $_POST['lnamesignup'];
$email = $_POST['emailsignup'];
$password = $_POST['crepasssignup'];
$conpassword = $_POST['conpasssignup'];
$date = $_POST['datesignup'];
$month = $_POST['monthsignup'];
$year = $_POST['yearsignup'];

$monthNumber = date( "m" , strtotime($month));

$dob = "$year-$monthNumber-$date";

$sql = "INSERT INTO users(FIRST_NAME, LAST_NAME, EMAIL_ADDRESS, CREATE_PASSWORD, CONFIRM_PASSWORD, DATE_OF_BIRTH) VALUES('$fname', '$lname', '$email', '$password', '$conpassword', '$dob')";

if(mysqli_query($conn, $sql)) {
    echo "User Data is Updated!";
} else {
    echo "Error : " . mysqli_error($conn);
}

mysqli_close($conn);

?>