function* geradorDeId(){
    let id = 1;
    while(true){
        yield id;
        id++;
    }
}
const id = geradorDeId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);