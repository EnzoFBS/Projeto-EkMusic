
CREATE DATABASE sense_me;
USE sense_me;

create table emocoes(
idEmocao int primary key auto_increment,
emocao varchar(10)
);
insert into emocoes(emocao) values ('feliz'),('feliz'),('feliz'),('triste'),('triste'),('normal'),('bravo');

select * from emocoes;



select count(emocao) as 'emoções' from emocoes group by emocao order by emocao desc;
select count(emocao) as emocaofeliz from emocoes where emocao = 'feliz';
select count(emocao) as emocaobravo from emocoes where emocao = 'bravo';
select count(emocao) as emocaotriste from emocoes where emocao = 'triste';
select count(emocao) as emocaonormal from emocoes where emocao = 'normal';

	CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    genero_favorito varchar(50),
    fk_emocao int,
    foreign key (fk_emocao) references emocoes(idEmocao)
);

select 	* from usuario;

insert into usuario values
(2,'Renato','renato@gmail.com','7894','pop',null),
(3,'jorge','jorge@gmail.com','7894','rock',null),
(4,'Carlos','sambario@gmail.com','7894','mpb',null),
(5,'Baiano','baiano@gmail.com','7894','funk',null),
(6,'Rodinei','rodinei@gmail.com','7894','pop',null);





select count(usuario.genero_favorito) as curtidas, genero_favorito as nome  from usuario group by genero_favorito order by curtidas desc;









