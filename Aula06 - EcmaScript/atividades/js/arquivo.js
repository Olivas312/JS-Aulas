const verificarPromise = new Promise((resolve, rejects)=>{
    let nome ='ADM';
    let senha ='ADM';
    if(nome == 'ADM' && senha == 'ADM'){
        resolve('Login efetuado com sucesso');
    }else{
        rejects('Login não efetuado');
    }
});

verificarPromise.then((x)=>{
    console.log(x);
});