class header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
                
                
        <header class="header">
          <h1>nombre de la empresa o proyecto</h1>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="inicioDeSesion.html">Inicio de sesión</a></li>
            <li><a href="registro.html">Registro de ejemplos</a></li>
          </ul>
        </header>

        `;
    }
}

window.customElements.define("headers-nav", header);