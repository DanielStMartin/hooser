drop table if exists houser;

create table houser (
  products_id serial primary key
  , name varchar(25)
  , price integer
  , img text
);
