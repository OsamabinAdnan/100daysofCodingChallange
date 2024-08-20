let magicians:string[] = ["David Blaine", "David Copperfield", "John Edward Szeles", "Christopher Sarantakos"]

function show_magicians (magicians:string[]){
    magicians.forEach(magician => {
        console.log(magician)
    });
}

function make_great(magicians:string[]){
    for (let i = 0; i < magicians.length ; i++){
        magicians[i] = `The Great ` + magicians[i]
    }
}

make_great(magicians)
show_magicians (magicians)

