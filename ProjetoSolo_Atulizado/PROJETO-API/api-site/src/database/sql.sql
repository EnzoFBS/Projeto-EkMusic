-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


/* para workbench - local - desenvolvimento */
CREATE DATABASE sense_me;
USE sense_me;

	CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

CREATE TABLE genero(
idGenero int primary key auto_increment,
nomeGenero varchar(45)
)auto_increment=100;

select * from genero;

CREATE TABLE genero_do_usuario(
idGenero_usuario int,
fk_usuario int ,
fk_genero int,
foreign key(fk_usuario) references usuario(id),
foreign key(fk_genero) references genero(idGenero),
primary key(`idGenero_usuario`,`fk_usuario`,`fk_genero`)
);

create table emocoes(
idEmocao int primary key auto_increment,
emocao varchar(6),
check(emocao = 'feliz' or emocao ='triste' or emocao ='normal' or emocao = 'triste')
);

select * from emocoes;

select * from genero_do_usuario;


   INSERT INTO genero (nomeGenero) VALUES ('pao');




