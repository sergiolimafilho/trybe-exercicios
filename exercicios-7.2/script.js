/* const sum = (value1, value2) => value1 + value2;

console.log(sum(3,2));
 */

/* const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3')); */

/*   const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, 3)); */

/*   const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3')); */



const pessoa = {
    nome: 'Sérgio',
    idade: '21',
    endereco: {
        cidade: 'Goiânia',
        pais: 'Brasil',
    }
}

//--------

const keys = Object.keys(pessoa);

console.table(keys);

for (const key of keys) {
    console.log(`${key}`);
}

//---------

const values = Object.values(pessoa);

console.table(values);

for (const key of values) {
    for (const key of values) {
        console.log(`${key}`);
    }
}

//-------

console.table(Object.entries(pessoa));

console.log(pessoa);
