const ePaisagem = (largura, altura) => largura > altura;
if(ePaisagem(1920, 1080)){
    console.log('A imagem está em modo paisagem!')
}else{
    console.log('A imagem não está em modo paisagem!')
}