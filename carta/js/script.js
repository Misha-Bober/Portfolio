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
    "img/Ресурс 1logo 1.svg",
    bounds
  ).addTo(map);
  
//   var marker = L.marker([303.5, 378]).addTo(map);
//   marker
//     .bindPopup(
//       "<b>Hello world!</b><br>I am a popup. SVG coordinates: x: 378; y:303.5"
//     )
//     .openPopup();
  
  map.fitBounds(bounds);
  