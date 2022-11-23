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
$Body .= "Имя: ";
$Body .= $name . "\n";
$Body .= "Тема: ";
$Body .= $ssubject . "\n\n";
// $Body .= "Email: ";
// $Body .= $email . "\n";
// $Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

$headers   = [
  'From' => $email,
  'Content-type' => 'text/plain; charset=UTF-8',
];

// send email
$success = mail($EmailTo, $Subject, $Body, $headers);



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
