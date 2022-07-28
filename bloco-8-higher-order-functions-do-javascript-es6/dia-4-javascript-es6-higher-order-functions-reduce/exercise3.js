const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        birthYear: 1948,
        author: {
            name: 'George R. R. Martin',
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        birthYear: 1892,
        author: {
            name: 'J. R. R. Tolkien',
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        birthYear: 1920,
        author: {
            name: 'Isaac Asimov',
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        birthYear: 1920,
        author: {
            name: 'Frank Herbert',
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        birthYear: 1947,
        author: {
            name: 'Stephen King',
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        birthYear: 1890,
        author: {
            name: 'H. P. Lovecraft',
        },
        releaseYear: 1928,
    },
];

//array.hofs((element) => algo aqui);

//🚀 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// pegar a idade (releaseYear - birthYear)
// somar todas as idades e dividir pela quantidade quantidade de idades

//   const nome = books[0].name;
//   console.log(nome);

// const idade = (anoLancamento, anoNascimento) => anoLancamento - anoNascimento;
// console.log(idade(books[0].releaseYear, books[0].birthYear));

const media = (acc, curr) => (acc.releaseYear, curr.releaseYear) => acc - curr
console.log(media(books));

  // Adicione o código do exercício aqui: