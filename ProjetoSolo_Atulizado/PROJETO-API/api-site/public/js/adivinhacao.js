


   var tentativas = 0;
   
   function sorteia() {

       return Math.round(Math.random()* 14 + 1);

    }

    function sorteiaNumeros(quantidade) {

        var segredos = [];

        var numero = 1;

        while(numero <= quantidade) {

              var numeroAleatorio = sorteia();
              var achou = false;

              if (numeroAleatorio !== 0) {
                     for(var posicao = 0; posicao < segredos.length; posicao++) {

                           if(segredos[posicao] == numeroAleatorio){
                                achou = true;
                                break;
                           }

                     }

                     if (achou == false) {
                           segredos.push(numeroAleatorio);
                           numero++;
                     }
              }

        }

        return segredos;

    }

    var segredos = sorteiaNumeros();

    console.log(segredos);

 


    function verifica() {
      
      var achou = false;
      tentativas++

       for(var posicao = 0; posicao < segredos.length; posicao++) {
            
              if(ipt_gen.value == segredos[posicao]) {
                     alert("Você ACERTOU!");
                     div2.style.display = "block"
                     div1.style.display = "none"
                     achou = true
                     break;
                     
              } 

            }

            console.log(tentativas);


            if (tentativas < 3) {
                  
                 if(achou == false ) {

                  alert("Você ERROU!");
           }

      }   

      if (tentativas == 3 && achou == false) {
            
            alert('Voce errou,Acabou suas tentativas')
            div3.style.display = "block"
            div1.style.display = "none"
           div2.style.display = "none"
            
      }

      // condição 1

      if (ipt_gen.value == 1 && ipt_gen.value == segredos[segredos.indexOf(1)] ) {

         
            img1.innerHTML = `  <img src="https://i2.wp.com/maistocadas.mus.br/wp-content/uploads/2019/06/musicas-gospel-mais-tocadas.png?fit=600%2C359&ssl=1"  style="width: 400px;" alt="">`  
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/lzCf7JyHbPg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                 
      }


      else if (ipt_gen.value == 2 && ipt_gen.value == segredos[segredos.indexOf(2)] ) {

           
            img1.innerHTML = `  <img src="https://img.freepik.com/vetores-gratis/palavra-de-neon-de-rap-e-microfone-no-contorno-de-chama_1262-11901.jpg?size=338&ext=jpg"  style="width: 400px;height:300px;" alt="">`            
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dvFkPDWk0OM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      }

      else if (ipt_gen.value == 3 && ipt_gen.value == segredos[segredos.indexOf(3)] ) {

         
            img1.innerHTML = `  <img src="../public/img/sertanejo.png"  style="width: 400px;" alt="">`   
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dvFkPDWk0OM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`        
      }

      else if (ipt_gen.value == 4 && ipt_gen.value == segredos[segredos.indexOf(4)] ) {

          
            img1.innerHTML = `  <img src="../public/img/trap.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/6Tlscs__yf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 5 && ipt_gen.value == segredos[segredos.indexOf(5)] ) {

           
            img1.innerHTML = `  <img src="https://www.vagalume.com.br/1470154983100588/default"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe src="https://www.youtube.com/embed/uph0CERrjPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 6 && ipt_gen.value == segredos[segredos.indexOf(6)] ) {

            
            img1.innerHTML = `  <img src="../public/img/PUP.jpeg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/MOWDb2TBYDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 7 && ipt_gen.value == segredos[segredos.indexOf(7)] ) {

         
            img1.innerHTML = `  <img src="../public/img/pagode.jpg"  style="width: 400px;" alt="">`  
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/qiAoCkue1PE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`        
      }
      else if (ipt_gen.value == 8 && ipt_gen.value == segredos[segredos.indexOf(8)] ) {

            
            img1.innerHTML = `  <img src="https://4429028l.ha.azioncdn.net/img/2020/09/produto/4555/1/large/reggae-just-relax-02.jpg"  style="width: 400px;" alt="">`
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/fxvUzfzr6-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`          
      }

      else if (ipt_gen.value == 9 && ipt_gen.value == segredos[segredos.indexOf(9)] ) {

        
            img1.innerHTML = `  <img src="https://img.vagalume.fm/1464201608479108132/bg";" alt="">`    
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/-B19u9tHnIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`      
      }
      else if (ipt_gen.value == 10 && ipt_gen.value == segredos[segredos.indexOf(10)] ) {

        
            img1.innerHTML = `  <img src="https://www.vagalume.com.br/146411300413492499/default"  style="width: 400px;" alt="">`   
            iframe2.innerHTML =   `<iframe width="560" height="315" src="https://www.youtube.com/embed/BGpzGu9Yp6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`      
      }
      else if (ipt_gen.value == 11 && ipt_gen.value == segredos[segredos.indexOf(11)] ) {

        
            img1.innerHTML = `  <img src="https://cdns-images.dzcdn.net/images/cover/e988a0aed4092034d00b0421569253c8/500x500.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/_mVW8tgGY_w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }
      else if (ipt_gen.value == 12 && ipt_gen.value == segredos[segredos.indexOf(12)] ) {

            img1.innerHTML = `  <img src="https://image.freepik.com/vetores-gratis/instrumentos-musicais-de-jazz_81894-3155.jpg"  style="width: 400px;" alt="">`  
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/gy1B3agGNxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`       
      }
      else if (ipt_gen.value == 13 && ipt_gen.value == segredos[segredos.indexOf(13)] ) {

          
            img1.innerHTML = `  <img src="../public/img/fk_funk.jpg"  style="width: 400px;" alt="">`   
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/bWnS2dIDgQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`       
      }

      else if (ipt_gen.value == 14 && ipt_gen.value == segredos[segredos.indexOf(14)] ) {

         
            img1.innerHTML = `  <img src="http://pm1.narvii.com/6947/a1fad3f9b80150f374d1653c4f8e425adb8c3ad2r1-900-500v2_uhq.jpg"  style="width: 400px;" alt="">` 
            iframe2.innerHTML =  `<iframe width="560" height="315" src="https://www.youtube.com/embed/4z-RgbJ8NJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

      else if (ipt_gen.value == 15 && ipt_gen.value == segredos[segredos.indexOf(15)] ) {

            
            img1.innerHTML = `  <img src="../public/img/sambaa.jpeg"  style="width: 400px;" alt="">`   
            iframe2.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/eaKhlTuhVXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`         
      }

























    
     
       ipt_gen.value = "";
       ipt_gen.focus();

    }

    
    function recomecar() {
          location.reload(div1);
       
    }