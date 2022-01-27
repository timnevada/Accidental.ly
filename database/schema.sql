use accidentally

create table scores (
  id int not null auto_increment,
  name varchar(20),
  correct int not null,
  incorrect int not null,
  primary key (id)
)