<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$messageage = $_POST['messageage'];
$radio1 = $_POST['radio1'];
$radio2 = $_POST['radio2'];
$radio3 = $_POST['radio3'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kolledzh-2017@mail.ru';                 // Наш логин
$mail->Password = 'gruppabz12';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

$mail->setFrom('kolledzh-2017@mail.ru', 'Аграрно-экономический колледж');   // От кого письмо/ 
//Робот заходит под паролем на kolledzh-2017@mail.ru и пересылает на kzruta@gmail.com
$mail->addAddress('kzruta@gmail.com');     // Add a recipient/ C
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML


$mail->Subject = '🔔 Заявка с сайта';
$mail->Body    = '
Пользователь оставил данные: <br><br>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Имя:</b> ' . $name . ' </td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">	 <b>E-mail:</b> ' . $email . ' </td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Взрослый/ребенок:</b> ' . $radio1 . ' </td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Возраст:</b> ' . $messageage . ' </td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Стиль:</b> ' . $radio2 . ' </td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Уровень знаний:</b> ' . $radio3 . '</td><tr>
<tr><td style="background-color: #f8f8f8; padding: 15px;">  <b>Комментарий:</b> ' . $message . '</td></tr>';

  if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>

