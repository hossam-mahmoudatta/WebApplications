create table todo (
	id int identity(1,1),
	task varchar(100)
)

SELECT *
FROM todo;

INSERT INTO todo
VALUES ('Buy Fruits');

INSERT INTO todo
VALUES ('Buy Books');