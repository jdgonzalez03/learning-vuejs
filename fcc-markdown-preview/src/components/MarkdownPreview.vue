<script setup>
import { ref } from 'vue';
import LayoutMarkdown from './LayoutMarkdown.vue';
import MarkdownRender from './MarkdownRender.vue';

//default text
const textToRender = ref(`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![Vue Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png)

- And of course there are lists.
- Some are bulleted.
    - With different indentation levels.
      - That look like this.
`);

</script>

<template>
  <LayoutMarkdown>
    <template #title>
      Markdown Preview
    </template>

    <template #editor>
      <textarea id="editor" v-model="textToRender" />
    </template>

    <template #preview>
      <MarkdownRender id="preview" :text="textToRender" />
    </template>

    <template #author>
      By <span>jdgonzalez03</span>
    </template>
  </LayoutMarkdown>
</template>

<style>
body {
  font-family: 'Arial', sans-serif;
  background-color: #2e2e2e; /* Fondo oscuro */
  color: #eaeaea; /* Texto claro */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Contenedor principal */
.container {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  background-color: #333; /* Fondo gris oscuro */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Estilo del título */
.container h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 10px;
  color: #42b983; /* Verde Vue.js */
}

/* Editor de markdown */
#editor {
  width: 100%;
  padding: 15px;
  font-size: 1rem;
  border: 1px solid #444; /* Borde gris oscuro */
  border-radius: 8px;
  background-color: #222; /* Fondo gris muy oscuro */
  color: #eaeaea; /* Texto claro */
  resize: none;
  outline: none;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s ease;
}

#editor:focus {
  border-color: #42b983; /* Verde Vue.js */
}

/* Previsualización del markdown */
#preview {
  padding: 20px;
  background-color: #1e1e1e; /* Fondo gris oscuro */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
}

/* Estilos específicos de markdown */
#preview h1, #preview h2, #preview h3 {
  color: #42b983; /* Verde Vue.js */
  margin-top: 20px;
}

#preview p {
  line-height: 1.6;
  margin: 10px 0;
}

/* Estilo para código en línea */
#preview code {
  background-color: #2d2d2d; /* Fondo gris oscuro */
  color: #eaeaea; /* Texto claro */
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.95rem;
  font-family: 'Courier New', Courier, monospace; /* Fuente monoespaciada */
}

/* Estilo para bloques de código */
#preview pre {
  background-color: #1e1e1e; /* Fondo gris oscuro */
  color: #eaeaea; /* Texto claro */
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace; /* Fuente monoespaciada */
}

#preview img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px 0;
}

#preview blockquote {
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #333; /* Fondo gris oscuro */
  border-left: 5px solid #42b983; /* Verde Vue.js */
  color: #eaeaea; /* Texto claro */
  font-style: italic;
}

/* Estilo de listas */
#preview ul {
  margin-left: 20px;
}

#preview li {
  margin-bottom: 10px;
}

/* Autor */
.container span {
  color: #42b983; /* Verde Vue.js */
  font-weight: bold;
}

/* Diseño responsivo */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  #preview {
    max-height: 300px;
  }
}
</style>


