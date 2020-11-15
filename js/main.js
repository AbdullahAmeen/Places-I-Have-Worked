

var WorkPlaces = L.layerGroup();

var myIcon = L.icon({
    iconUrl: 'img/my-icon.png',
    iconSize: [42, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36]
});
var myIcon2 = L.icon({
    iconUrl: 'img/my-icon1.png',
    iconSize: [42, 52],
    iconAnchor: [15, 25],
    popupAnchor: [-3, -36],
});
L.marker([34.540782791277174,69.18048977851868],{icon:myIcon}).bindPopup("<h6 class='h1'>AECOM International Development - USAID Funded Project (SKA-East)</h6> <a href='https://www.usaid.gov/afghanistan/fact-sheets/stability-key-areas-sika' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.528152921422559,69.1943836212158],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee Main Office-Kabul</h6>").addTo(WorkPlaces),
L.marker([34.53786633646289,69.16690707206726],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Afghanistan Performance Based Governors Fund Program</h6> <a href='https://www.usaid.gov/news-information/fact-sheets/performance-based-governance-fund-pbgf#:~:text=The%20Performance%2DBased%20Governance%20Fund,improve%20their%20overall%20management%20capacity.'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.81401251871912,67.82458752393723],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Bamian Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([36.26552168534952,68.01760196685791],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asian Foundation-Samangan Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([36.71298328509708,67.10573673248291],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Balkh Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([36.71666428208896, 68.8677978515625],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asia Foundation-Kunduz Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([36.73525578137582,69.52416658401489],{icon:myIcon}).bindPopup("<h6 class='h1'>The Asian Foundation-Takhar Province</h6> <a href='https://asiafoundation.org/where-we-work/afghanistan/'><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.00073124300159,69.01834487915039],{icon:myIcon}).bindPopup("<h6 class='h1'>International RescueCommittee-Logar Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([33.33610374104741,69.91782903671263],{icon:myIcon}).bindPopup("<h6 class='h1'>Intenational Rescume Comittee-Khost Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.42739015929333,70.45643806457521],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee-Nangarhar Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.3388950120101, 62.21166810200001],{icon:myIcon}).bindPopup("<h6 class='h1'>International Rescue Committee-Herat Province</h6> <a href='https://www.rescue.org/country/afghanistan' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.830026976201005,71.8407583236694],{icon:myIcon}).bindPopup("<h6 class='h1'>DACAAR - Pakistan </h6> <a href='https://dacaar.org/' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([34.553410745087284,69.1652977466583],{icon:myIcon}).bindPopup("<h6 class='h1'>DACAAR Main Office-Kabul</h6> <a href='https://dacaar.org/' target=_blank><h6>Click here for more details.</h6></a>").addTo(WorkPlaces),
L.marker([43.09757513681959,-89.3542957305908],{icon:myIcon2}).bindPopup("<h6 class='h1'>Forward Service Corporation-Upward Bound Program</h6> <a href='https://fsc-corp.org/programs/upward-bound/' target=_blank><h6>Click here for more details</h6></a>").addTo(WorkPlaces),
L.marker([43.10984994346575,-89.3089342117309],{icon:myIcon2}).bindPopup("<h6 class='h1'>Porchlight Inc.</h6> <a href='https://porchlightinc.org/' target=_blank><h6>Click here for more details.</h6></a>"
).addTo(WorkPlaces),
L.marker([43.070596384405306,-89.3952476978302],{icon:myIcon2}).bindPopup("<h6 class= 'h1'>Madison Metropolitan School District (MMSD) </h6> <a href='https://www.madison.k12.wi.us/' target=_blank><h6>Click here for more details.</h6></a>").addTo(WorkPlaces),
L.marker([43.07241858824732,-89.52495664358139],{icon:myIcon2}).bindPopup("<h6 class='h1'>TDS Telecom. <a href='https://tdstelecom.com/'target=_blank><h6>Click here for more details.</h6></a> <img src='img/tds.png' alt='TDS Building' width='150' height='110' class='Images'></h6>").addTo(WorkPlaces);


var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    topograph = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {attribution: mbAttr});

var map = L.map('map', {
  center: [12.398243, -19.364222],
  zoom: 2,
  layers: [WorkPlaces, grayscale]
});

var baseLayers = {
  "Streets": streets,
  "Grayscale": grayscale,
  "Topography": topograph
};

var overlays = {
  "Work-Places": WorkPlaces
};

L.control.layers(baseLayers, overlays,{
  collapsed:false,
}).addTo(map);

L.control.scale().addTo(map);

var popup = L.popup()
    .setLatLng(latlng)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);