import { data } from "./data.js";
// Card

let main = document.getElementById("main");
main.style.display = "grid";
main.style.gridTemplateColumns = "auto auto auto";
main.style.gap = "15px"
main.style.alignContent = "center";
main.style.justifyContent = "center"

function card(data, i) {
  let div = document.createElement("div");
  main.append(div);
  div.style.width = "350px";
  div.style.height = "500px";
  div.style.border = "2px solid black";
  div.style.backgroundColor = "lightgrey";
  div.style.borderRadius = "15px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  div.style.gap = "7px";
  console.log(div);
  let img = document.createElement("div");
  let image = document.createElement("img");
  div.append(img);
  img.append(image);
  image.style.width = "200px";
  image.style.height = "160px";
  image.style.borderRadius = "15px";
  img.style.width = "300px";
  img.style.height = "190px";
  img.style.border = "2px solid black";
  img.style.backgroundColor = "white";
  img.style.borderRadius = "15px";
  img.style.display = "flex";
  img.style.alignItems = "center";
  img.style.justifyContent = "center";
  let title = document.createElement("div");
  div.append(title);
  title.style.width = "300px";
  title.style.height = "60px";
  title.style.border = "2px solid black";
  title.style.backgroundColor = "white";
  title.style.borderRadius = "15px";
  title.style.textAlign = "center";
  title.style.alignContent = "center";

  let desc = document.createElement("div");
  div.append(desc);
  desc.style.width = "300px";
  desc.style.height = "70px";
  desc.style.border = "2px solid black";
  desc.style.backgroundColor = "white";
  desc.style.borderRadius = "15px";
  desc.style.textAlign = "center";
  desc.style.alignContent = "center";
  desc.style.fontSize = "0.6rem";

  let detail = document.createElement("div");
  div.append(detail);
  detail.style.width = "300px";
  detail.style.height = "60px";
  // detail.style.border = "2px solid black";
  // detail.style.backgroundColor = "white";
  detail.style.borderRadius = "15px";
  detail.style.display = "flex";
  detail.style.alignItems = "center";
  detail.style.justifyContent = "center";
  detail.style.gap = "5px";
  let rating = document.createElement("div");
  detail.append(rating);
  rating.style.width = "90px";
  rating.style.height = "40px";
  rating.style.border = "2px solid black";
  rating.style.backgroundColor = "white";
  rating.style.borderRadius = "15px";
  rating.style.textAlign = "center";
  rating.style.alignContent = "center";

  let count = document.createElement("div");
  detail.append(count);
  count.style.width = "90px";
  count.style.height = "40px";
  count.style.border = "2px solid black";
  count.style.backgroundColor = "white";
  count.style.borderRadius = "15px";
  count.style.textAlign = "center";
  count.style.alignContent = "center";

  let price = document.createElement("div");
  detail.append(price);
  price.style.width = "90px";
  price.style.height = "40px";
  price.style.border = "2px solid black";
  price.style.backgroundColor = "white";
  price.style.borderRadius = "15px";
  price.style.textAlign = "center";
  price.style.alignContent = "center";

  let btn = document.createElement("button");
  let btnn = document.createTextNode("Buy Now");
  btn.append(btnn);
  div.append(btn);
  btn.style.width = "250px";
  btn.style.height = "40px";
  btn.style.border = "2px solid black";
  btn.style.backgroundColor = "white";
  btn.style.borderRadius = "15px";
  btn.style.backgroundColor = "lightgreen";

  // let c1 = desc.textContent = data[0].description;
  // let c2 = title.textContent = data[0].title;
  // let c3 = price.textContent = data[0].price;
  // let c4 = rating.textContent = data[0].rating.rate;
  // let c5 = count.textContent = data[0].rating.count;

  // for(let i =0;i<data.length;i++){
  image.src = data[i].image;
  desc.textContent = data[i].description;
  title.textContent = data[i].title;
  price.textContent = data[i].price;
  rating.textContent = data[i].rating.rate;
  count.textContent = data[i].rating.count;
  // }
}

for (let i = 0; i < data.length; i++) {
  card(data, i);
}
