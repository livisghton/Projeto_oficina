
CREATE TABLE client_tb(
    cpf VARCHAR(11) PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(40) NOT NULL,
    addressclient VARCHAR(60) NOT NULL,
    numberaddress INTEGER NOT NULL,
    cep VARCHAR(8) NOT NULL,
    state_client VARCHAR(20) NOT NULL,
    city VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    phone1 VARCHAR(11) NOT NULL,
    phone2 VARCHAR(11)
);

CREATE TABLE equipment_tb(
    serialnumber VARCHAR(15) PRIMARY KEY,
    cpf_client_fk VARCHAR(11) NOT NULL,
    typeequipment VARCHAR(15) NOT NULL,
    mark VARCHAR(20) NOT NULL,
    model VARCHAR(20) NOT NULL,
    defectclient VARCHAR(100),
    technicaldefect VARCHAR(100),
    note VARCHAR(100),
    FOREIGN KEY (cpf_client_fk) REFERENCES client_tb(cpf)
);


CREATE TABLE service_tb(
    operationnumber INTEGER PRIMARY KEY,
    serialnumber_equipment_fk VARCHAR(15) NOT NULL,
    priority  boolean,
    inputdate date NOT NULL,
    outputdate date,
    FOREIGN KEY (serialnumber_equipment_fk) REFERENCES equipment_tb(serialnumber)
);



--------------------INSERT client------------------------------
INSERT INTO client_tb VALUES ('00000000000', 'ana', 'da silva', 'rua das maravilhas', 123, '11111111', 'pernambuco', 'Recife', 'ana@gmail.com', '81992499922', '81999923223');
INSERT INTO client_tb VALUES ('00000000001', 'bruno', 'cavalcanti', 'Av. coronel', 13, '22222222', 'pernambuco', 'timbaúba', 'bruno@gmail.com', '81999999999');
INSERT INTO client_tb VALUES ('00000000002', 'carla', 'da silva araujo', 'rua da cruz', 545, '12345666', 'pernambuco', 'Recife', 'ana@gmail.com', '81986969949');
INSERT INTO client_tb VALUES ('00000000003', 'danilo', 'da alves', 'rua sem nome', 71, '88744444', 'pernambuco', 'timbaúba', 'bruno@gmail.com', '81899592192', '81999923223');


-------------------INSERT equipment----------------------------
INSERT INTO equipment_tb VALUES ('7899466434862', '00000000000', 'tv', 'PHILCO', '99403024', 'não liga', ' ', 'não deixou os cabos');
INSERT INTO equipment_tb VALUES ('1222464345425', '00000000000', 'tv', 'LG', '12035624', 'não liga', ' ', 'deixou os cabos');
INSERT INTO equipment_tb VALUES ('7299666839802', '00000000000', 'tv', 'SONY', '22608024', 'tela quebrada');
INSERT INTO equipment_tb VALUES ('2634566378827', '00000000000', 'tv', 'SONY', '41205079', 'liga e depois se desliga', ' ', 'não veio com o controle');
INSERT INTO equipment_tb VALUES ('4799466454842', '00000000001', 'tv', 'PHILCO', '99403024', 'não liga', ' ', 'não deixou os cabos');
INSERT INTO equipment_tb VALUES ('3212266355529', '00000000001', 'tv', 'LG', '12035624', 'não liga', ' ', 'deixou os cabos');
INSERT INTO equipment_tb VALUES ('1192636834800', '00000000001', 'tv', 'SONY', '22608024', 'tela quebrada');
INSERT INTO equipment_tb VALUES ('9634556668221', '00000000001', 'tv', 'SONY', '41205079', 'liga e depois se desliga', ' ', 'não veio com o controle');
INSERT INTO equipment_tb VALUES ('1719461452844', '00000000002', 'tv', 'PHILCO', '99403024', 'não liga', ' ', 'não deixou os cabos');
INSERT INTO equipment_tb VALUES ('9202066305029', '00000000002', 'tv', 'LG', '12035624', 'não liga', ' ', 'deixou os cabos');
INSERT INTO equipment_tb VALUES ('4644456568621', '00000000003', 'tv', 'SONY', '41205079', 'liga e depois se desliga', ' ', 'não veio com o controle');

-----------------INSERT SERVICES----------------------------------
INSERT INTO service_tb VALUES (11111, '7899466434862', TRUE, '2020-06-01');
INSERT INTO service_tb VALUES (11112, '1222464345425', FALSE, '2020-06-01');
INSERT INTO service_tb VALUES (11113, '7299666839802', TRUE, '2020-06-02');
INSERT INTO service_tb VALUES (11114, '2634566378827', FALSE, '2020-06-02');
INSERT INTO service_tb VALUES (11115, '4799466454842', TRUE, '2020-06-03');
INSERT INTO service_tb VALUES (11116, '3212266355529', FALSE, '2020-06-03');
INSERT INTO service_tb VALUES (11117, '1192636834800', FALSE, '2020-06-04');
INSERT INTO service_tb VALUES (11118, '9634556668221', FALSE, '2020-06-05');
INSERT INTO service_tb VALUES (11119, '1719461452844', TRUE, '2020-06-06');
INSERT INTO service_tb VALUES (11120, '9202066305029', FALSE, '2020-06-06');
INSERT INTO service_tb VALUES (11121, '4644456568621', FALSE, '2020-06-07');
