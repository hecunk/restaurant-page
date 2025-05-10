const contentParent = document.querySelector("#content");

export function Home() {
    contentParent.innerHTML = "";
    const content = document.createElement("p");
    content.textContent = "Welcome to Sigmatic's Place, where luxury meets culinary perfection. Indulge in an exclusive dining experience that combines exquisite flavors, world-class service, and an atmosphere of unmatched elegance. Our curated menu features only the finest ingredients, expertly crafted by renowned chefs to offer you a truly unforgettable meal. Every detail is meticulously designed to make your time here an experience of sophistication and indulgence. Discover the art of dining at Sigmatic's Place – where excellence is the only standard."
    contentParent.appendChild(content);
}

export function Menu() {
    contentParent.innerHTML = "";
    const menuContent = document.createElement("div");
    menuContent.id = "menuContent";
    const img1 = document.createElement("img");
    img1.setAttribute("src", "https://i.pinimg.com/736x/f5/cf/8b/f5cf8b7f6a589f27e3e7382ee625790d.jpg");
    const item1 = document.createElement("div");
    item1.classList.add("item");
    item1.id = "Spagetti";
    const span1 = document.createElement("span");
    span1.textContent = "Spagetti and Meatballs";
    item1.appendChild(img1);
    item1.appendChild(span1);
    

    const item2 = document.createElement("div");
    const img2 = document.createElement("img");
    img2.setAttribute("src", "https://i.pinimg.com/736x/9f/26/de/9f26de3bc24343517c28a27a3a7da667.jpg");
    item2.classList.add("item");
    item2.id = "Beef";
    const span2 = document.createElement("span");
    span2.textContent = "Beef Welington";
    item2.appendChild(img2);
    item2.appendChild(span2);
    

    const item3 = document.createElement("div");
    const img3 = document.createElement("img");
    img3.setAttribute("src", "https://i.pinimg.com/736x/95/6b/83/956b831e85ed5f37165cdc8f32a10cad.jpg");
    item3.classList.add("item");
    item3.id = "Soup";
    const span3 = document.createElement("span");
    span3.textContent = "Soup";
    item3.appendChild(img3);
    item3.appendChild(span3);

    const item4 = document.createElement("div");
    const img4 = document.createElement("img");
    img4.setAttribute("src", "https://i.pinimg.com/736x/81/df/53/81df538b7b0144d064afd08f1ca03f42.jpg");
    item4.classList.add("item");
    item4.id = "Tar-Tar";
    const span4 = document.createElement("span");
    span4.textContent = "Tar-Tar";
    item4.appendChild(img4);
    item4.appendChild(span4);
    

    menuContent.appendChild(item1);
    menuContent.appendChild(item2);
    menuContent.appendChild(item3);
    menuContent.appendChild(item4);

    contentParent.appendChild(menuContent);
}

export function About() {
    contentParent.innerHTML = "";
    const content = document.createElement("p");
    content.textContent = "Contact: +1 (111) 000 11-33"
    contentParent.appendChild(content);
}

