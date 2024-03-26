
	USE messages_sas;
    
    # Categorias
    INSERT INTO categorias_respuestas(nombre_categoria, descripcion_categoria, etiquetas_html) VALUES('escala semantica', 'escala de ejemplo semantica', '<span>Malo</span><span>Regular</span><span>Bueno</span><span>Excelente</span><span>No aplica</span>'); # -Seccion 1-
    INSERT INTO categorias_respuestas(nombre_categoria, descripcion_categoria, etiquetas_html) VALUES('escala puntuacion', 'escala de ejemplo puntuacion', '<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>'); # -Seccion 2-
	INSERT INTO categorias_respuestas(nombre_categoria, descripcion_categoria, etiquetas_html) VALUES('respuesta abierta', 'respuesta de ejemplo abierta', '<textarea name="" id="" rows="3" style="width: 100%;"></textarea>'); # -Seccion 3-

	#-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

	/*
	# Categorias 1
	INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(1, '<span>Malo</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(1, '<span>Regular</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(1, '<span>Bueno</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(1, '<span>Excelente</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(1, '<span>No Aplica</span>');
    
    # Categorias 2
	INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>1</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>2</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>3</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>4</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>5</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>6</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>7</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>8</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>9</span>');
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(2, '<span>10</span>');
    
    # Categorias 3
    INSERT INTO categorias_respuestas_detalle(id_categoria_respuesta, etiqueta) VALUES(3, '<textarea name="" id="" rows="3" style="width: 100%;"></textarea>');
    */
    
    #-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
    
    INSERT INTO encuesta(nombre_encuesta, descripcion) VALUES ('Encuesta de prueba', 'Esta encuesta es para probar la funcionalidad');
    
    #-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
    
    INSERT INTO secciones_encuesta(id_encuesta, nombre_seccion) VALUES(1, 'DEPARTAMENTO DE VENTAS'); # -Seccion 1-
    INSERT INTO secciones_encuesta(id_encuesta, nombre_seccion) VALUES(1, 'DEPARTAMENTO DE INGENIERIA'); # -Seccion 2-
    INSERT INTO secciones_encuesta(id_encuesta, nombre_seccion) VALUES(1, 'DEPARTAMENTO DE SEGURIDAD'); # -Seccion 3-
    INSERT INTO secciones_encuesta(id_encuesta, nombre_seccion) VALUES(1, 'IMAGEN'); # -Seccion 4-
    INSERT INTO secciones_encuesta(id_encuesta, nombre_seccion) VALUES(1, 'SUGERENCIAS'); # -Seccion 5-
    
    #-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
    
    # -Seccion 1-
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(1, '¿Como considera la atención por nuestro personal?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(1, '¿Como calificarías el tiempo de respuesta cuando nos solicito la cotización del proyecto?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(1, '¿Como calificarías la solución propuesta por el personal de ventas?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(1, '¿Que fue su experiencia al momento de contactar al vendedor o la empresa?');
    
    # -Seccion 2-
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(2, '¿Como considera la calidad de nuestro trabajo en la ejecución del proyecto?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(2, '¿Como calificaría el tiempo de respuesta cuando nos solicito la cotización del proyecto?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(2, 'Según su opinión, ¿Se cumplieron los requerimientos del proyecto?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(2, '¿Como calificaría el conocimiento técnico de nuestro personal?');
    
    # -Seccion 3-
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(3, '¿Como considera nuestro desempeño en materia de seguridad industrial?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(3, '¿Como calificaría la supervisión de seguridad industrial en sitio?');
    
    # -Seccion 4-
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(4, '¿Que tan probable es que recomiende a SINCI?');
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(4, '¿Que tan probable es que nos vuelva a contratar?');
    
    # -Seccion 5-
    INSERT INTO secciones_encuesta_preguntas(id_seccion_encuesta, pregunta) VALUES(5, '¿Desea agregar alguna sugerencia, mejora o no conformidad?');
    
    #-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
	
    #Repuestas pregunta 1
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(1, 1);
    #Repuestas pregunta 2
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(2, 1);
    #Repuestas pregunta 3
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(3, 1);
    #Repuestas pregunta 4
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(4, 1);
    #Repuestas pregunta 5
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(5, 2);
    #Repuestas pregunta 6
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(6, 2);
    #Repuestas pregunta 7
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(7, 2);
    #Repuestas pregunta 8
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(8, 2);
    #Repuestas pregunta 9
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(9, 1);
    #Repuestas pregunta 10
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(10, 1);
    #Repuestas pregunta 11
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(11, 1);
    #Repuestas pregunta 12
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(12, 1);
    #Repuestas pregunta 13
    INSERT INTO secciones_encuesta_pregunta_respuesta(id_seccion_encuesta_pregunta, id_categoria_respuesta) VALUES(13, 3);
    
    #-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
    
	INSERT INTO clientes_encuestas(id_encuesta, nombre_cliente, codigo_proyecto_cliente, orden_compra_cliente, descripcion_proyecto_cliente, correo_cliente, correo_copia) VALUES('', 'Cliente de prueba S.A. de C.V.', 'TEST 0124-1', 'OC010010', 'Este proyecto es solo de prueba para revisar como funciona la encuesta', 'omaranaya616@gmail.com', 'oanaya@sinci.com');