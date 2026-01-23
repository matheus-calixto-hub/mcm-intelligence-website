.PHONY: help dev build start stop clean logs

help: ## Mostra esta mensagem de ajuda
	@echo "Comandos disponíveis:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

dev: ## Inicia o ambiente de desenvolvimento
	docker-compose up --build

dev-detached: ## Inicia o ambiente de desenvolvimento em background
	docker-compose up --build -d

build: ## Constrói a imagem Docker de produção
	docker-compose -f docker-compose.prod.yml build

start: ## Inicia o ambiente de produção
	docker-compose -f docker-compose.prod.yml up -d

stop: ## Para os containers
	docker-compose down
	docker-compose -f docker-compose.prod.yml down

clean: ## Remove containers, volumes e imagens
	docker-compose down -v --rmi all
	docker-compose -f docker-compose.prod.yml down -v --rmi all

logs: ## Mostra os logs do container
	docker-compose logs -f

restart: ## Reinicia os containers
	docker-compose restart
