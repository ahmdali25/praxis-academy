var a = '';
for (var i = 1; i <= 6; i++){
    for (var j = 0; j < i; j++){
        a += '*';        
    }
    a += '\n';
}

console.log(a);