// const map = L.map("map", {
//     crs: L.CRS.Simple,
//     minZoom: -1,
//     maxZoom: 20
//   });
  
//   const bounds = [
//     [0, 0],
//     [607, 756]
//   ];
//   const image = L.imageOverlay(
//     "img/resurs.svg",
//     bounds
//   ).addTo(map);
  
//   var marker = L.marker([357, 113]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>1</b>"
//     )
//     .openPopup();

//     var marker = L.marker([350, 126]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>2</b>"
//     )
//     .openPopup();

//     var marker = L.marker([347, 130]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>3</b>"
//     )
//     .openPopup();

//     var marker = L.marker([314, 178]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>4</b>"
//     )
//     .openPopup();

//     var marker = L.marker([293, 572]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>5</b>"
//     )
//     .openPopup();

//     var marker = L.marker([369, 346.5]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>6</b>"
//     )
//     .openPopup();

//     var marker = L.marker([369, 362]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>7</b>"
//     )
//     .openPopup();

//     var marker = L.marker([375, 381]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>8</b>"
//     )
//     .openPopup();

//     var marker = L.marker([382, 375.5]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>9</b>"
//     )
//     .openPopup();

//     var marker = L.marker([383.5, 378.5]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>10</b>"
//     )
//     .openPopup();

//     var marker = L.marker([385.2, 369,4]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>11</b>"
//     )
//     .openPopup();

//     var marker = L.marker([390, 368]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>12</b>"
//     )
//     .openPopup();

//     var marker = L.marker([391, 370.5]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>13</b>"
//     )
//     .openPopup();

//     var marker = L.marker([389, 374]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>14</b>"
//     )
//     .openPopup();

//     var marker = L.marker([391, 379.5]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>15</b>"
//     )
//     .openPopup();

//   map.fitBounds(bounds);
  



const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 20
});

const bounds = [
  [0, 0],
  [607, 756]
];
const image = L.imageOverlay(
  "img/resurs.svg",
  bounds
).addTo(map);

// Масив об'єктів з інформацією про мітки
const markersData = [
  {
    position: [357, 115],
    popupContent: "<b>1</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.google.com/search?q=google&rlz=1C1GCEA_enUA1075UA1075&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTINCAEQLhjHARjRAxiABDIGCAIQRRg8MgYIAxBFGDwyBggEEEUYPDIGCAUQRRhBMgYIBhBFGEEyBggHEEUYQdIBCDI1NjRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"
  },
  {
    position: [350, 126],
    popupContent: "<b>2</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example2.com"
  },
  {
    position: [347, 130],
    popupContent: "<b>3</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example3.com"
  },
  {
    position: [314, 178],
    popupContent: "<b>4</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example4.com"
  },
  {
    position: [293, 572],
    popupContent: "<b>5</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example5.com"
  },
  {
    position: [369, 346.5],
    popupContent: "<b>6</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example6.com"
  },
  {
    position: [369, 362],
    popupContent: "<b>7</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example7.com"
  },
  {
    position: [375, 381],
    popupContent: "<b>8</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example8.com"
  },
  {
    position: [382, 375.5],
    popupContent: "<b>9</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example9.com"
  },
  {
    position: [383.5, 378.5],
    popupContent: "<b>10</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example10.com"
  },
  {
    position: [385.2, 369.4],
    popupContent: "<b>11</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example11.com"
  },
  {
    position: [390, 368],
    popupContent: "<b>12</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example12.com"
  },
  {
    position: [391, 370.5],
    popupContent: "<b>13</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example13.com"
  },
  {
    position: [389, 374],
    popupContent: "<b>14</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example14.com"
  },
  {
    position: [391, 379.5],
    popupContent: "<b>15</b>",
    iconUrl: 'img/heart.svg',
    link: "https://www.example15.com"
  }
];

// Додавання міток на карту
markersData.forEach(markerData => {
  const markerOptions = {
    icon: L.icon({
      iconUrl: markerData.iconUrl,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    })
  };

  const marker = L.marker(markerData.position, markerOptions).addTo(map);

  // Спливаюче вікно для мітки
  marker.bindTooltip(markerData.popupContent).openTooltip();

  // Випливання спливаючого вікна при наведенні мишки
  marker.on('mouseover', function(e) {
    this.openTooltip();
  });

  // Закриття спливаючого вікна при знятті мишки
  marker.on('mouseout', function(e) {
    this.closeTooltip();
  });

  // Обробник події натискання на мітку
  marker.on('click', function(e) {
    // Відкриття посилання на новій сторінці
    window.open(markerData.link, "_blank");
  });

  // Підказка для мітки
  marker.bindPopup(markerData.popupContent);
});

// Зміна масштабу карту так, щоб зображення було повністю видиме
map.fitBounds(bounds);

