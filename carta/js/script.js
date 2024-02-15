document.getElementById("map").style.backgroundColor = "#000"; //додано фоновий колір для карти

const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 0.3,
  maxZoom: 20
});

const bounds = [
  [0, 0],
  [607, 756]
];
const image = L.imageOverlay(
  "img/group-1.svg",
  bounds
).addTo(map);

// Масив об'єктів з інформацією про мітки
const markersData = [
  {
    position: [337, 107],
    popupContent: "<b>place 1</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.google.com/search?q=google&rlz=1C1GCEA_enUA1075UA1075&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhjHARjRAxiABDIGCAIQRRg8MgYIAxBFGDwyBggEEEUYPDIGCAUQRRhBMgYIBhBFGEEyBggHEEUYQdIBCDI1NjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  },
  {
    position: [327, 126],
    popupContent: "<b>place 2</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example2.com"
  },
  {
    position: [323, 132],
    popupContent: "<b>place 3</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example3.com"
  },
  {
    position: [290, 176],
    popupContent: "<b>place 4</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example4.com"
  },
  {
    position: [270, 575],
    popupContent: "<b>place 5</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example5.com"
  },
  {
    position: [344, 347],
    popupContent: "<b>place 6</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example6.com"
  },
  {
    position: [369, 362],
    popupContent: "<b>place 7</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example7.com"
  },
  {
    position: [375, 381],
    popupContent: "<b>place 8</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example8.com"
  },
  {
    position: [382, 375.5],
    popupContent: "<b>place 9</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example9.com"
  },
  {
    position: [383.5, 378.5],
    popupContent: "<b>place 10</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example10.com"
  },
  {
    position: [385.2, 369.4],
    popupContent: "<b>place 11</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example11.com"
  },
  {
    position: [390, 368],
    popupContent: "<b>place 12</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example12.com"
  },
  {
    position: [391, 370.5],
    popupContent: "<b>place 13</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example13.com"
  },
  {
    position: [389, 374],
    popupContent: "<b>place 14</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example14.com"
  },
  {
    position: [391, 379.5],
    popupContent: "<b>place 15</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example15.com"
  }
];

// Додавання міток на карту
markersData.forEach(markerData => {
  const markerOptions = {
    icon: L.icon({
      iconUrl: markerData.iconUrl,
      iconSize: [15, 15],
      iconAnchor: [7.5, 7.5],
    })
  };

  const marker = L.marker(markerData.position, markerOptions).addTo(map);

  // Спливаюче вікно для мітки
  marker.bindTooltip(markerData.popupContent).openTooltip();

  // Випливання спливаючого вікна при наведенні мишки
  marker.on('mouseover', function (e) {
    this.openTooltip();
  });

  // Закриття спливаючого вікна при знятті мишки
  marker.on('mouseout', function (e) {
    this.closeTooltip();
  });

  // Обробник події натискання на мітку
  marker.on('click', function (e) {
    // Відкриття посилання на новій сторінці
    window.open(markerData.link, "_blank");
  });

  // Підказка для мітки
  marker.bindPopup(markerData.popupContent);
});

// Зміна масштабу карту так, щоб зображення було повністю видиме
map.fitBounds(bounds);


