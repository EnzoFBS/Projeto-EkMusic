
console.log(felizinho);
var felizinho = Number(Math.random()*9+1).toFixed()
var calminho = Number(Math.random()*9+1).toFixed()
var apaixonadinho = Number(Math.random()*9+1).toFixed()
var motivadinho = Number(Math.random()*9+1).toFixed()

console.log(felizinho)
console.log(calminho)
console.log(motivadinho)
console.log(apaixonadinho)




    function voltar() {

        location.reload(aparece_div.value);
        
    }

  
function mostrar() {


    

    if (sel_sentimento.value == 'selecioneEmo' || sel_genero_musical.value == 'selecioneGen') {
      
    }
    else{
        refresh.style.display ="block"
    }

   

    if (sel_sentimento.value == 'selecioneEmo' || sel_genero_musical.value == 'selecioneGen') {

        alert('Selecione alguma emocão ou genero')
        
        
    }

    if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'pop' ) {
        felizinho++
        
        aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/MOWDb2TBYDg?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
    }
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'rock' ) {
        felizinho++
        aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/Y-NjZp7Aurg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
    }
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'MPB' ) {
        felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;"  width="560" height="315" src="https://www.youtube.com/embed/uph0CERrjPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
    else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'rap' ) {
        felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/7pD8k2zaLqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'funk' ) {
    felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/bWnS2dIDgQA?start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'feliz' && sel_genero_musical.value == 'gospel' ) {
    felizinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/lzCf7JyHbPg?start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   `
}


else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'pop' ) {
    calminho++

aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/vD0JsUY4ATE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'rock' ) {
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/5Nj1D2y-PY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'MPB' ) {
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/V6kTUpRoRHQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'rap' ) {
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left: 23%;" width="560" height="315" src="https://www.youtube.com/embed/TQ5DUv_ZwRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'funk' ) {
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/D91HXC_o_QQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'calmo' && sel_genero_musical.value == 'gospel' ) {
    calminho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/YDbtPDbHdqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}



 else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'pop' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/Svtr-p4mrQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'rock' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style ="margin-left:23%" width="560" height="315" src="https://www.youtube.com/embed/04854XqcfCY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'MPB' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/FmMleq61iJ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'rap' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/h8lzw6ZRjLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'funk' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/5LqeD-m7Iho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'motivado' && sel_genero_musical.value == 'gospel' ) {
    motivadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><br> <iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/UnEd_pFGWGw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}



 else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'pop' ) {
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe width="560" height="315" src="https://www.youtube.com/embed/9YcrMk_cZyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'rock' ) {
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/8aZHCPc9EwU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}
else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'MPB' ) {
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/wyaCWQvOLYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}
else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'rap' ) {
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe  style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/yfGMPDKq1Pg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}

else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'funk' ) {
    apaixonadinho++
aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2><br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/dNNL70kE6Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  `
}

else if (sel_sentimento.value == 'apaixonado' && sel_genero_musical.value == 'gospel' ) {
    apaixonadinho++
    aparece_div.innerHTML = ` <h2 style="margin-left:23%;" >Sugerimos que essa musica possa alegrar seu dia:</H2>  <br><br><iframe style="margin-left:23%;" width="560" height="315" src="https://www.youtube.com/embed/Df8Wxxjv5Xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `
}


}


localStorage.setItem('feliz',felizinho);
localStorage.setItem('calmo',calminho);
localStorage.setItem('apaixonado',apaixonadinho);
localStorage.setItem('motivado',motivadinho);









