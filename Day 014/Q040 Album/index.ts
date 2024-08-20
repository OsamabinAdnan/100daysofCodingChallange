function make_album(artistName:string,albumTitle:string,tracks?:number){
    let album = {
        artistName,
        albumTitle,
    };
    if (tracks !== undefined && tracks !== 0) {
        album.tracks = tracks;
      }
    return album
}
console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));