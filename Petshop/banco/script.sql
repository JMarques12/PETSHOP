-- DDL - Estrutura
drop database if exists petshop;
create database petshop;
use petshop;
create table Pets(
    id integer primary key auto_increment,
    nome varchar(50) not null,
    raca varchar(20) not null,
    nascimento date not null
);
describe Pets;

-- DML - Popular com dados de teste
insert into Pets(nome,raca, nascimento)
values
("Thor","Rotweiler","2006-01-01"),
("Lara","Pastor alemão","2020-02-25"),
("Nina","Dobermann","2021-03-18"),
("Pum","Beauceron","2015-04-13"),
("Roberto","Golden","2019-05-15");

select * from Pets;