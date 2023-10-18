dev:
	@npm run dev

docker:
	@docker compose -f dev.docker-compose.yml up -d 

format:
	@npm run format

install:
	@npm install

