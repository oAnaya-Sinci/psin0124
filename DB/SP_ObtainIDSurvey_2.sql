CREATE DEFINER=`root`@`localhost` PROCEDURE `getIdSurveyClient`(IN key_id VARCHAR(50))
BEGIN
	SELECT 
		CE.id_encuesta, CE.codigo_proyecto_cliente, CE.nombre_cliente, CE.descripcion_proyecto_cliente 
	FROM clientes_encuestas CE 
    
    WHERE CE.llave_encuesta = key_id
    AND CE.estatus_encuesta = 1;
END