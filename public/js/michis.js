// michis.js
const apiKey = 'live_DMRQ7tjpxtQXVpu1cjOyjBIMxOFyErogNUvusEjvKntLOVgj1TeJf6pZ1IKlXC1E';

// Función para cargar michis aleatorios
async function loadRandomCatImages() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
        headers: {
            'x-api-key': apiKey
        }
    });
    const images = await response.json();

    const randomCatImagesDiv = document.getElementById('random-cat-images');
    randomCatImagesDiv.innerHTML = '';

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image.url;
        img.alt = 'A random cat';
        randomCatImagesDiv.appendChild(img);
    });
}

document.getElementById('load-cat-images').addEventListener('click', loadRandomCatImages);

// Función para cargar una raza aleatoria
async function loadRandomCatBreed() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': apiKey
        }
    });
    const breeds = await response.json();

    if (breeds.length > 0) {
        const randomIndex = Math.floor(Math.random() * breeds.length);
        const breed = breeds[randomIndex];

        const catBreedDiv = document.getElementById('cat-breeds');
        catBreedDiv.innerHTML = ''; // Clear previous content

        const breedDiv = document.createElement('div');
        breedDiv.classList.add('breed');

        const breedName = document.createElement('h3');
        breedName.textContent = breed.name;

        const breedOrigin = document.createElement('p');
        breedOrigin.textContent = `Origin: ${breed.origin}`;

        const breedTemperament = document.createElement('p');
        breedTemperament.textContent = `Temperament: ${breed.temperament}`;

        const breedImage = document.createElement('img');
        breedImage.src = breed.image?.url || 'images/default-cat.jpg';
        breedImage.alt = breed.name;
        breedImage.classList.add('breed-image');

        const moreInfoButton = document.createElement('button');
        moreInfoButton.textContent = 'Info del michi';
        moreInfoButton.addEventListener('click', () => {
            alert(`Description: ${breed.description}`);
        });

        breedDiv.appendChild(breedName);
        breedDiv.appendChild(breedOrigin);
        breedDiv.appendChild(breedTemperament);
        breedDiv.appendChild(breedImage);
        breedDiv.appendChild(moreInfoButton); // Add button to view more info
        catBreedDiv.appendChild(breedDiv);
    }
}

document.getElementById('load-breeds').addEventListener('click', loadRandomCatBreed);

// Función para cargar y votar por el Michi del Día
async function loadCatOfTheDay() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=1', {
        headers: {
            'x-api-key': apiKey
        }
    });
    const image = await response.json();

    const catOfTheDayDiv = document.getElementById('cat-of-the-day');
    catOfTheDayDiv.innerHTML = '';

    if (image.length > 0) {
        const img = document.createElement('img');
        img.src = image[0].url;
        img.alt = 'Cat of the day';
        img.id = 'cat-of-the-day-image';
        
        const voteButton = document.createElement('button');
        voteButton.textContent = 'Vota por mi, por favor.';
        voteButton.addEventListener('click', () => voteForCat(image[0].id));

        const voteCount = document.createElement('p');
        voteCount.id = 'vote-count';
        voteCount.textContent = `votos: ${0}`; 

        catOfTheDayDiv.appendChild(img);
        catOfTheDayDiv.appendChild(voteButton);
        catOfTheDayDiv.appendChild(voteCount);
    }
}

document.getElementById('load-cat-of-the-day').addEventListener('click', loadCatOfTheDay);

async function voteForCat(catId) {
    const response = await fetch('https://api.thecatapi.com/v1/votes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify({
            image_id: catId,
            value: 1
        })
    });
    const result = await response.json();

    if (result.message === 'SUCCESS') {
        const voteCountElement = document.getElementById('vote-count');
        let currentVoteCount = parseInt(voteCountElement.textContent.split(': ')[1]);
        currentVoteCount += 1;
        voteCountElement.textContent = `Votos: ${currentVoteCount}`;
    } else {
        alert('An error occurred while voting.');
    }
}

// Función para cambiar el fondo de color aleatoriamente
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', () => {
    changeBackgroundColor();
});
