CREATE DATABASE mcontacts;

create extension IF NOT EXISTS "uuid-ossp";

create table IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
);

create table if not exists contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name varchar NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) references categories(id)
);
