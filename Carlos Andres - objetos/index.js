//padre
class estadio {
    constructor(){
        console.log("en el estadio")
    }
    jugadores(){
        return "preparandose";
    }


}

//hija
class equipo extends estadio{
    constructor(){
        super();
        console.log("hay varios jugadores")
    }
    tecnico(){
        return "pal partido";
    }
}

const partido = new equipo();
console.log(partido.jugadores());
console.log(partido.tecnico());


//objetos
const cantantes={
    cantante1:"dua lipa",
    cantante2:"rihanna",
    cantante3: "bad bunny",
    //arreglo [] ,{}
    canciones:[{
        cancion1: "hotter than hell",
        cancion2: "S&M",
        cancion3: "Caro"
    
    },{
        album1:"future nostalgia",
        album2:"cloud",
        album3:"ultimo tour"
    
    }]
    
    }
    //se mete en el objeto luego el arreglo [] se pone la posicion dependiendo de lo que quiere
    //console.log(amigos.celularesqueposee[1].cel1)
    console.log(cantantes.cantante1 + ' - ' +  cantantes.canciones[0].cancion1+" - "+ cantantes.canciones[1].album1 +' - '+ cantantes.cantante2 + ' - ' +  cantantes.canciones[0].cancion2+" - "+ cantantes.canciones[1].album2 + ' - '+ cantantes.cantante3 + ' - ' +  cantantes.canciones[0].cancion3 +" - "+ cantantes.canciones[1].album3)