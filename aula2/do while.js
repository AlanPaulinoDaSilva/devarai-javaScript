let atividadesPendentes;
let atividadesRealizadas=0;

const consultaAtividadesDoDia=()=>{
    if(atividadesRealizadas===3){
        return[];

    }
    return[
        "Atividade 1",
        "Atividade 2",
        "Atividade 3"
    ];
}

const informarAtividades=(atividades)=>{
    if(atividades.length===0){
        console.log('Você não tem mais atividades Pendentes');
        return
    }
    console.log(`Atividades Pendentes ${atividades}`)
}


do{
    atividadesPendentes=consultaAtividadesDoDia();
    informarAtividades(atividadesPendentes);
    atividadesRealizadas++;
}while(atividadesPendentes.length>0);