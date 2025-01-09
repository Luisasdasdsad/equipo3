document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío normal del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crea una nueva página que muestre los datos ingresados
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mensaje Enviado</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    text-align: center;
                    background-color: #f4f4f4;
                }
                .message-container {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                    color: #4CAF50;
                }
                p {
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <div class="message-container">
                <h1>Mensaje Enviado</h1>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Correo:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${message}</p>
            </div>
        </body>
        </html>
    `);
});
