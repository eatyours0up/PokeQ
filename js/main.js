function spottedPokemon() {

    L.marker([39.952451, -75.163459]).addTo(map)
    .bindPopup('City Hall')
    .openPopup();
	map.panTo([39.952451, -75.163459]);

	document.getElementById("name").innerHTML = "City Hall";
	document.getElementById("text").innerHTML = "Place Desc. here";
}
