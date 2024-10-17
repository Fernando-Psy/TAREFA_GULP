# Configuração do Gulp
1.  Iniciar Projeto Node.js
- Comando: npm init -y
2. Instalar Dependências
 - Comando: npm install gulp gulp-sass sass gulp-imagemin gulp-terser --save-dev
3. Criar gulpfile.mjs
- Importar módulos usando import.
- Configurar tarefas para compilar SASS, comprimir imagens e JavaScript.
- Exportar tarefas usando export.
4. Atualizar package.json
- Adicionar "type": "module" no nível superior.

# Estrutura das pastas

/projeto
  ├── /src
  │   ├── /scss
  │   ├── /js
  │   └── /images
  ├── /dist
  ├── package.json
  └── gulpfile.mjs

# HTML e CSS
- HTML: Estrutura básica
- CSS: Estilo para centralizar a imagem

# JavaScript para interetividade
- Função changeText(): Altera o texto do card quando clica no botão
- Exemplo: <button onclick="changeText()">Mudar Texto</button>
