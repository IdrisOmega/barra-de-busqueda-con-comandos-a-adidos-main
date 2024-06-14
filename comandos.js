let clientes = [
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio  de biblioteca",
    "descripcion": `<a href="https://github.com/IdrisOmega/ejerciciobiblioteca">biblioteca</a>`,
    "id": 1
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio tres en raya",
    "descripcion": `<a href="https://github.com/IdrisOmega/tres-en-raya">tre en raya</a>`,
    "id": 2
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio de biblioteca",
    "descripcion": `<a href="https://github.com/IdrisOmega/biblioteca1">biblioteca 1</a>`,
    "id": 3
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio git",
    "descripcion": `<a href="https://github.com/IdrisOmega/ejercicio-git">git</a>`,
    "id": 4
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio cafetera",
    "descripcion": `<a href="https://github.com/IdrisOmega/cafetera">cafetera</a>`,
    "id": 5
  },
  {
    "imagen": "descarga.png",
    "nombre": "otra biblioteca",
    "descripcion": `<a href="https://github.com/IdrisOmega/ejerciciobiblioteca">biblioteca1</a>`,
    "id": 6
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio cartas",
    "descripcion": `<a href="https://github.com/IdrisOmega/cartas-html">cartas</a>`,
    "id": 7
  },
  {
    "imagen": "descarga.png",
    "nombre": "ejercicio barra de busqueda",
    "descripcion": `<a href="https://github.com/IdrisOmega/barra-de-busqueda-con-comandos-a-adidos">barra busqueda</a>`,
    "id": 8
  }
];
$(function () {
  for (let cliente of clientes) {
    $("#cartas").append(
      `<div class="carta" data-id="${cliente.id}">
        <div class="imagen">
          <img src="${cliente.imagen}" alt="${cliente.nombre}">
        </div>
        <div class="nombre">${cliente.nombre}</div>
        <div class="descripcion">${cliente.descripcion}</div>
        <div class="eliminar"><button>🗑</button></div>
      </div>`
    );
  }

  $("#busqueda button").click(function () {
    let elemento = $("#busqueda input").val().toLowerCase();

    $(".carta").each(function () {
      let nombre = $(this).find(".nombre").text().toLowerCase();
      if (nombre.includes(elemento)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  $("#cartas").on("click", ".eliminar button", function () {
    let id = $(this).closest(".carta").data("id");
    clientes = clientes.filter(cliente => cliente.id !== id);
    $(this).closest(".carta").remove();
  });

  $("#añadir").click(function () {
    $("#modal").show();
  });

  $("#crear").click(function () {
    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    let imagen = $("#imagen").val();

    if (nombre && descripcion && imagen) {
      let nuevoCliente = {
        imagen: imagen,
        nombre: nombre,
        descripcion: descripcion,
        id: clientes.length ? clientes[clientes.length - 1].id + 1 : 1
      };

      clientes.push(nuevoCliente);

      $("#cartas").append(
        `<div class="carta" data-id="${nuevoCliente.id}">
          <div class="imagen">
            <img src="${nuevoCliente.imagen}" alt="${nuevoCliente.nombre}">
          </div>
          <div class="nombre">${nuevoCliente.nombre}</div>
          <div class="descripcion">${nuevoCliente.descripcion}</div>
          <div class="eliminar"><button>🗑</button></div>
        </div>`
      );

      $("#modal").hide();
      $("#nombre").val("");
      $("#descripcion").val("");
      $("#imagen").val("");
    }
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest("#modalpadre, #añadir").length) {
      $("#modal").hide();
    }
  });
});