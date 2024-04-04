function generarLista() {
    
    const url = "/api/series";
    var lista = document.getElementById('lista-series');
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach((serie, index) => {
            const li = document.createElement('li');
            li.classList.add('li-items');

            const divAccordion = document.createElement('div');
            divAccordion.classList.add('accordion-item');

            const h2 = document.createElement('h2');
            h2.classList.add('accordion-header');

            const button = document.createElement('button');
            button.classList.add('accordion-button', 'collapsed');
            button.setAttribute('type', 'button');
            button.setAttribute('data-bs-toggle', 'collapse');
            button.setAttribute('data-bs-target', `#collapse${index}`);
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-controls', `collapse${index}`);
            button.textContent = serie.nombre;

            const divCollapse = document.createElement('div');
            divCollapse.classList.add('accordion-collapse', 'collapse');
            divCollapse.setAttribute('id', `collapse${index}`);
            divCollapse.setAttribute('data-bs-parent', '#lista-series');

            const divBody = document.createElement('div');
            divBody.classList.add('accordion-body');

            const spanNombre = document.createElement('span');
            spanNombre.classList.add('nombre');
            spanNombre.textContent = serie.nombre;

            const br = document.createElement('br');

            const divContentImage = document.createElement('div');
            divContentImage.classList.add('content_image');

            const spanSinopsis = document.createElement('span');
            spanSinopsis.textContent = serie.sinopsis;

            const spanImagen = document.createElement('span');
            const img = document.createElement('img');
            img.classList.add('Imagen-Cards');
            img.setAttribute('src', "../" + serie.imagen);
            img.setAttribute('alt', serie.nombre);
            spanImagen.appendChild(img);

            // Construir la estructura del DOM
            divContentImage.appendChild(spanSinopsis);
            divContentImage.appendChild(br);
            divContentImage.appendChild(spanImagen);

            divBody.appendChild(spanNombre);
            divBody.appendChild(br.cloneNode());
            divBody.appendChild(divContentImage);

            divCollapse.appendChild(divBody);

            h2.appendChild(button);

            divAccordion.appendChild(h2);
            divAccordion.appendChild(divCollapse);

            li.appendChild(divAccordion);

            // Agregar el elemento al DOM
            lista.appendChild(li);
        });
    });
}

//Hecho para que se ejecute automaticamente este el DOM
document.addEventListener('DOMContentLoaded', generarLista);