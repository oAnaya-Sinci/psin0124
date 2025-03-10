
// let ipServerSurveys = "http://127.0.0.1:1880";
let ipServerSurveys = "https://websas.sinci.com:1880";
let keyClient;

(() => {

  keyClient = window.location.search.split('key=')[1];
  document.querySelector('#keySurveyClient').value = keyClient;

  setTimeout(() => {
    document.querySelector('.loaderPage').style.display = "none";
    document.querySelector('.row.main-row').classList.toggle('hide');

    document.querySelector('#keyClientSurvey').classList.toggle('show');
    document.querySelector('#sendKeySurvey').click();
  }, 1000);

  document.querySelector('#sendKeySurvey').addEventListener('click', async () => {

    // keyClient = document.querySelector('#keySurveyClient').value;
    try {

      document.querySelector('#keyClientSurvey').classList.toggle('show');
      document.querySelector('.row.main-row').classList.toggle('hide');
      document.querySelector('.loaderPage').style.display = 'block';

      let dataSurveyClient = await fetch(`${ipServerSurveys}/checkKeyForSurvey?id=${keyClient}`).then(json => json.json()).then(data => data);

      let nameClient = document.querySelector('.firstSeccionTitle .client .nameClient');
      let ordenCompraClient = document.querySelector('.firstSeccionTitle .project .ordenCompraClient');
      let codeProjectClient = document.querySelector('.firstSeccionTitle .project .codeProjectClient');
      let nameProjectClient = document.querySelector('.firstSeccionTitle .footer .nameProjectClient');

      let strong = document.createElement('strong');
      strong.innerText = "Cliente: ";
      let divName = document.createElement('span');
      divName.classList = "name";
      divName.style.whiteSpace = "break-spaces";
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
      divName.style.whiteSpace = "break-spaces";
      divName.innerText = dataSurveyClient.descripcion_proyecto_cliente;
      nameProjectClient.appendChild(strong);
      nameProjectClient.appendChild(divName);

      obtainDataSurvey(dataSurveyClient.id_encuesta);
    } catch (error) {

      document.querySelector('.loaderPage').style.display = 'block';

      document.querySelector('#keyClientSurvey .modal-body .messageKey').remove();

      let messageNoSurvey = document.createElement('p');
      messageNoSurvey.innerText = "Esta encuesta ya ha sido completada, en caso de no reconocer esta accion por favor contacte con soporte SINCI® para validar la información... ";
      messageNoSurvey.style.fontSize = "15px";
      messageNoSurvey.style.fontWeight = "500";
      let spanSecond = document.createElement('span');
      spanSecond.classList.add("seconds");
      spanSecond.innerText = "30";
      messageNoSurvey.appendChild(spanSecond)

      document.querySelector('#keyClientSurvey .modal-body').appendChild(messageNoSurvey);

      let btnsoporte = document.createElement('button');
      btnsoporte.className = "btn btn-primary buttonSendSurvey";
      btnsoporte.innerText = "Contactar con soporte";
      btnsoporte.addEventListener('click', () => {
        window.open("https://sinci.com/contacto", "_self");
      });

      document.querySelector('#keyClientSurvey .modal-footer #sendKeySurvey').remove();
      document.querySelector('#keyClientSurvey .modal-footer').appendChild(btnsoporte);

      setTimeout(() => {

        document.querySelector('.loaderPage').style.display = 'none';
        document.querySelector('.row.main-row').classList.toggle('hide');
        document.querySelector('#keyClientSurvey').classList.toggle('show');

        let seconds = 30;
        setInterval(() => {
          if (seconds > 0)
            document.querySelector('span.seconds').innerText = (seconds -= 1);
        }, 1000);

        setTimeout(() => {
          // location.reload()
          window.open("https://sinci.com/contacto", "_self");
        }, 31000);
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

    if (department != elem.nombre_seccion) {

      let obligatorioParagraph = document.createElement('span');
      obligatorioParagraph.className = "obligatorio ms-1";
      obligatorioParagraph.innerText = "*";

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
      pNameSection.appendChild(obligatorioParagraph);
      divName.appendChild(pNameSection);
      divNameSection.appendChild(divName);

      // Modulo de respuestas
      let divAnswerSection = document.createElement('div');
      divAnswerSection.className = "row answerSection justify-content-center";

      let divCol11 = document.createElement('div');
      divCol11.className = "col-md-11";
      divAnswerSection.appendChild(divCol11);

      let divResponseSection = document.createElement('div');
      divResponseSection.className = "responseSection";
      divCol11.appendChild(divResponseSection);

      let divResponses = document.createElement('div');
      divResponses.className = "responses";
      divResponseSection.appendChild(divResponses);

      let ol = document.createElement('ol');
      divResponses.appendChild(ol);

      survey.forEach((question, j) => {

        if (elem.nombre_seccion == question.nombre_seccion) {

          let li = document.createElement('li');
          li.innerText = question.pregunta;
          let divPuntuacionSection = document.createElement('div');
          divPuntuacionSection.className = elem.nombre_seccion != 'IMAGEN' ? "puntuacionSection" : "puntuacionSection image";
          divPuntuacionSection.innerHTML = question.etiquetas_html;
          li.appendChild(divPuntuacionSection);
          ol.appendChild(li);
        }
      });

      seccionSurvey.appendChild(divNameSection);
      seccionSurvey.appendChild(divAnswerSection);

      let hr = document.createElement('hr');
      seccionSurvey.appendChild(hr);

      numberDepartment++;
    }

    department = elem.nombre_seccion;
  });

  document.querySelectorAll('.puntuacionSection .multiple-section').forEach(elem => {

    let initAscii = 65; // Letras en mayuscular
    // let initAscii = 97; // Letras en minuscula
    elem.querySelectorAll('.group-question').forEach((div, i) => {

      div.querySelector('div').innerText = String.fromCharCode(initAscii + i) + ")";
    });
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

  let divAnswerSection = document.createElement('div');
  divAnswerSection.className = "row answerSection justify-content-center mb-5 botonera";

  let divCol11 = document.createElement('div');
  divCol11.className = "col-md-11";
  divAnswerSection.appendChild(divCol11);

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
  seccionSurvey.appendChild(divAnswerSection);

  document.querySelectorAll('.groupQuestionSection .row.answerSection .responses .puntuacionSection:not(.image)').forEach(section => {

    section.querySelectorAll('span').forEach(span => {

      span.addEventListener('click', event => {

        section.querySelectorAll('span.selected').forEach(singleSpan => {
          singleSpan.classList.toggle('selected');
        });

        span.classList.toggle('selected');
      });
    });
  });

  document.querySelectorAll('.groupQuestionSection .row.answerSection .responses .puntuacionSection.image').forEach(section => {

    section.querySelectorAll('span').forEach(span => {

      span.addEventListener('click', event => {

        // section.querySelectorAll('span.selected').forEach(singleSpan => {
        //   singleSpan.classList.toggle('selected');
        // });

        span.classList.toggle('selected');
      });
    });
  });

  let modifyForPDF = () => {

    // Header Module
    document.querySelector('.firstSeccionTitle .client').style = "display: flex; flex-direction: column; gap: 0.5rem; text-align: left;";
    document.querySelector('.firstSeccionTitle .project').style = "display: flex; flex-direction: column; gap: 0.5rem; text-align: left;";
    document.querySelector('.firstSeccionTitle .footer').style = "display: flex; flex-direction: column; gap: 0.5rem; text-align: left;";
    document.querySelectorAll('.firstSeccionTitle p').forEach(elem => { elem.style = "margin: 0;"; });
    document.querySelectorAll('.firstSeccionTitle span').forEach(elem => { elem.style = "font-size: 10px !important;"; });
    document.querySelectorAll('.firstSeccionTitle strong').forEach(elem => { elem.style = "font-size: 12px !important;"; });

    // Modulo de preguntas pendientes no se puede ordenar
    document.querySelectorAll('.groupQuestionSection .questionSection').forEach(elem => { elem.style = "font-size: 12px; font-weight: 600; text-align: left;"; });
    document.querySelectorAll('.groupQuestionSection .questionSection .col-md-1').forEach(elem => { elem.style = "display: none;"; });

    document.querySelectorAll('.groupQuestionSection hr').forEach(elem => { elem.style = "display: none"; });

    document.querySelectorAll('.groupQuestionSection .answerSection').forEach(elem => { elem.style = "margin-top: -0.5rem"; });
    document.querySelectorAll('.groupQuestionSection .answerSection .responses ol').forEach(elem => { elem.style = "margin: 0;"; });
    document.querySelectorAll('.groupQuestionSection .answerSection .responses ol li').forEach(elem => { elem.style = "text-align: left; font-size: 12px;"; });

    document.querySelectorAll('.groupQuestionSection .answerSection .responses .puntuacionSection').forEach(elem => {
      elem.style = "padding: 0.5rem 0 0.5rem 1rem;";

      let spanToParagraph = "<div class='multiple-section' style='margin-top: -0.5rem'><ol type='A'>";
      let divMultipleSpan = elem.querySelectorAll('.multiple-section span:not(.dataTextarea)');

      divMultipleSpan.forEach(span => {

        if (span.classList.value == 'selected')
          spanToParagraph += `<li><p style="margin-bottom: -0.15rem; border: 1px solid #000; border-radius: 0.5rem; padding: 0.2rem 0.7rem; font-size: 11px;">${span.innerText}</p></li>`;
        else
          spanToParagraph += `<li><p style="margin-bottom: 0.15rem; font-size: 11px;">${span.innerText}</p></li>`;

        span.remove()
      });
      spanToParagraph += "</ol></div>";

      if (divMultipleSpan[0] != undefined)
        elem.innerHTML = spanToParagraph;
    });

    document.querySelectorAll('.groupQuestionSection .answerSection .responses .puntuacionSection span').forEach(elem => { elem.style = "padding: 0.5rem 1rem;"; });
    document.querySelectorAll('.groupQuestionSection .answerSection .responses .puntuacionSection .selected').forEach(elem => { elem.style = "border: 1px solid #000; border-radius: 0.5rem; padding: 0.2rem 0.7rem;"; });
    document.querySelectorAll('.groupQuestionSection .answerSection .responses .puntuacionSection span.dataTextarea').forEach(elem => { elem.style = "border: 0;"; });

    document.querySelector('.groupQuestionSection .questionSection.botonera').style = "display: none;";
    document.querySelector('.groupQuestionSection .answerSection.botonera').style = "display: none;";
  };

  document.querySelector('.buttonSendSurvey').addEventListener('click', async () => {

    document.querySelector('.col-md-6.main').classList.toggle('hiddenSurvey');

    document.querySelectorAll('textarea').forEach(textarea => {

      let response = textarea.value;

      textarea.insertAdjacentHTML("afterend", `<span class="dataTextarea selected" style='width: 100%'">${response}</span>`);
      textarea.remove();
    });

    modifyForPDF();

    setTimeout(async () => {
      // let keySurvey = document.querySelector('#keySurveyClient').value;
      let keySurvey = keyClient;
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

      // document.querySelector('.loaderPage').style.display = 'block';
      document.querySelector('#keyClientSurvey .modal-body .messageKey').remove();

      let messageNoSurvey = document.createElement('p');
      messageNoSurvey.innerText = "SINCI® Agradece su tiempo para la realización de la encuesta, en breve recibirá una copia de esta en su correo electrónico, quedamos a su disposición para cualquier consulta o duda... ";
      messageNoSurvey.style.fontSize = "15px";
      messageNoSurvey.style.fontWeight = "500";
      let spanSecond = document.createElement('span');
      spanSecond.classList.add("seconds");
      spanSecond.innerText = "30";
      messageNoSurvey.appendChild(spanSecond)

      document.querySelector('#keyClientSurvey .modal-body').appendChild(messageNoSurvey);

      let btnsoporte = document.createElement('button');
      btnsoporte.className = "btn btn-primary buttonSendSurvey";
      btnsoporte.innerText = "Contactar con soporte";
      btnsoporte.addEventListener('click', () => {
        window.open("https://sinci.com/contacto", "_self");
      });

      document.querySelector('#keyClientSurvey .modal-footer #sendKeySurvey').remove();
      document.querySelector('#keyClientSurvey .modal-footer').appendChild(btnsoporte);
  
      setTimeout(() => {

        // document.querySelector('.loaderPage').style.display = 'none';
        document.querySelector('#keyClientSurvey').classList.toggle('show');

        let seconds = 30;
        setInterval(() => {
          if (seconds > 0)
            document.querySelector('span.seconds').innerText = (seconds -= 1);
        }, 1000);

        setTimeout(() => {
          window.location.reload();
        }, 31000);
      }, 700);

    }, 500);
  });

  setTimeout(() => {
    document.querySelector('.loaderPage').style.display = 'none';
    document.querySelector('.row.main-row').classList.toggle('hide');
    document.querySelector('.col-md-6.main').classList.toggle('hiddenSurvey');

    setTimeout(() => {
      document.querySelector('.col-md-6.main').classList.toggle('openedSurvey');
    }, 200);
  }, 1000);
};
