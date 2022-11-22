<?php
$errorMSG = "";

if (empty($_POST["name"])) {
  $errorMSG = "Name is required ";
} else {
  $name = $_POST["name"];
}

if (empty($_POST["email"])) {
  $errorMSG = "Email is required ";
} else {
  $email = $_POST["email"];
}

if (empty($_POST["subject"])) {
  $errorMSG = "Subject is required ";
} else {
  $ssubject = $_POST["subject"];
}

if (empty($_POST["message"])) {
  $errorMSG = "Message is required ";
} else {
  $message = $_POST["message"];
}

if (empty($_POST["secret"])) {
  $errorMSG = "Error!";
} else {
  $ssecret = $_POST["secret"];
}

$httphost = $_SERVER['HTTP_HOST'];
$EmailTo = "youremail@i.com";
$Subject = $ssubject . " - " . "<" . $httphost . ">";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name . "\n";
$Body .= "Subject: ";
$Body .= $ssubject . "\n\n";
// $Body .= "Email: ";
// $Body .= $email . "\n";
// $Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:" . $email);



// redirect to success page
if ($success && $errorMSG == "") {
  echo "success";
} else {
  if ($errorMSG == "") {
    echo "Something went wrong :(";
  } else {
    echo $errorMSG;
  }
}
