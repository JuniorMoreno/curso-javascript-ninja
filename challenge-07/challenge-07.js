/*
Crie um array com 5 items (tipos variados).
*/
var items = [null, 'Ninja', {Cor: 'preto'}, [1, 2, 3], 3.14];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(values){
    items.push(values);
    return items;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem(['teste', true, 2]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + items[5][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + items.length + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + items[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var x = 10;

console.log( 'Números pares entre 10 e 20:');

while(x <= 20){
    x % 2 ? '' : console.log(x) ;
    x++;
};


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
var x = 10;

console.log( 'Números ímpares entre 10 e 20:' );

while(x <= 20){
    x % 2 ? console.log(x) : '';
    x++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(y = 100 ; y <=120; y++){

    x % 2 ? '' : console.log(y) ;
    x++;
}

console.log( 'Números ímpares entre 111 e 125:' );
for(z = 111 ; z <=125; z++){

    x % 2 ?  console.log(z) : '' ;
    x++;
}