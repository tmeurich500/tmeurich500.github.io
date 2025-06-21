/* add your code here */

window.onload = function () {
  const section = document.querySelector("main section");

  const sites = [
    {
      name: "British Museum",
      location: "London, United Kingdom",
      img: "images/5855729828.jpg",
      colors: [
        { name: "Norway", hex: "#A8BBA2" },
        { name: "Pine Glade", hex: "#B6B77F" },
        { name: "Finch", hex: "#646C5F" },
        { name: "Wood Bark", hex: "#332F2E" },
        { name: "Barley Corn", hex: "#BD9E5E" }
      ]
    },
    {
      name: "Emirates Stadium",
      location: "London, United Kingdom",
      img: "images/5855735700.jpg",
      colors: [
        { name: "Wax Flower", hex: "#EEB4A4" },
        { name: "Teal", hex: "#028B8B" },
        { name: "Black Pearl", hex: "#001F2D" },
        { name: "Sherpa Blue", hex: "#004E5B" },
        { name: "Morning Glory", hex: "#9EDFE1" }
      ]
    },
    {
      name: "Albert Hall",
      location: "London, United Kingdom",
      img: "images/5855174537.jpg",
      colors: [
        { name: "Sorrell Brown", hex: "#A5896F" },
        { name: "Calico", hex: "#D8B08C" },
        { name: "Seagull", hex: "#93B5C6" },
        { name: "Spanish White", hex: "#F1E6D6" },
        { name: "Tacao", hex: "#EFAD7F" }
      ]
    }
  ];

  sites.forEach(site => {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.src = site.img;
    img.alt = site.name;
    article.appendChild(img);

    const h1 = document.createElement("h1");
    h1.textContent = site.name;
    article.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = site.location;
    h2.style.fontWeight = "normal";
    h2.style.fontSize = "0.9em";
    article.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "Colors";
    article.appendChild(h3);

    site.colors.forEach(color => {
      const div = document.createElement("div");
      div.textContent = color.name;
      div.style.backgroundColor = color.hex;
      div.style.height = "40px";
      div.style.lineHeight = "40px";
      div.style.textAlign = "center";
      div.style.fontWeight = "bold";
      article.appendChild(div);
    });

    section.appendChild(article);
  });
};
