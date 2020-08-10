      // Example starter JavaScript for disabling form submissions if there are invalid fields
      (function() {
        var ts_x;
        var ts_y;

        'use strict';
        window.addEventListener('load', function() {
      
          var obj = document.getElementById('voltar_data_1');
          obj.addEventListener('touchstart', function(event) {
            $("#voltar_data_1").attr('class', 'd-none');
            $("#voltar_data_2").attr('class', 'd-inline-block');
          }, false);

          obj.addEventListener('touchend', function(event) {
            $("#voltar_data_1").attr('class', 'd-inline-block');
            $("#voltar_data_2").attr('class', 'd-none');            
          }, false);

          var obj = document.getElementById('avancar_data_1');
          obj.addEventListener('touchstart', function(event) {
            $("#avancar_data_1").attr('class', 'd-none');
            $("#avancar_data_2").attr('class', 'd-inline-block');
          }, false);

          obj.addEventListener('touchend', function(event) {
            $("#avancar_data_1").attr('class', 'd-inline-block');
            $("#avancar_data_2").attr('class', 'd-none');            
          }, false);


          var obj = document.getElementById('confirmacao_pelada');
          obj.addEventListener('touchmove', function(event) {
          // If there's exactly one finger inside this element

          obj.addEventListener('touchstart', function(event) {
            //event.preventDefault();
            var touch = event.changedTouches[0];
            ts_x = touch.pageX;
            ts_y = touch.pageY;
          }, false);

          obj.addEventListener('touchmove', function(event) {
            //event.preventDefault();
            var touch = event.changedTouches[0];
            td_x = touch.pageX - ts_x; // deslocamento na horizontal
            td_y = touch.pageY - ts_y; // deslocamento na vertical
            // O movimento principal foi vertical ou horizontal?
            if( Math.abs( td_x ) > Math.abs( td_y ) ) {
                // é horizontal
                if( td_x < 0 ) {
                  // é para esquerda
                  
                } else {
                  // direita
                  
                }
            }
          }, false);
        }, false);


          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
        }, false);
      })();
      
      function splitjogador(nome, qtde) {
        var result = nome.split(" ", qtde).join(" ");
        document.write(result);
      }

      function formatar_data_hora(datahora){
        var data = new Date(datahora);

        var dia = (new Intl.DateTimeFormat('pt-Br', {
          day: '2-digit',
        }).format(data));

        mes = data.getMonth() + 1;

        var mesextenso = (mes == 1 ? 'Jan' : mes == 2? 'Fev' : mes == 3? 'Mar' : mes == 4? 'Abr' : mes == 5? 'Mai' : mes == 6? 'Jun' : mes == 7? 'Jul' : mes == 8? 'Ago' : mes == 9? 'Set' : mes == 10? 'Out' : mes == 11? 'Nov' : 'Dez');

        var horasminutos = (new Intl.DateTimeFormat('pt-Br', {
          hour: '2-digit',
          minute: '2-digit'
        }).format(data));

        document.write(dia + '/' + mesextenso + ' ' + horasminutos);     
      }


      //Tratamento do Click e MouseOver/Out - Confirmacao da pelada
      $(document).ready(function(){
        
        //Tooltips
        $('[data-toggle="tooltip"]').tooltip();

        //Confirmacoes pelo usuario comum
        $("#confirmacao_sim_1").click(function(){
          $("#confirmacao_sim_1").attr('class', 'd-none');
          $("#confirmacao_sim_2").attr('class', 'd-inline-block');
          $("#confirmacao_nao_1").attr('class', 'd-inline-block');
          $("#confirmacao_nao_2").attr('class', 'd-none');
        });

        $("#confirmacao_sim_2").click(function(){
          $("#confirmacao_sim_1").attr('class', 'd-inline-block');
          $("#confirmacao_sim_2").attr('class', 'd-none');
        });

        $("#confirmacao_nao_1").click(function(){
          $("#confirmacao_sim_1").attr('class', 'd-inline-block');
          $("#confirmacao_sim_2").attr('class', 'd-none');
          $("#confirmacao_nao_1").attr('class', 'd-none');
          $("#confirmacao_nao_2").attr('class', 'd-inline-block');
        });

        $("#confirmacao_nao_2").click(function(){
          $("#confirmacao_nao_1").attr('class', 'd-inline-block');
          $("#confirmacao_nao_2").attr('class', 'd-none');
        });


        //Confirmacoes e definicao do Ballons pelo Adm
        
        //Confirmacoes - Jogador 1
        $("#confirmados_desconfirmar_1").mouseover(function(){
          $("#confirmados_desconfirmar_1").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_1").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_1").mouseout(function(){
          $("#confirmados_desconfirmar_1").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_1").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_1").mouseover(function(){
          $("#confirmados_naoinformar_1").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_1").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_1").mouseout(function(){
          $("#confirmados_naoinformar_1").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_1").attr('class', 'd-none');
        });

        $("#confirmados_ballons_1").click(function(){
          $("#confirmados_ballons_1").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_1").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_1").click(function(){
          $("#confirmados_ballons_1").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_1").attr('class', 'd-none');
        });


        //Confirmacoes - Jogador 2
        $("#confirmados_desconfirmar_2").mouseover(function(){
          $("#confirmados_desconfirmar_2").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_2").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_2").mouseout(function(){
          $("#confirmados_desconfirmar_2").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_2").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_2").mouseover(function(){
          $("#confirmados_naoinformar_2").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_2").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_2").mouseout(function(){
          $("#confirmados_naoinformar_2").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_2").attr('class', 'd-none');
        });

        $("#confirmados_ballons_2").click(function(){
          $("#confirmados_ballons_2").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_2").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_2").click(function(){
          $("#confirmados_ballons_2").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_2").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 3
        $("#confirmados_desconfirmar_3").mouseover(function(){
          $("#confirmados_desconfirmar_3").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_3").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_3").mouseout(function(){
          $("#confirmados_desconfirmar_3").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_3").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_3").mouseover(function(){
          $("#confirmados_naoinformar_3").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_3").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_3").mouseout(function(){
          $("#confirmados_naoinformar_3").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_3").attr('class', 'd-none');
        });

        $("#confirmados_ballons_3").click(function(){
          $("#confirmados_ballons_3").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_3").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_3").click(function(){
          $("#confirmados_ballons_3").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_3").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 4
        $("#confirmados_desconfirmar_4").mouseover(function(){
          $("#confirmados_desconfirmar_4").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_4").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_4").mouseout(function(){
          $("#confirmados_desconfirmar_4").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_4").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_4").mouseover(function(){
          $("#confirmados_naoinformar_4").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_4").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_4").mouseout(function(){
          $("#confirmados_naoinformar_4").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_4").attr('class', 'd-none');
        });

        $("#confirmados_ballons_4").click(function(){
          $("#confirmados_ballons_4").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_4").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_4").click(function(){
          $("#confirmados_ballons_4").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_4").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 5
        $("#confirmados_desconfirmar_5").mouseover(function(){
          $("#confirmados_desconfirmar_5").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_5").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_5").mouseout(function(){
          $("#confirmados_desconfirmar_5").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_5").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_5").mouseover(function(){
          $("#confirmados_naoinformar_5").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_5").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_5").mouseout(function(){
          $("#confirmados_naoinformar_5").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_5").attr('class', 'd-none');
        });

        $("#confirmados_ballons_5").click(function(){
          $("#confirmados_ballons_5").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_5").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_5").click(function(){
          $("#confirmados_ballons_5").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_5").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 6
        $("#confirmados_desconfirmar_6").mouseover(function(){
          $("#confirmados_desconfirmar_6").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_6").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_6").mouseout(function(){
          $("#confirmados_desconfirmar_6").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_6").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_6").mouseover(function(){
          $("#confirmados_naoinformar_6").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_6").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_6").mouseout(function(){
          $("#confirmados_naoinformar_6").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_6").attr('class', 'd-none');
        });

        $("#confirmados_ballons_6").click(function(){
          $("#confirmados_ballons_6").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_6").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_6").click(function(){
          $("#confirmados_ballons_6").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_6").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 7
        $("#confirmados_desconfirmar_7").mouseover(function(){
          $("#confirmados_desconfirmar_7").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_7").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_7").mouseout(function(){
          $("#confirmados_desconfirmar_7").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_7").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_7").mouseover(function(){
          $("#confirmados_naoinformar_7").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_7").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_7").mouseout(function(){
          $("#confirmados_naoinformar_7").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_7").attr('class', 'd-none');
        });

        $("#confirmados_ballons_7").click(function(){
          $("#confirmados_ballons_7").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_7").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_7").click(function(){
          $("#confirmados_ballons_7").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_7").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 8
        $("#confirmados_desconfirmar_8").mouseover(function(){
          $("#confirmados_desconfirmar_8").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_8").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_8").mouseout(function(){
          $("#confirmados_desconfirmar_8").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_8").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_8").mouseover(function(){
          $("#confirmados_naoinformar_8").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_8").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_8").mouseout(function(){
          $("#confirmados_naoinformar_8").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_8").attr('class', 'd-none');
        });

        $("#confirmados_ballons_8").click(function(){
          $("#confirmados_ballons_8").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_8").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_8").click(function(){
          $("#confirmados_ballons_8").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_8").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 9
        $("#confirmados_desconfirmar_9").mouseover(function(){
          $("#confirmados_desconfirmar_9").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_9").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_9").mouseout(function(){
          $("#confirmados_desconfirmar_9").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_9").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_9").mouseover(function(){
          $("#confirmados_naoinformar_9").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_9").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_9").mouseout(function(){
          $("#confirmados_naoinformar_9").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_9").attr('class', 'd-none');
        });

        $("#confirmados_ballons_9").click(function(){
          $("#confirmados_ballons_9").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_9").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_9").click(function(){
          $("#confirmados_ballons_9").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_9").attr('class', 'd-none');
        });

        //Confirmacoes - Jogador 10
        $("#confirmados_desconfirmar_10").mouseover(function(){
          $("#confirmados_desconfirmar_10").attr('class', 'd-none');
          $("#confirmados_desconfirmar_preenc_10").attr('class', 'd-block');
        });

        $("#confirmados_desconfirmar_preenc_10").mouseout(function(){
          $("#confirmados_desconfirmar_10").attr('class', 'd-block');
          $("#confirmados_desconfirmar_preenc_10").attr('class', 'd-none');
        });

        $("#confirmados_naoinformar_10").mouseover(function(){
          $("#confirmados_naoinformar_10").attr('class', 'd-none');
          $("#confirmados_naoinformar_preenc_10").attr('class', 'd-block');
        });

        $("#confirmados_naoinformar_preenc_10").mouseout(function(){
          $("#confirmados_naoinformar_10").attr('class', 'd-block');
          $("#confirmados_naoinformar_preenc_10").attr('class', 'd-none');
        });

        $("#confirmados_ballons_10").click(function(){
          $("#confirmados_ballons_10").attr('class', 'd-none');
          $("#confirmados_ballons_preenc_10").attr('class', 'd-block');
        });

        $("#confirmados_ballons_preenc_10").click(function(){
          $("#confirmados_ballons_10").attr('class', 'd-block');
          $("#confirmados_ballons_preenc_10").attr('class', 'd-none');
        });

        //Desconfirmacoes - Jogador 1
        $("#desconfirmados_confirmar_1").mouseover(function(){
          $("#desconfirmados_confirmar_1").attr('class', 'd-none');
          $("#desconfirmados_confirmar_preenc_1").attr('class', 'd-block');
        });

        $("#desconfirmados_confirmar_preenc_1").mouseout(function(){
          $("#desconfirmados_confirmar_1").attr('class', 'd-block');
          $("#desconfirmados_confirmar_preenc_1").attr('class', 'd-none');
        });

        $("#desconfirmados_naoinformar_1").mouseover(function(){
          $("#desconfirmados_naoinformar_1").attr('class', 'd-none');
          $("#desconfirmados_naoinformar_preenc_1").attr('class', 'd-block');
        });

        $("#desconfirmados_naoinformar_preenc_1").mouseout(function(){
          $("#desconfirmados_naoinformar_1").attr('class', 'd-block');
          $("#desconfirmados_naoinformar_preenc_1").attr('class', 'd-none');
        });

        $("#desconfirmados_ballons_1").click(function(){
          $("#desconfirmados_ballons_1").attr('class', 'd-none');
          $("#desconfirmados_ballons_preenc_1").attr('class', 'd-block');
        });

        $("#desconfirmados_ballons_preenc_1").click(function(){
          $("#desconfirmados_ballons_1").attr('class', 'd-block');
          $("#desconfirmados_ballons_preenc_1").attr('class', 'd-none');
        });

        //Desconfirmacoes - Jogador 2
        $("#desconfirmados_confirmar_2").mouseover(function(){
          $("#desconfirmados_confirmar_2").attr('class', 'd-none');
          $("#desconfirmados_confirmar_preenc_2").attr('class', 'd-block');
        });

        $("#desconfirmados_confirmar_preenc_2").mouseout(function(){
          $("#desconfirmados_confirmar_2").attr('class', 'd-block');
          $("#desconfirmados_confirmar_preenc_2").attr('class', 'd-none');
        });

        $("#desconfirmados_naoinformar_2").mouseover(function(){
          $("#desconfirmados_naoinformar_2").attr('class', 'd-none');
          $("#desconfirmados_naoinformar_preenc_2").attr('class', 'd-block');
        });

        $("#desconfirmados_naoinformar_preenc_2").mouseout(function(){
          $("#desconfirmados_naoinformar_2").attr('class', 'd-block');
          $("#desconfirmados_naoinformar_preenc_2").attr('class', 'd-none');
        });

        $("#desconfirmados_ballons_2").click(function(){
          $("#desconfirmados_ballons_2").attr('class', 'd-none');
          $("#desconfirmados_ballons_preenc_2").attr('class', 'd-block');
        });

        $("#desconfirmados_ballons_preenc_2").click(function(){
          $("#desconfirmados_ballons_2").attr('class', 'd-block');
          $("#desconfirmados_ballons_preenc_2").attr('class', 'd-none');
        });

        //Desconfirmacoes - Jogador 3
        $("#desconfirmados_confirmar_3").mouseover(function(){
          $("#desconfirmados_confirmar_3").attr('class', 'd-none');
          $("#desconfirmados_confirmar_preenc_3").attr('class', 'd-block');
        });

        $("#desconfirmados_confirmar_preenc_3").mouseout(function(){
          $("#desconfirmados_confirmar_3").attr('class', 'd-block');
          $("#desconfirmados_confirmar_preenc_3").attr('class', 'd-none');
        });

        $("#desconfirmados_naoinformar_3").mouseover(function(){
          $("#desconfirmados_naoinformar_3").attr('class', 'd-none');
          $("#desconfirmados_naoinformar_preenc_3").attr('class', 'd-block');
        });

        $("#desconfirmados_naoinformar_preenc_3").mouseout(function(){
          $("#desconfirmados_naoinformar_3").attr('class', 'd-block');
          $("#desconfirmados_naoinformar_preenc_3").attr('class', 'd-none');
        });

        $("#desconfirmados_ballons_3").click(function(){
          $("#desconfirmados_ballons_3").attr('class', 'd-none');
          $("#desconfirmados_ballons_preenc_3").attr('class', 'd-block');
        });

        $("#desconfirmados_ballons_preenc_3").click(function(){
          $("#desconfirmados_ballons_3").attr('class', 'd-block');
          $("#desconfirmados_ballons_preenc_3").attr('class', 'd-none');
        });

        //Desconfirmacoes - Jogador 4
        $("#desconfirmados_confirmar_4").mouseover(function(){
          $("#desconfirmados_confirmar_4").attr('class', 'd-none');
          $("#desconfirmados_confirmar_preenc_4").attr('class', 'd-block');
        });

        $("#desconfirmados_confirmar_preenc_4").mouseout(function(){
          $("#desconfirmados_confirmar_4").attr('class', 'd-block');
          $("#desconfirmados_confirmar_preenc_4").attr('class', 'd-none');
        });

        $("#desconfirmados_naoinformar_4").mouseover(function(){
          $("#desconfirmados_naoinformar_4").attr('class', 'd-none');
          $("#desconfirmados_naoinformar_preenc_4").attr('class', 'd-block');
        });

        $("#desconfirmados_naoinformar_preenc_4").mouseout(function(){
          $("#desconfirmados_naoinformar_4").attr('class', 'd-block');
          $("#desconfirmados_naoinformar_preenc_4").attr('class', 'd-none');
        });

        $("#desconfirmados_ballons_4").click(function(){
          $("#desconfirmados_ballons_4").attr('class', 'd-none');
          $("#desconfirmados_ballons_preenc_4").attr('class', 'd-block');
        });

        $("#desconfirmados_ballons_preenc_4").click(function(){
          $("#desconfirmados_ballons_4").attr('class', 'd-block');
          $("#desconfirmados_ballons_preenc_4").attr('class', 'd-none');
        });

        //Desconfirmacoes - Jogador 5
        $("#desconfirmados_confirmar_5").mouseover(function(){
          $("#desconfirmados_confirmar_5").attr('class', 'd-none');
          $("#desconfirmados_confirmar_preenc_5").attr('class', 'd-block');
        });

        $("#desconfirmados_confirmar_preenc_5").mouseout(function(){
          $("#desconfirmados_confirmar_5").attr('class', 'd-block');
          $("#desconfirmados_confirmar_preenc_5").attr('class', 'd-none');
        });

        $("#desconfirmados_naoinformar_5").mouseover(function(){
          $("#desconfirmados_naoinformar_5").attr('class', 'd-none');
          $("#desconfirmados_naoinformar_preenc_5").attr('class', 'd-block');
        });

        $("#desconfirmados_naoinformar_preenc_5").mouseout(function(){
          $("#desconfirmados_naoinformar_5").attr('class', 'd-block');
          $("#desconfirmados_naoinformar_preenc_5").attr('class', 'd-none');
        });

        $("#desconfirmados_ballons_5").click(function(){
          $("#desconfirmados_ballons_5").attr('class', 'd-none');
          $("#desconfirmados_ballons_preenc_5").attr('class', 'd-block');
        });

        $("#desconfirmados_ballons_preenc_5").click(function(){
          $("#desconfirmados_ballons_5").attr('class', 'd-block');
          $("#desconfirmados_ballons_preenc_5").attr('class', 'd-none');
        });                

        //Nao Informado - Jogador 1
        $("#naoinformado_confirmar_1").mouseover(function(){
          $("#naoinformado_confirmar_1").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_1").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_1").mouseout(function(){
          $("#naoinformado_confirmar_1").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_1").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_1").mouseover(function(){
          $("#naoinformado_desconfirmar_1").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_1").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_1").mouseout(function(){
          $("#naoinformado_desconfirmar_1").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_1").attr('class', 'd-none');
        });        

        $("#naoinformado_ballons_1").click(function(){
          $("#naoinformado_ballons_1").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_1").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_1").click(function(){
          $("#dnaoinformado_ballons_1").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_1").attr('class', 'd-none');
        });

        //Nao Informado - Jogador 2
        $("#naoinformado_confirmar_2").mouseover(function(){
          $("#naoinformado_confirmar_2").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_2").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_2").mouseout(function(){
          $("#naoinformado_confirmar_2").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_2").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_2").mouseover(function(){
          $("#naoinformado_desconfirmar_2").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_2").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_2").mouseout(function(){
          $("#naoinformado_desconfirmar_2").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_2").attr('class', 'd-none');
        });

        $("#naoinformado_ballons_2").click(function(){
          $("#naoinformado_ballons_2").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_2").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_2").click(function(){
          $("#dnaoinformado_ballons_2").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_2").attr('class', 'd-none');
        });        

        //Nao Informado - Jogador 3
        $("#naoinformado_confirmar_3").mouseover(function(){
          $("#naoinformado_confirmar_3").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_3").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_3").mouseout(function(){
          $("#naoinformado_confirmar_3").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_3").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_3").mouseover(function(){
          $("#naoinformado_desconfirmar_3").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_3").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_3").mouseout(function(){
          $("#naoinformado_desconfirmar_3").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_3").attr('class', 'd-none');
        });        

        $("#naoinformado_ballons_3").click(function(){
          $("#naoinformado_ballons_3").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_3").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_3").click(function(){
          $("#dnaoinformado_ballons_3").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_3").attr('class', 'd-none');
        });        

        //Nao Informado - Jogador 4
        $("#naoinformado_confirmar_4").mouseover(function(){
          $("#naoinformado_confirmar_4").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_4").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_4").mouseout(function(){
          $("#naoinformado_confirmar_4").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_4").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_4").mouseover(function(){
          $("#naoinformado_desconfirmar_4").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_4").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_4").mouseout(function(){
          $("#naoinformado_desconfirmar_4").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_4").attr('class', 'd-none');
        });

        $("#naoinformado_ballons_4").click(function(){
          $("#naoinformado_ballons_4").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_4").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_4").click(function(){
          $("#dnaoinformado_ballons_4").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_4").attr('class', 'd-none');
        });                

        //Nao Informado - Jogador 5
        $("#naoinformado_confirmar_5").mouseover(function(){
          $("#naoinformado_confirmar_5").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_5").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_5").mouseout(function(){
          $("#naoinformado_confirmar_5").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_5").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_5").mouseover(function(){
          $("#naoinformado_desconfirmar_5").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_5").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_5").mouseout(function(){
          $("#naoinformado_desconfirmar_5").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_5").attr('class', 'd-none');
        });

        $("#naoinformado_ballons_5").click(function(){
          $("#naoinformado_ballons_5").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_5").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_5").click(function(){
          $("#dnaoinformado_ballons_5").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_5").attr('class', 'd-none');
        });                

        //Nao Informado - Jogador 6
        $("#naoinformado_confirmar_6").mouseover(function(){
          $("#naoinformado_confirmar_6").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_6").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_6").mouseout(function(){
          $("#naoinformado_confirmar_6").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_6").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_6").mouseover(function(){
          $("#naoinformado_desconfirmar_6").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_6").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_6").mouseout(function(){
          $("#naoinformado_desconfirmar_6").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_6").attr('class', 'd-none');
        });

        $("#naoinformado_ballons_6").click(function(){
          $("#naoinformado_ballons_6").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_6").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_6").click(function(){
          $("#dnaoinformado_ballons_6").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_6").attr('class', 'd-none');
        });                

        //Nao Informado - Jogador 7
        $("#naoinformado_confirmar_7").mouseover(function(){
          $("#naoinformado_confirmar_7").attr('class', 'd-none');
          $("#naoinformado_confirmar_preenc_7").attr('class', 'd-block');
        });

        $("#naoinformado_confirmar_preenc_7").mouseout(function(){
          $("#naoinformado_confirmar_7").attr('class', 'd-block');
          $("#naoinformado_confirmar_preenc_7").attr('class', 'd-none');
        });

        $("#naoinformado_desconfirmar_7").mouseover(function(){
          $("#naoinformado_desconfirmar_7").attr('class', 'd-none');
          $("#naoinformado_desconfirmar_preenc_7").attr('class', 'd-block');
        });

        $("#naoinformado_desconfirmar_preenc_7").mouseout(function(){
          $("#naoinformado_desconfirmar_7").attr('class', 'd-block');
          $("#naoinformado_desconfirmar_preenc_7").attr('class', 'd-none');
        });

        $("#naoinformado_ballons_7").click(function(){
          $("#naoinformado_ballons_7").attr('class', 'd-none');
          $("#naoinformado_ballons_preenc_7").attr('class', 'd-block');
        });

        $("#naoinformado_ballons_preenc_7").click(function(){
          $("#dnaoinformado_ballons_7").attr('class', 'd-block');
          $("#naoinformado_ballons_preenc_7").attr('class', 'd-none');
        });                

        //Avulsos - Jogador 1
        $("#avulsos_confirmar_1").mouseover(function(){
          $("#avulsos_confirmar_1").attr('class', 'd-none');
          $("#avulsos_confirmar_preenc_1").attr('class', 'd-block');
        });

        $("#avulsos_confirmar_preenc_1").mouseout(function(){
          $("#avulsos_confirmar_1").attr('class', 'd-block');
          $("#avulsos_confirmar_preenc_1").attr('class', 'd-none');
        });

        $("#avulsos_naoinformar_1").mouseover(function(){
          $("#avulsos_naoinformar_1").attr('class', 'd-none');
          $("#avulsos_naoinformar_preenc_1").attr('class', 'd-block');
        });

        $("#avulsos_naoinformar_preenc_1").mouseout(function(){
          $("#avulsos_naoinformar_1").attr('class', 'd-block');
          $("#avulsos_naoinformar_preenc_1").attr('class', 'd-none');
        });

        $("#avulsos_ballons_1").click(function(){
          $("#avulsos_ballons_1").attr('class', 'd-none');
          $("#avulsos_ballons_preenc_1").attr('class', 'd-block');
        });

        $("#avulsos_ballons_preenc_1").click(function(){
          $("#davulsos_ballons_1").attr('class', 'd-block');
          $("#avulsos_ballons_preenc_1").attr('class', 'd-none');
        });        

        //Avulsos - Jogador 2
        $("#avulsos_confirmar_2").mouseover(function(){
          $("#avulsos_confirmar_2").attr('class', 'd-none');
          $("#avulsos_confirmar_preenc_2").attr('class', 'd-block');
        });

        $("#avulsos_confirmar_preenc_2").mouseout(function(){
          $("#avulsos_confirmar_2").attr('class', 'd-block');
          $("#avulsos_confirmar_preenc_2").attr('class', 'd-none');
        });

        $("#avulsos_naoinformar_2").mouseover(function(){
          $("#avulsos_naoinformar_2").attr('class', 'd-none');
          $("#avulsos_naoinformar_preenc_2").attr('class', 'd-block');
        });

        $("#avulsos_naoinformar_preenc_2").mouseout(function(){
          $("#avulsos_naoinformar_2").attr('class', 'd-block');
          $("#avulsos_naoinformar_preenc_2").attr('class', 'd-none');
        });

        $("#avulsos_ballons_2").click(function(){
          $("#avulsos_ballons_2").attr('class', 'd-none');
          $("#avulsos_ballons_preenc_2").attr('class', 'd-block');
        });

        $("#avulsos_ballons_preenc_2").click(function(){
          $("#davulsos_ballons_2").attr('class', 'd-block');
          $("#avulsos_ballons_preenc_2").attr('class', 'd-none');
        });        

        //Avulsos - Jogador 3
        $("#avulsos_confirmar_3").mouseover(function(){
          $("#avulsos_confirmar_3").attr('class', 'd-none');
          $("#avulsos_confirmar_preenc_3").attr('class', 'd-block');
        });

        $("#avulsos_confirmar_preenc_3").mouseout(function(){
          $("#avulsos_confirmar_3").attr('class', 'd-block');
          $("#avulsos_confirmar_preenc_3").attr('class', 'd-none');
        });

        $("#avulsos_naoinformar_3").mouseover(function(){
          $("#avulsos_naoinformar_3").attr('class', 'd-none');
          $("#avulsos_naoinformar_preenc_3").attr('class', 'd-block');
        });

        $("#avulsos_naoinformar_preenc_3").mouseout(function(){
          $("#avulsos_naoinformar_3").attr('class', 'd-block');
          $("#avulsos_naoinformar_preenc_3").attr('class', 'd-none');
        });

        $("#avulsos_ballons_3").click(function(){
          $("#avulsos_ballons_3").attr('class', 'd-none');
          $("#avulsos_ballons_preenc_3").attr('class', 'd-block');
        });

        $("#avulsos_ballons_preenc_3").click(function(){
          $("#davulsos_ballons_3").attr('class', 'd-block');
          $("#avulsos_ballons_preenc_3").attr('class', 'd-none');
        });        

        //Avulsos - Jogador 4
        $("#avulsos_confirmar_4").mouseover(function(){
          $("#avulsos_confirmar_4").attr('class', 'd-none');
          $("#avulsos_confirmar_preenc_4").attr('class', 'd-block');
        });

        $("#avulsos_confirmar_preenc_4").mouseout(function(){
          $("#avulsos_confirmar_4").attr('class', 'd-block');
          $("#avulsos_confirmar_preenc_4").attr('class', 'd-none');
        });

        $("#avulsos_naoinformar_4").mouseover(function(){
          $("#avulsos_naoinformar_4").attr('class', 'd-none');
          $("#avulsos_naoinformar_preenc_4").attr('class', 'd-block');
        });

        $("#avulsos_naoinformar_preenc_4").mouseout(function(){
          $("#avulsos_naoinformar_4").attr('class', 'd-block');
          $("#avulsos_naoinformar_preenc_4").attr('class', 'd-none');
        });

        $("#avulsos_ballons_4").click(function(){
          $("#avulsos_ballons_4").attr('class', 'd-none');
          $("#avulsos_ballons_preenc_4").attr('class', 'd-block');
        });

        $("#avulsos_ballons_preenc_4").click(function(){
          $("#davulsos_ballons_4").attr('class', 'd-block');
          $("#avulsos_ballons_preenc_4").attr('class', 'd-none');
        });        

        //Avulsos - Jogador 5
        $("#avulsos_confirmar_5").mouseover(function(){
          $("#avulsos_confirmar_5").attr('class', 'd-none');
          $("#avulsos_confirmar_preenc_5").attr('class', 'd-block');
        });

        $("#avulsos_confirmar_preenc_5").mouseout(function(){
          $("#avulsos_confirmar_5").attr('class', 'd-block');
          $("#avulsos_confirmar_preenc_5").attr('class', 'd-none');
        });

        $("#avulsos_naoinformar_5").mouseover(function(){
          $("#avulsos_naoinformar_5").attr('class', 'd-none');
          $("#avulsos_naoinformar_preenc_5").attr('class', 'd-block');
        });

        $("#avulsos_naoinformar_preenc_5").mouseout(function(){
          $("#avulsos_naoinformar_5").attr('class', 'd-block');
          $("#avulsos_naoinformar_preenc_5").attr('class', 'd-none');
        });

        $("#avulsos_ballons_5").click(function(){
          $("#avulsos_ballons_5").attr('class', 'd-none');
          $("#avulsos_ballons_preenc_5").attr('class', 'd-block');
        });

        $("#avulsos_ballons_preenc_5").click(function(){
          $("#davulsos_ballons_5").attr('class', 'd-block');
          $("#avulsos_ballons_preenc_5").attr('class', 'd-none');
        });                        
      });
