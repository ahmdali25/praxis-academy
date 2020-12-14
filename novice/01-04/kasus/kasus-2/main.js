console.log("Kamus Inggris-Indonesia");
function EngToId () {
    let word = prompt("Mencari kata : ");
    let map = new Map();
    map.set('book', 'buku');
    map.set('pencil', 'pensil');
    map.set('bolpoint', 'pulpen');
    map.set('eraser', 'penghapus');
    let sWord = map.has(word);
    if (sWord == true) {
        console.log(map.get(word));
    } else {
        console.log("Kata tidak ditemukan dari kamus");
    }

    let addWord = prompt("Menambahkan kata : ");
    let saveAddWord = addWord;
    let transWord = prompt("Menambahkan artinya : ");
    map.set(addWord, transWord);
    console.log(saveAddWord + " = " + map.get(addWord));

    let delWord = word;
    delWord = prompt("Menghapus kata : ");
    let newWord = map.has(delWord);
    if (newWord == true) {
        map.delete(delWord);
        map.set(delWord, 'Kata telah dihapus dari kamus');
        console.log(map.get(delWord));
    } else {
        console.log("Kata tidak ada dalam kamus");
    }
}
EngToId();