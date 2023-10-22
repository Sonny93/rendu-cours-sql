dev:
	@npm run dev

docker:
	@docker compose -f dev.docker-compose.yml up -d

format:
	@npm run format

install:
	@npm install

create_db:
	@docker exec -it mariadb_rendu_sql mariadb -u root -pdbrootpassword -e "create database dbproject"

seed-db:
	@node ace db:seed

migration:
	@node ace migration:run
