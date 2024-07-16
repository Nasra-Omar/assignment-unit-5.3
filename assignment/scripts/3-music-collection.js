console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
  collection: collection, 
  title: title,
  artist: artist, 
  yearPublished: yearPublished, 
};

collection.push(newAlbum);
return newAlbum;
}


addToCollection(myCollection, "II", "Boyz II Men", 1991);
addToCollection(myCollection, "Here My Dear", "Marvin Gaye", 1978);
addToCollection(myCollection, "CTRL", "SZA", 2017);
addToCollection(myCollection, "400 Degreez", "Juvenile", 1998);
addToCollection(myCollection, "BLACKsummers night", "Maxwell", 2009);
addToCollection(myCollection, "Greatest Hits" ,"Al Green", 1975);

console.log(myCollection, "II", "Boyz II Men", 1991);
console.log(myCollection, "Here My Dear", "Marvin Gaye", 1978);
console.log(myCollection, "CTRL", "SZA", 2017);
console.log(myCollection, "400 Degreez", "Juvenile", 1998);
console.log(myCollection, "BLACKsummers night", "Maxwell", 2009);
console.log(myCollection, "Greatest Hits" ,"Al Green", 1975);

console.log(myCollection);

function showCollection(collection) {
  for (let album of collection) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);

function findByArtist(collection, artist) {
  let matchingAlbums = [];

  for (let album of collection) {
      if (album.artist === artist) {
          matchingAlbums.push(album);
      }
  }

  return matchingAlbums;
}


let artist1Albums = findByArtist(myCollection, "SZA");
console.log(`Albums by SZA:`);
showCollection(artist1Albums);


let artistNotInCollection = findByArtist(myCollection, "SZA");
console.log(`Albums by SZA:`);
showCollection(artistNotInCollection);








// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
