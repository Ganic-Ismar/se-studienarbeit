create table se_studienarbeit (
id bigint not null AUTO_INCREMENT,
name varchar(255) not null,
email varchar(100) not null,
password varchar(30) not null,
plz varchar(6),
strasse varchar(100),
ort varchar(100),
primary key (id)
)