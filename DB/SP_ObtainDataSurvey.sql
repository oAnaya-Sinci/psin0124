USE messages_sas;

DELIMITER //

CREATE PROCEDURE getSurveyClient(IN idSurvey VARCHAR(50))
BEGIN
	SELECT 
		E.nombre_encuesta, SE.nombre_seccion,
        SEP.pregunta, CR.etiquetas_html
	FROM encuesta E
    JOIN secciones_encuesta SE ON SE.id_encuesta = E.id
    JOIN secciones_encuesta_preguntas SEP ON SEP.id_seccion_encuesta = SE.id
    JOIN secciones_encuesta_pregunta_respuesta SEPR ON SEPR.id_seccion_encuesta_pregunta = SEP.id
    JOIN categorias_respuestas CR ON CR.id = SEPR.id_categoria_respuesta
    
    WHERE E.id_encuesta = idSurvey
    
    ORDER BY SE.id, SEP.id;
END //

DELIMITER ;