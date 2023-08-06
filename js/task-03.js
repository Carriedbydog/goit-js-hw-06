const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// const galleryBlock = document.querySelector(".gallery");
// const galleryTitle = document.createElement("h2");
// galleryTitle.textContent = "Our Gallery";
// galleryTitle.classList.add("gallery-title");

// const imgArr = images.map((image) => {
//   const imgItem = document.createElement("li");
//   imgItem.classList.add("gallery-item");
//   const imgEl = document.createElement("img");
//   imgItem.append(imgEl);
//   imgEl.append(image);
//   imgEl.src = image.url;
//   imgEl.alt = image.alt;
//   imgEl.width = 360;
//   imgEl.height = 240;

//   return imgItem;
// });

// galleryBlock.append(...imgArr);
// galleryBlock.insertAdjacentHTML("beforeend", imgArr);

const galleryBlock = document.querySelector(".gallery");
// const galleryTitle = document.createElement("h2");
// galleryTitle.textContent = "Our Gallery";
// galleryTitle.classList.add("gallery-title");
// galleryBlock.appendChild(galleryTitle);

const imgArr = images
  .map(
    (image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-img" width="360" height="240">
  </li>
`
  )
  .join("");

galleryBlock.insertAdjacentHTML("beforeend", imgArr);

console.log(galleryBlock);
