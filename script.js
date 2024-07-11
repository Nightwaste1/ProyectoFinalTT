document.getElementById('pickup-request-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío por defecto
    
    // Obtener valores del formulario
    const pickupDate = document.getElementById('pickup-date').value;
    const shipmentReadyAt = document.getElementById('shipment-ready-at').value;
    const company = document.getElementById('company').value;
    const contactName = document.getElementById('contact-name').value;
    const address = document.getElementById('address').value;
    const country = document.getElementById('country').value;
    const zipCode = document.getElementById('zip-code').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const requesterName = document.getElementById('requester-name').value;
    const requesterCompany = document.getElementById('requester-company').value;
    const requesterPhone = document.getElementById('requester-phone').value;
    const requesterEmail = document.getElementById('requester-email').value;
    const pieces = document.getElementById('pieces').value;
    const packageType = document.getElementById('package-type').value;
    const weight = document.getElementById('weight').value;
    const description = document.getElementById('description').value;
    const shipmentZipCode = document.getElementById('shipment-zip-code').value;
    const additionalComments = document.getElementById('additional-comments').value;
    
    // Construir el contenido del bill of lading
    const billOfLadingContent = `
        <html>
        <head>
            <title>Bill of Lading</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    margin: 20px;
                }
                h2 {
                    border-bottom: 2px solid #333;
                    padding-bottom: 5px;
                }
                p {
                    margin-bottom: 10px;
                }
                .thanks-message {
                    margin-top: 20px;
                    font-weight: bold;
                    color: #2E8B57;
                }
                .return-button {
                    display: block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #007BFF;
                    color: white;
                    text-align: center;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .return-button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <h2>Bill of Lading</h2>
            <p><strong>Pickup Date:</strong> ${pickupDate}</p>
            <p><strong>Shipment Ready At:</strong> ${shipmentReadyAt}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Contact Name:</strong> ${contactName}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>ZIP Code:</strong> ${zipCode}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr>
            <h3>Requester Information</h3>
            <p><strong>Requester Name:</strong> ${requesterName}</p>
            <p><strong>Requester Company:</strong> ${requesterCompany}</p>
            <p><strong>Requester Phone:</strong> ${requesterPhone}</p>
            <p><strong>Requester Email:</strong> ${requesterEmail}</p>
            <hr>
            <h3>Shipment Information</h3>
            <p><strong>Pieces:</strong> ${pieces}</p>
            <p><strong>Package Type:</strong> ${packageType}</p>
            <p><strong>Weight:</strong> ${weight}</p>
            <p><strong>Description/NMFC:</strong> ${description}</p>
            <p><strong>Shipment ZIP Code:</strong> ${shipmentZipCode}</p>
            <hr>
            <h3>Additional Information</h3>
            <p>${additionalComments}</p>
            <hr>
            <p class="thanks-message">Thanks for choosing us for your transportation needs, we will contact you soon to discuss this quote.</p>
            <a href="index.html" class="return-button">Return to Home</a>
        </body>
        </html>
    `;
    
    // Abrir una nueva ventana o página con el contenido del bill of lading
    const newWindow = window.open();
    newWindow.document.write(billOfLadingContent);
});

// Rotación de imágenes de camiones
fetch('js/trucks.json')
    .then(response => response.json())
    .then(data => {
        const truckImage = document.getElementById('truck-image');
        let currentIndex = 0;

        const rotateImages = () => {
            currentIndex = (currentIndex + 1) % data.length;
            truckImage.src = data[currentIndex].src;
        };

        setInterval(rotateImages, 3000); // Cambia la imagen cada 3 segundos
    })
    .catch(error => console.error('Error loading truck images:', error));