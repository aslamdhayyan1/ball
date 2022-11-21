const location=[];
const makeBall=function makeBall(x,y){
    let p={x:x,y:y};
    return p;
}
const factory=function factory(n){
    for(let i=0;i<n;i++){
        let p=makeBall(i,i);
        location.push(p);
    }
}
factory(3);

console.log('locations'+JSON.stringify(locations));