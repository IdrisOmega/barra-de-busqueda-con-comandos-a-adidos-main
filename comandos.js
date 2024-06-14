let clientes = [
  {
    "imagen": "Eder.jpg",
    "nombre": "Eder",
    "descripcion": "Famoso racista veterano con Sida",
    "id": 1
  },
  {
    "imagen": "descarga.jpg",
    "nombre": "Javier",
    "descripcion": "Presidente de Argentina PAPA",
    "id": 2
  },
  {
    "imagen": "Adriano.jpg",
    "nombre": "Adriano",
    "descripcion": "Con la inteligencia de L y la masa de un palo",
    "id": 3
  },
  {
    "imagen": "Rober.jpg",
    "nombre": "Rober",
    "descripcion": "Gran profe que me dara un 10 por crak",
    "id": 4
  },
  {
    "imagen": "Idris.jpg",
    "nombre": "Idris",
    "descripcion": "Es un papucho",
    "id": 5
  },
  {
    "imagen": "Santiago.jpg",
    "nombre": "Santiago",
    "descripcion": "Don John Santiago Wii",
    "id": 6
  },
  {
    "imagen": "Ivan.jpg",
    "nombre": "Ivan",
    "descripcion": "Ex convicto asaltacunas",
    "id": 7
  },
  {
    "imagen": "Birham.jpg",
    "nombre": "Birham",
    "descripcion": "Sucesor del salvador de la humanidad",
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