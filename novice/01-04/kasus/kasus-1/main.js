console.log("Penjumlahan 2 buah Matriks Satu Baris");
function sumMatriks() {
  let num1 = prompt("Masukkan number 1");
  let num2 = prompt("Masukkan number 2");
  let num3 = prompt("Masukkan number 3");
  let num4 = prompt("Masukkan number 4");

  let firstM = [num1, num2];
  let secondM = [num3, num4];

  let numA = firstM[0];
  let numB = firstM[1];
  let numC = secondM[0];
  let numD = secondM[1];

  let aSumC = Number(numA) + Number(numC);
  let bSumD = Number(numB) + Number(numD);

  let matriks = "[" + aSumC + " " + bSumD + "]";
  console.log(matriks);
}
sumMatriks();