function tagPokemon(){
        var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: document.getElementById('poke-name').value
        });
}