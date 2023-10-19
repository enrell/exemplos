// Forma linear
function printSequencial(char, n, row = 0, coll = 0) {
    // Verifica se todas as linhas foram impressas
    if (row === n) {
      return;
    }
    // Avança para a proxima coluna e imprime um charactere
    coll++ ;
    process.stdout.write(char);

    // Verifica se todas as colunas foram impressas, caso sim quebra uma linha, zera a coluna e adiciona uma row como preenchida
    if (coll === n) {
      process.stdout.write("\n");
      coll = 0;
      row++;
    }

    // Chama a função recursivamente
    printSequencial(char, n, row, coll);


} // printSequencial("AT", 3);

// Forma simétrica
function printFlag(n, row = 0, coll = 0) {
  // "row === coll" verifica se a posição atual está no canto superior esquerdo. 
  // "row === n - coll -1" verifica se a posição atual está no canto superior direito.
  if (row === coll || row === n - coll - 1) {
    process.stdout.write('T');
  } else {
    process.stdout.write('A');
  }

  coll++;

  // Se estiver na ultima coluna, quebra a linha, reseta a coluna para a posição inicial, e adiciona a ultima row completada.
   if (coll === n) {
    process.stdout.write('\n');
    coll = 0;
    row++;
  }

  // Verifica se todas as linhas forem preenchidas, caso for, a função para sua execução e retorna undefined.
  if (row === n) {
    return;
  }

  printFlag(n, row, coll);
}
// Você pode ver o que a função retorna através do console.log
// console.log(printFlag(5));
printFlag(5);

/* 
TAAAT
ATATA
AATAA
ATATA
TAAAT
*/
