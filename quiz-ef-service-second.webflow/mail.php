<?php
$to = "nod0978556073@gmail.com";
$subject = "Отправка формы с groceryukr.com/";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $fields = "";
  foreach ($_POST as $key => $value) {
    $key = htmlspecialchars(strip_tags($key));
    $value = htmlspecialchars(strip_tags($value));
    $fields .= "$key: $value\r\n";
  }

  $message = "$subject\r\n\r\n$fields";
  $headers = "Content-type: text/plain; charset=utf-8\r\n";

  if (mail($to, $subject, $message, $headers)) {
    echo "success"; // успішна відповідь
  } else {
    http_response_code(500);
    echo "error"; // помилка
  }
} else {
  http_response_code(405); // неправильний метод
  echo "Method Not Allowed";
}
?>
