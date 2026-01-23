# Website da Empresa

Site corporativo desenvolvido com Next.js, preparado para integração futura com Odoo.

## 🚀 Tecnologias

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **CSS Custom Properties** - Design tokens e estilização
- **ESLint** - Linter para qualidade de código

## 🐳 Executando com Docker (Recomendado)

### Usando Makefile (Mais fácil)

```bash
make dev          # Inicia desenvolvimento
make start        # Inicia produção
make stop         # Para os containers
make logs         # Ver logs
make clean        # Remove tudo (containers, volumes, imagens)
make help         # Ver todos os comandos disponíveis
```

### Usando Docker Compose diretamente

#### Desenvolvimento

Para executar em modo desenvolvimento com hot-reload:

```bash
docker-compose up --build
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

Para parar o container:

```bash
docker-compose down
```

#### Produção

Para executar em modo produção:

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

Para parar:

```bash
docker-compose -f docker-compose.prod.yml down
```

## 📦 Instalação Local (sem Docker)

1. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🛠️ Desenvolvimento Local

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Build Local

Para criar uma build de produção:

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
website/
├── src/
│   ├── app/              # App Router do Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   ├── components/       # Componentes React
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── lib/              # Utilitários e helpers
│       └── odoo.ts       # Cliente para integração Odoo
├── public/               # Arquivos estáticos
├── Dockerfile            # Dockerfile para produção
├── Dockerfile.dev        # Dockerfile para desenvolvimento
├── docker-compose.yml    # Docker Compose para desenvolvimento
├── docker-compose.prod.yml # Docker Compose para produção
├── .dockerignore         # Arquivos ignorados no Docker
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## 🔗 Integração com Odoo

O projeto está preparado para integração futura com Odoo. O arquivo `src/lib/odoo.ts` contém a estrutura básica do cliente Odoo que será implementado conforme necessário.

### Variáveis de Ambiente

#### Para Docker

Crie um arquivo `.env` na raiz do projeto (ou defina as variáveis no docker-compose.yml):

```env
# Configurações do Odoo (para integração futura)
ODOO_URL=http://host.docker.internal:8069
ODOO_DATABASE=odoo
ODOO_USERNAME=admin
ODOO_PASSWORD=admin
```

**Nota:** Use `host.docker.internal` para acessar serviços rodando no host (como Odoo) a partir do container Docker.

#### Para desenvolvimento local

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Configurações do Odoo (para integração futura)
ODOO_URL=http://localhost:8069
ODOO_DATABASE=odoo
ODOO_USERNAME=admin
ODOO_PASSWORD=admin

# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Próximos Passos para Integração:

1. Configurar variáveis de ambiente para conexão com Odoo
2. Implementar autenticação Odoo XML-RPC ou REST API
3. Criar endpoints API Routes para comunicação com Odoo
4. Implementar componentes para exibir dados do Odoo

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint

## 🎨 Customização

O projeto usa CSS Custom Properties (Design Tokens) para estilização. Você pode personalizar as cores e temas editando as variáveis CSS em `src/app/globals.css`.

## 📄 Licença

Este projeto é privado e de propriedade da empresa.
