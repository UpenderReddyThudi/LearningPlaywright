let n = 5;
for(i=n; i>=1; i--){
    let row = "";
    for(j=0; j<=n-i; j++){
        row += " ";
    }
    for(k=0; k<=2*(i-1); k++){
        row += "*";
      
    }
    console.log(row);
}