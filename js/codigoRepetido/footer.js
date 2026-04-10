class footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =`
                

        <!-- boostrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>



          <!-- Footer -->
          <footer class="espa">
          <div class="bg-dark text-white pt-4 pb-2 mt-auto">
            <div class="container">
              <div class="row">

                <!-- Columna 1 -->
                <div class="col-md-4 mb-3">
                  <h5>Mi Sitio</h5>
                  <p>Descripción breve de tu página o empresa.</p>
                </div>

                <!-- Columna 2 -->
                <div class="col-md-4 mb-3">
                  <h5>Enlaces</h5>
                  <ul class="list-unstyled">
                    <li><a href="#" class="text-white text-decoration-none">Inicio</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Servicios</a></li>
                    <li><a href="#" class="text-white text-decoration-none">Contacto</a></li>
                  </ul>
                </div>

                <!-- Columna 3 -->
                <div class="col-md-4 mb-3">
                  <h5>Contacto</h5>
                  <p>Email: ejemplo@email.com</p>
                  <p>Tel: +57 300 000 0000</p>
                </div>

              </div>

              <hr class="border-light">

              <!-- Copyright -->
              <div class="text-center">
                <p class="mb-0">&copy; 2026 Mi Sitio Web - Todos los derechos reservados</p>
              </div>
            </div>
          </div>
          </footer>

        `;
    }
}

window.customElements.define("footer-footer", footer);