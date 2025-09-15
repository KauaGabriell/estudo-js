Promise.resolve('Mari eu te amo!').then(resposta =>{
    console.log(resposta);
})

Promise.reject('Reject').catch(resposta =>{
    console.log(resposta);
})
