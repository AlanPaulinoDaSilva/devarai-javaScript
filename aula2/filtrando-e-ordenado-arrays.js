/*
    ->Escrever um programa que recebe alguns 
      produtos como argumentos.
    
    ->Validar se esses produtos estão na lista 
      de itens disponiveis do mercado.

    ->Caso esteja, avidar o usuario quais produtos 
      tem e quais não tem.

    ->Por ultimo exibir a lista de produtos disponiveis
      ordenados por ordem alfabetica do mercado e exibir na tela
*/

const readline= require("readline");

const leitor= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const produtosMercado=[
    "feijão",
    "arroz",
    "melancia",
    "alface"
];

const validarLista=(listaMercado)=>{
    if(!listaMercado){//verefica se a lista esta vazia, false, null ou undefined
      throw Error("A lista não pode ser vazia")     
    } 
    
    const itensDesejados= listaMercado.split(",");
    const itensInvalidos=itensDesejados.filter(item=>!item.trim()).length;

if(itensInvalidos>0){
  throw Error(`Existem ${itensInvalidos} itens invalidos`)
}
return itensDesejados;
}
const obterDisponibilidade= (listaValida)=>{
    const produtosDisponiveis=[];
    const produtosIndisponiveis=[];

    for(const item of listaValida){
      const itemFormatado=item.trim().toLowerCase();
      if(produtosMercado.includes(itemFormatado)){
        produtosDisponiveis.push(itemFormatado);
      }else{  
        produtosIndisponiveis.push(itemFormatado);
      }
    }

    return{
      produtosDisponiveis,
      produtosIndisponiveis
    }
}


leitor
    .question(
        "Digite a lista de produtos separado por virgula:\n",
        listaProdutos=>{
          try{
           const listaValida= validarLista(listaProdutos);
           const disponibilidade= obterDisponibilidade(listaValida);
            console.log(
              `Os seguintes itens estão disponiveis`,
              disponibilidade.produtosDisponiveis
            );

            console.log(
              `Os seguinte itens não estão disponiveis`,
              disponibilidade.produtosIndisponiveis
            );

            const disponiveisOrdenados=disponibilidade
            .produtosDisponiveis
            .sort((produto1,produto2)=>produto1.localeCompare(produto2));
            console.log(
              "Produtos ordenados por ordem alfabética",
              disponiveisOrdenados
            )
          }catch(e){
            console.log(`Erro ao processar a lista (${e.message})`)
          }finally{
            leitor.close();
          }
    }
);

