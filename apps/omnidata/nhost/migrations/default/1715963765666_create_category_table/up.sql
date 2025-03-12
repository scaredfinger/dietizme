create table category(
    id varchar(255) primary key,
    parent_id varchar(255) references category(id),
    path ltree
);
