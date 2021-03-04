
function stair(n){
    for(let i=1; i<=n; i++){
        for(let j=0; j < i; j++){
            process.stdout.write("#")
        }
        for(let k=0; k<n-i; k++){
            process.stdout.write(" ")
        }
        console.log(" ")
    }
}
stair(7)