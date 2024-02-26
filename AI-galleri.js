const rundellContent = document.getElementById('rundellContent');

let currentIndex = 0;

const images =  [
    'nfs_share/images/DALL·E 2024-02-25 13.55.27 - Imagine an aquarelle (watercolor) painting that depicts a serene forest scene in Germany. The artwork captures the lush greenery of the German country.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.34 - Visualize an oil painting that captures the classic still life subject of a bowl of fruit. The composition features a richly detailed bowl overflowing.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.41 - Imagine a futuristic garden where the flowers are not organic, but robotic. Each flower is meticulously designed with metallic petals that gleam in th.webp',
    'nfs_share/images/DALL·E 2024-02-25 13.55.45 - Reimagine the scene with a specific color scheme_ the robot dragon now has a striking red tint to its metallic body, symbolizing its fiery nature and .webp',
]

function showImages() {
    rundellContent.innerHTML = '';
    images.forEach((image ,index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
    })
}