
// Select some elements...
let header = document.querySelector('#page-header');
header.style.textAlign = 'left'

const dogImages = document.querySelectorAll('.dog-image');
for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderRadius = '10px';
}
 

for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.float = "right";

}

for (let i = 0; i < dogImages.length; i++) {
    dogImages[i].style.borderStyle = "inset"

}

let footer = document.querySelector('.footer')
footer.style.backgroundColor = 'beige'

