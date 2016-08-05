function tagPokemon(){
	alert(pos.lat);
	alert(pos.lng);
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: document.getElementById('poke-name').value
        });
}