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

function creatingUlListFromArray() {
  let ulToInclude = document.createElement("ul");
  ulToInclude.classList.add("gallery");
  ulToInclude.style.listStyle = "none";

  images.forEach((el) => {
    var liEl = document.createElement("li");
    var imageEl = document.createElement("img");
    imageEl.src = el.url;
    imageEl.alt = el.alt;
    imageEl.width = 640;
    liEl.classList.add("item");
    liEl.appendChild(imageEl);
    ulToInclude.appendChild(liEl);
  });

  document.querySelector(".gallery").replaceWith(ulToInclude);
}

creatingUlListFromArray();
