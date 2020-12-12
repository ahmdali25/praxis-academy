console.log("Kamus Inggris-Indonesia");
function EngToId () {
    let word = prompt("Mencari kata : ");
    let map = new Map();
    map.set('book', 'buku');
    map.set('pencil', 'pensil');
    map.set('bolpoint', 'pulpen');
    map.set('eraser', 'penghapus');
    console.log(map.get(word));

    let addWord = prompt("Menambahkan kata : ");
    let saveAddWord = addWord;
    let transWord = prompt("Menambahkan artinya : ");
    map.set(addWord, transWord);
    console.log(saveAddWord + " = " + map.get(addWord));

    prompt("Menghapus kata : ");
    map.delete(word);
    map.set(word, "Kata telah dihapus");
    console.log(map.get(word));
}
EngToId();