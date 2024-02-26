const rundellContainer = document.getElementById('rundellContainer');

let currentIndex = 0;

const images =  [
    'nfs_share/images/DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.45 - Reimagine the scene with a specific color scheme_ the robot dragon now has a striking red tint to its metallic body, symbolizing its fiery nature and .webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.51 - Envision a futuristic scene where a robot Viking, designed with intricate metallic armor that reflects the traditional Viking appearance, rides atop a.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.56 - Revise the scene once more, placing the Viking warrior with green eyes and red hair, and his baby dragon companion, at the forefront of a Viking ship,.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.00 - Imagine a revised scene from the Viking Age, where the same formidable Viking warrior, characterized by striking green eyes and fiery red hair, now ha.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.05 - Imagine a scene set in the Viking Age, where a formidable Viking warrior stands proudly in front of a traditional longhouse. This Viking, characterize.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.09 - Envision a captivating scene where a Hydra from Greek mythology, a formidable multi-headed serpent, coils around a modern computer screen. The Hydra, .webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.13 - Imagine a powerful scene where a majestic Chinese dragon, with scales glistening in various shades of red, curls around a modern computer screen. Red,.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.16 - Envision a scene where a significantly larger, majestic raven perches atop an advanced LED keyboard, its white lights softly illuminating the scene. T.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.20 - Imagine a scene where a mysterious raven perches gracefully on a modern LED keyboard, illuminated by soft white lights. The keyboard, with its sleek d.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.23 - Visualize a high-performance computer with a transparent case, as seen through the artistic lens of 12th century Japan. This concept marries the sophi.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.27 - Envision a high-performance computer with a transparent case, creatively reimagined in the style of Maya art. This unique portrayal combines the advan.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.30 - Visualize a high-performance computer with a transparent case, reimagined in the style of Archaic Egyptian art. This computer merges the ancient with .webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.35 - Imagine a high-performance computer with a transparent case, transformed through the lens of Art Nouveau style. This artistic approach brings out the .webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.39 - Visualize a modern, high-performance computer with a sleek, transparent case that allows a clear view of its internal components. Inside, blue and red.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.56.42 - Visualize a modern, high-performance computer with a sleek, transparent case that allows a clear view of its internal components. Inside, blue and red.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.58.07 - Envision a powerful and mystical scene where the Four Horsemen of the Apocalypse are majestically riding robotic dragons. Each horseman, cloaked in an.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.58.55 - Imagine a whimsical and slightly eerie scene featuring four happy clowns with vampire teeth. These clowns are dressed in traditional, colorful clown o.webp',
    'nfs_share/images/DALL·E 2024-02-25 17.12.53 - Picture a triumphant and symbolic scene with three clowns standing on top of a hill, holding an American flag high above their heads. These clowns are.webp',
    'nfs_share/images/DALL·E 2024-02-25 17.15.57 - Envision a heartwarming and adorable scene where a puppy, a kitten, and a piglet are sitting together, sharing a banana. The puppy is fluffy, with a c.webp',
    'nfs_share/images/DALL·E 2024-02-25 17.16.48 - Imagine a charming and delightful scene where a Staffordshire Bull Terrier puppy, a kitten, and a piglet are sitting together, sharing a banana. The S.webp',
    'nfs_share/images/DALL·E 2024-02-25 17.19.03 - Envision a humorous and offbeat scene where two men and two women are deeply involved in a game of poker, each wearing a dog mask and sitting in their.webp',
    'nfs_share/images/DALL·E 2024-02-25 17.21.38 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp',
    'nfs_share/images/DALL·E 2024-02-25 17.21.42 - Imagine an engaging scene of four people, two men and two women, sitting around a poker table, deeply focused on their game. Each player represents a .webp',
]

function showImage() {
    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.alt = `Image ${currentIndex + 1}`;

    // Clear existing content and append the current image
    rundellContainer.innerHTML = '';
    rundellContainer.appendChild(imgElement);
}

function updateRundell() {
    showImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateRundell();
}

// Set interval for automatic image change (every 3 seconds in this example)
const intervalId = setInterval(nextImage, 3000);


// Show the initial image
showImage();