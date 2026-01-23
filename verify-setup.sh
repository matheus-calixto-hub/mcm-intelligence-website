#!/bin/bash

echo "🔍 Verificando estrutura do projeto Next.js..."
echo ""

# Verificar arquivos essenciais
echo "📁 Verificando arquivos de configuração..."
files=(
  "package.json"
  "tsconfig.json"
  "next.config.mjs"
  ".eslintrc.json"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file - FALTANDO"
  fi
done

echo ""
echo "📂 Verificando estrutura de pastas..."
folders=(
  "src/app"
  "src/components"
  "src/lib"
)

for folder in "${folders[@]}"; do
  if [ -d "$folder" ]; then
    echo "✅ $folder/"
  else
    echo "❌ $folder/ - FALTANDO"
  fi
done

echo ""
echo "📄 Verificando arquivos principais..."
main_files=(
  "src/app/layout.tsx"
  "src/app/page.tsx"
  "src/app/globals.css"
  "src/components/Header.tsx"
  "src/components/Footer.tsx"
  "src/lib/odoo.ts"
)

for file in "${main_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file - FALTANDO"
  fi
done

echo ""
echo "📦 Verificando Node.js..."
if command -v node &> /dev/null; then
  echo "✅ Node.js $(node --version)"
  echo "✅ npm $(npm --version)"
  echo ""
  echo "🚀 Para iniciar o projeto, execute:"
  echo "   npm install"
  echo "   npm run dev"
else
  echo "⚠️  Node.js não encontrado no PATH"
  echo "   Instale o Node.js para executar o projeto"
fi

echo ""
echo "✨ Verificação concluída!"
