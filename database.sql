CREATE TABLE company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(15),
	country VARCHAR(15)
);
INSERT INTO "company" ("name","country")
VALUES ('Ford','USA'),('Toyota','Japan'),('Aston Martin','UK'),('VolksWagen','Germany');