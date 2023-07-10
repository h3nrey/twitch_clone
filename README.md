<img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
<h1>Twitch Clone</h1>

<ul>
    <li>
        <a href="#technologies">Tecnologias</a>
    </li>
    <li>
        <a href="#how_to_run">Como executar</a>
    </li>
     <li>
        <a href="#screenshots">Telas</a>
    </li>
    <li>
        <a href="#project_structure">Organização do Projeto</a>
    </li>
    
</ul>

<div>
<h2 id="technologies">Tecnologias</h2>
<ul>
    <li> <a href="https://nextjs.org">NextJS</a> - Framework da aplicação </li> 
    <li> <a 
            href="https://typescriptlang.org/docs/">
            Typescript
            </a> - Adiciona uma tipagem ao js puro</li>
    <li> <a 
        href="https://tailwindcss.com">
        TailwindCSS
        </a> - Estilização </li>
    <li> <a 
        href="https://phosphoricons.com">
        Phosphor
        </a> - Biblioteca de icones</li>
    <li> <a 
        href="https://phosphoricons.com">LocalStorage</a> - Persistência de dados</li>
</ul>
</div>

<div>
    <h2 id="how_to_run">Como executar?</h2>

```bash
Ter NodeJS (versão +18) installado
```
```bash
npm install # Baixa todas as depedências do projeto
```
```bash
npm run dev # Roda a aplicação
```

</div>

## Telas
<div style="display: flex; flex-direction: column; gap: 10px;">

<div>
    <h3>HOME</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%;">
        <div style="display: flex; flex-direction: column;">
            <h4>Dark</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div>
        <div style="display: flex; flex-direction: column;">
            <h4>Light</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div >
    </div>
</div>

<div>
    <h3>BROWSE</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%;">
        <div style="display: flex; flex-direction: column;">
            <h4>Dark</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div>
        <div style="display: flex; flex-direction: column;">
            <h4>Light</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div >
    </div>
</div>

<div>
    <h3>WATCH</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; width: 100%;">
        <div style="display: flex; flex-direction: column;">
            <h4>Dark</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div>
        <div style="display: flex; flex-direction: column;">
            <h4>Light</h4>
            <img src="https://cdn.pixabay.com/photo/2023/06/21/14/17/mountain-8079469_1280.jpg">
        </div >
    </div>
</div>



<div>
<h2 id="project_structure">Organização do Projeto</h2>
<h3> Páginas </h3>
<ul>
    <li>
        <h3>Layout</h3>
        <p>-> Sidebar </p>
        <p>-> Header </p>
    </li>
    <li>
        <h3>Home</h3>
        <p>-> Carousel </p>
        <p>-> HomeSection </p>
        <p>-> Live Thumbnail </p>
    </li>
    <li>
        <h3>Watch</h3>
        <p>-> Video Player </p>
        <p>-> Chat </p>
        <p>-> Live Info </p>
        <p>-> Channel About </p>
    </li>
    <li>
        <h3>Browse</h3>
        <p>-> Category Card </p>
        <p>-> Category Nav </p>
        <p>-> Category Search</p
        <p>-> Sort Select</p>
    </li>
    <li>
        <h3>Components Genéricos</h3>
        <p>-> Popover </p>
        <p>-> Tooltip </p>
        <p>-> Button </p>
    </li>
</ul>
<h2>Funções úteis</h2>
<p>São funções genéricas que são usadas por diferentes partes da aplicaçãoe</p>

```js
function handleTime() {
  // converte o tempo em segundos para uma string num formato segundos:minutos:horas
}

function truncateNumber() {
  // pega um inteiro e se ele passar de 1000 divide por 100 e adiciona um k para simplificar o valor
}
```
</div>
