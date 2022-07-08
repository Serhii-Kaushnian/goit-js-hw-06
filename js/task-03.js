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

const ulEl = document.querySelector(".gallery");

const createLiFromArray = (array) =>
  array.reduce(
    (accum, element) =>
      accum +
      `<li style="list-style:none;width:640px; margin-bottom:30px; border-radius: 30px; overflow:hidden;">` +
      `<img style=" width:640px; " src = ${element.url}'; alt = ${element.alt}" ></img>` +
      `</li>`,
    ""
  );

const listToinclude = createLiFromArray(images);

ulEl.insertAdjacentHTML("beforeend", listToinclude);
