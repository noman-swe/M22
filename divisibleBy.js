// 22-6 Write foo, bar, foobar if divisible by 3 or 5 or both
for(let i = 1; i <= 15; i++){
    // console.log(i);
    if(i % 3 == 0 && i % 5 == 0){
        console.log('fooo');
    }
    else if(i % 2 ==0){
        console.log( ' even digits');
    }
    // else if(i % 3 == 0){
    //     console.log( ' divisible by 3');
    // }

    else if(i % 2 == 1){
        console.log( ' odd digitssss');
    }
    else{
        console.log(i);
    }
}