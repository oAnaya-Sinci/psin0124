DELIMITER //

CREATE PROCEDURE getIdSurveyClient(IN key_id VARCHAR(50))
BEGIN
	SELECT 
		CE.id_encuesta, CE.codigo_proyecto_cliente, CE.nombre_cliente, CE.descripcion_proyecto_cliente 
	FROM clientes_encuestas CE 
    
    WHERE estatus_encuesta = 1 
    AND CE.llave_encuesta = key_id;
END //

DELIMITER ;