
// let ipServerSurveys = "http://127.0.0.1:1880";
let ipServerSurveys = "http://192.168.0.101:1880";
// let ipServerSurveys = "http://10.10.103.99:1880";

( () => {

   setTimeout(() => {

      document.querySelector('.loaderPage').style.display = "none";
      document.querySelector('.row.main-row').classList.toggle('hide');

      document.querySelector('#keyClientSurvey').classList.toggle('show');
   }, 4000);

   document.querySelector('#sendKeySurvey').addEventListener('click', async () => {

      let keyClient = document.querySelector('#keySurveyClient').value;

      try {
       
         let dataSurveyClient = await fetch(`${ipServerSurveys}/checkKeyForSurvey?id=${keyClient}`).then(json => json.json()).then(data => data);

         document.querySelector('#keyClientSurvey').classList.toggle('show');
         document.querySelector('.row.main-row').classList.toggle('hide');
         document.querySelector('.loaderPage').style.display = 'block';

         let nameClient = document.querySelector('.firstSeccionTitle .client .nameClient');
         let ordenCompraClient = document.querySelector('.firstSeccionTitle .client .ordenCompraClient');
         let codeProjectClient = document.querySelector('.firstSeccionTitle .project .codeProjectClient');
         let nameProjectClient = document.querySelector('.firstSeccionTitle .project .nameProjectClient');

         let strong = document.createElement('strong');
         strong.innerText = "Cliente: ";
         let divName = document.createElement('span');
         divName.classList = "name";
         divName.innerText = dataSurveyClient.nombre_cliente;
         nameClient.appendChild(strong);
         nameClient.appendChild(divName);

         strong = document.createElement('strong');
         strong.innerText = "Orden de compra: ";
         divName = document.createElement('span');
         divName.classList = "codeProject";
         divName.innerText = dataSurveyClient.orden_compra_cliente;
         ordenCompraClient.appendChild(strong);
         ordenCompraClient.appendChild(divName);

         strong = document.createElement('strong');
         strong.innerText = "Codigo Proyecto: ";
         divName = document.createElement('span');
         divName.classList = "codeProject";
         divName.innerText = dataSurveyClient.codigo_proyecto_cliente;
         codeProjectClient.appendChild(strong);
         codeProjectClient.appendChild(divName);

         strong = document.createElement('strong');
         strong.innerText = "Descripción: ";
         divName = document.createElement('span');
         divName.classList = "descriptionProject";
         divName.innerText = dataSurveyClient.descripcion_proyecto_cliente;
         nameProjectClient.appendChild(strong);
         nameProjectClient.appendChild(divName);

         // document.querySelector('.firstSeccionTitle .client .nameClient').innerHTML = `<strong>Cliente: </strong> <div class="name">${dataSurveyClient.nombre_cliente}</div>`;
         // document.querySelector('.firstSeccionTitle .project .projectClient').innerHTML = `<strong>Codigo Proyecto: </strong> <div class="codeProject">${dataSurveyClient.codigo_proyecto_cliente}</div> <strong>Descripción: </strong> <div class="descriptionProject">${dataSurveyClient.descripcion_proyecto_cliente}</div>`;

         obtainDataSurvey(dataSurveyClient.id_encuesta);
      } catch (error) {

         document.querySelector('#keyClientSurvey').classList.toggle('show');
         document.querySelector('.row.main-row').classList.toggle('hide');
         document.querySelector('.loaderPage').style.display = 'block';

         document.querySelector('#keyClientSurvey .modal-body .messageKey').remove();
         document.querySelector('#keyClientSurvey .modal-body').innerHTML = "<p style='font-size: 16px; font-weight: 500;'>La llave ingresada ya ha sido usada o la misma no es valida, por favor contacte con soporte para validar la información... <span class='seconds'>10<span></p>";
         document.querySelector('#keyClientSurvey .modal-footer').remove();

         setTimeout(() => {
            
            document.querySelector('.loaderPage').style.display = 'none';
            document.querySelector('.row.main-row').classList.toggle('hide');
            document.querySelector('#keyClientSurvey').classList.toggle('show');

            let seconds = 10;
            setInterval(() => {
               document.querySelector('span.seconds').innerText = seconds --;
            }, 1000);

            setTimeout(() => {
               location.reload()
            }, 11000);
         }, 2000);

         console.warn(error);
      }
   });
})();

