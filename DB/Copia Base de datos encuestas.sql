  
	USE encuestario;

	DROP TABLE IF EXISTS encuesta;
	CREATE TABLE encuesta(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_encuesta VARCHAR(256) NOT NULL DEFAULT (UUID()),
		nombre_encuesta VARCHAR(256) NOT NULL,
        descripcion VARCHAR(522),
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
    
    DROP TABLE IF EXISTS secciones_encuesta;
    CREATE TABLE secciones_encuesta(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_encuesta INT NOT NULL,
        nombre_seccion VARCHAR(256) NOT NULL,
        descripcion VARCHAR(522),
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
    
    DROP TABLE IF EXISTS secciones_encuesta_preguntas;
    CREATE TABLE secciones_encuesta_preguntas(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_seccion_encuesta INT NOT NULL,
        pregunta VARCHAR(256) NOT NULL,
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
        
    DROP TABLE IF EXISTS secciones_encuesta_pregunta_respuesta;
    CREATE TABLE secciones_encuesta_pregunta_respuesta(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_seccion_encuesta_pregunta INT NOT NULL,
        id_categoria_respuesta INT,
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
    
    DROP TABLE IF EXISTS categorias_respuestas;
    CREATE TABLE categorias_respuestas(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        nombre_categoria VARCHAR(100) NOT NULL,
        descripcion_categoria VARCHAR(512),
        #etiqueta VARCHAR(65535) CHARACTER SET utf8 NOT NULL,
        etiquetas_html TEXT CHARACTER SET utf8 NOT NULL,
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
		updated_timestamp DATETIME NOT NULL DEFAULT NOW()
	);
    
    #DROP TABLE IF EXISTS categorias_respuestas_detalle;
    /*CREATE TABLE categorias_respuestas_detalle(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_categoria_respuesta INT NOT NULL,
        etiqueta VARCHAR(256),
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
		updated_timestamp DATETIME NOT NULL DEFAULT NOW()
	);*/
    
    DROP TABLE IF EXISTS clientes_encuestas;
    CREATE TABLE clientes_encuestas(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        llave_encuesta VARCHAR(256) DEFAULT (UUID()),
        id_encuesta VARCHAR(50) NOT NULL,
        #id_encuesta INT NOT NULL,
        id_cliente_sistema_admin INT,
        nombre_cliente VARCHAR(256),
        codigo_proyecto_cliente VARCHAR(50),
        descripcion_proyecto_cliente VARCHAR(512),
        correo_cliente TEXT CHARACTER SET utf8 NOT NULL DEFAULT '',
        correo_sinci TEXT CHARACTER SET utf8 NOT NULL DEFAULT '',
        estatus_encuesta INT DEFAULT 1,
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
    
    DROP TABLE IF EXISTS clientes_encuestas_contestadas;
    CREATE TABLE clientes_encuestas_contestadas(
		id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        id_llave_encuesta VARCHAR(50) NOT NULL,
        datos_cliente_encuesta TEXT CHARACTER SET utf8 NOT NULL,
        respuestas_encuesta TEXT CHARACTER SET utf8 NOT NULL,
        created_timestamp DATETIME NOT NULL DEFAULT NOW(),
        updated_timestamp DATETIME NOT NULL DEFAULT NOW()
    );
    
    