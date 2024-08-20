let magicians:string[] = ["David Blaine", "David Copperfield", "John Edward Szeles", "Christopher Sarantakos"]

function show_magician (magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician);        
    })
}

show_magician(magicians)