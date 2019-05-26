<?php

  if (isset($_POST['submit'])) {
    // code...
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "issam-armas@gmail.com";
    $headers = "From: ".$mailFrom
    $txt = "You have received an e-mail from ".$name."\n\n".$message;

    mail($mailTo, $message, $txt, $headers);
    header("Location: index.php?mailsend");
  }

 ?>