let obtainDataSurvey = async idSurvey => {

   let dataSurvey = await fetch(`${ipServerSurveys}/obtainDataSurvey?id=${idSurvey}`).then(json => json.json()).then(data => data);

   let seccionSurvey = document.querySelector('.groupQuestionSection');

   let department = '';
   let numberDepartment = 1;
   dataSurvey.forEach((elem, i, survey) => {

      if(department != elem.nombre_seccion){

         // Modulo de encabezados de seccion
         let divNameSection = document.createElement('div');
         divNameSection.className = "row questionSection";

         let divNumberSection = document.createElement('div');
         divNumberSection.className = "col-md-1";
         let pNumber = document.createElement('p');
         pNumber.className = "numberQuestion";
         pNumber.innerText = (numberDepartment);
         divNumberSection.appendChild(pNumber);
         divNameSection.appendChild(divNumberSection);

         let divName = document.createElement('div');
         divName.className = "col-md-11";
         let pNameSection = document.createElement('p');
         pNameSection.className = "descriptionQuestion";
         pNameSection.innerText = elem.nombre_seccion;
         divName.appendChild(pNameSection);
         divNameSection.appendChild(divName);

         // Modulo de respuestas
         let divAswerSection = document.createElement('div');
         divAswerSection.className = "row answerSection justify-content-center";

         let divCol11 = document.createElement('div');
         divCol11.className = "col-md-11";
         divAswerSection.appendChild(divCol11);
         
         let divResponseSection = document.createElement('div');
         divResponseSection.className = "responseSection";
         divCol11.appendChild(divResponseSection);
         
         let divResponses = document.createElement('div');
         divResponses.className = "responses";
         divResponseSection.appendChild(divResponses);
         
         let ol = document.createElement('ol');
         divResponses.appendChild(ol);

         survey.forEach(question => {

            if(elem.nombre_seccion == question.nombre_seccion){

               let li = document.createElement('li');
               li.innerText = question.pregunta;
               let divPuntuacionSection = document.createElement('div');
               divPuntuacionSection.className = "puntuacionSection";
               divPuntuacionSection.innerHTML = question.etiquetas_html;
               li.appendChild(divPuntuacionSection);
               ol.appendChild(li);
            }
         });
         
         seccionSurvey.appendChild(divNameSection);
         seccionSurvey.appendChild(divAswerSection);

         let hr = document.createElement('hr');
         seccionSurvey.appendChild(hr);

         numberDepartment ++;
      }

      department = elem.nombre_seccion;
   });

   // Modulo botonera
   let divNameSection = document.createElement('div');
   divNameSection.className = "row questionSection botonera";

   let divNumberSection = document.createElement('div');
   divNumberSection.className = "col-md-1";
   let pNumber = document.createElement('p');
   pNumber.className = "numberQuestion";
   pNumber.innerText = (numberDepartment);
   divNumberSection.appendChild(pNumber);
   divNameSection.appendChild(divNumberSection);

   let divName = document.createElement('div');
   divName.className = "col-md-11";
   let pNameSection = document.createElement('p');
   pNameSection.className = "descriptionQuestion";
   pNameSection.innerText = "GUARDAR ENCUESTA";
   divName.appendChild(pNameSection);
   divNameSection.appendChild(divName);

   let divAswerSection = document.createElement('div');
   divAswerSection.className = "row answerSection justify-content-center mb-5 botonera";

   let divCol11 = document.createElement('div');
   divCol11.className = "col-md-11";
   divAswerSection.appendChild(divCol11);
   
   let divResponseSection = document.createElement('div');
   divResponseSection.className = "responseSection";
   divCol11.appendChild(divResponseSection);
   
   let divButtonsActions = document.createElement('div');
   divButtonsActions.className = "row my-3 justify-content-end";
   let colButtonsActions = document.createElement('div');
   colButtonsActions.className = "col-md-6";
   colButtonsActions.style.textAlign = "end";
   divButtonsActions.appendChild(colButtonsActions);  
   divResponseSection.appendChild(divButtonsActions);

   let buttonEnviarEncuesta = document.createElement('button');
   buttonEnviarEncuesta.className = "btn btn-primary buttonSendSurvey";
   buttonEnviarEncuesta.innerText = "Guardar";
   colButtonsActions.appendChild(buttonEnviarEncuesta);

   seccionSurvey.appendChild(divNameSection);
   seccionSurvey.appendChild(divAswerSection);

   document.querySelectorAll('.groupQuestionSection .row.answerSection .responses .puntuacionSection').forEach( section => {

      section.querySelectorAll('span').forEach( span => {

         span.addEventListener('click', event => {

            section.querySelectorAll('span.selected').forEach( singleSpan => {
               singleSpan.classList.toggle('selected');
            });

            span.classList.toggle('selected');
         });
      });
   });

   document.querySelector('.buttonSendSurvey').addEventListener('click', async () => {

      await document.querySelectorAll('textarea').forEach( textarea => {

         let response = textarea.value;

         textarea.insertAdjacentHTML("afterend", `<span class="dataTextarea selected" style="display: none;">${response}</span>`);
         textarea.remove();
      });

      let keySurvey = document.querySelector('#keySurveyClient').value;
      let dataClient = document.querySelector('.firstSeccionTitle').innerHTML;
      let responseQuestions = document.querySelector('.groupQuestionSection').innerHTML;

      let surveyClient = {
         'key': keySurvey,
         'dataClient': dataClient.trim(),
         'responseQuestions': responseQuestions.trim()
      };

      let headers = {
         method: 'POST',
         body: JSON.stringify(surveyClient),
         headers: {
            "content-type": "application/json; charset=utf-8"
         }
      };

      await fetch(`${ipServerSurveys}/saveDataSurveyClient`, headers);
      location.reload();
   });

   setTimeout(() => {
            
      document.querySelector('.loaderPage').style.display = 'none';
      document.querySelector('.row.main-row').classList.toggle('hide');
      document.querySelector('.col-md-6.main').classList.toggle('hiddenSurvey');
   }, 2000);
};
