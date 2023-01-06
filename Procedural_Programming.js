function dot_produit(v1,v2){
    console.log(v1,v2);
    let ps = v1[0]*v2[0]+v1[1]*v2[1];
    return ps;
}
function test_orthogonal(tab){
    console.log(tab);
    for(let i=0;i<tab.length;i++){
    let result = dot_produit(tab[i][0],tab[i][1]);
    console.log(result);
    if(result===0) console.log("vectors are orthogonal");
    else console.log("not orthogonal");
    }
}
test_orthogonal([[[2,3],[-3,2]],[[2,6],[-3,2]],[[2,3],[-3,7]]]);