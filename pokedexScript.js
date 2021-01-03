$(document).on("pagebeforeshow", "#pokedex", function () {    
	$.getJSON('pokedexList.json', function(data) {
			//Good to sort the data before anything else goes on
			data.pokemonData.sort(compare);
			
            var output="";
            var newpage="";
			// Goes through the array and for every object makes a new list item. 
            for (var i in data.pokemonData) {
                output+="<li>" + 
                "<a href=\"#page" + data.pokemonData[i].pokemonId + "\" data-transition=slide >" + 
                "<h3>" + data.pokemonData[i].name + "</h3>" + "</a>" +
                "</li>";
                
                //Checks if a page exists and if it doesn't it creates it and adds the code to the html. 
                if ($("#page" + data.pokemonData[i].pokemonId).length == 0) {
                    newpage+="<div data-role=\"page\" id=\"page" + data.pokemonData[i].pokemonId + "\">";
                    newpage+="<div data-role=\"header\">"+ "<a data-role=\"button\" data-rel=\"back\" data-icon=\"back\">Back</a>" +"<h3>" +  data.pokemonData[i].name +  "</h3></div>";
                    newpage+="<div role=\"main\" class=\"ui-content\"><h3>Name: " +  data.pokemonData[i].name +  "</h3><h4>Pokedex Entry: " + data.pokemonData[i].pokemonId + "</h4><h5>Type: " + data.pokemonData[i].type + "</h5><img src="+ data.pokemonData[i].picUrl +"></div> </div>";
                }
				
            }
            output+="";
            newpage += "";
            $('body').append(newpage);
            $("#pokeList").html(output).listview('refresh'); //Have to refresh the list to update the style.
			
			
    });
	 
});

		function compare(a,b) {

				if (a.name < b.name)
					return -1;
				if (a.name > b.name)
					return 1;
					return 0;

				}