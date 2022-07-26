const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    let array = arrays.reduce((valorAcumulado, valorAtual) => valorAcumulado.concat(valorAtual), [])
    console.log(array);
  }

  flatten();