// Array inicial de productos
let productos = [
    {
        id: 1,
        nombre: "Laptop Gaming",
        precio: 1299.99,
        descripcion: "Laptop de alto rendimiento para gaming con procesador Intel i7 y tarjeta gráfica RTX 4060."
    },
    {
        id: 2,
        nombre: "Smartphone Android",
        precio: 699.50,
        descripcion: "Teléfono inteligente con pantalla AMOLED de 6.5 pulgadas y cámara de 108MP."
    },
    {
        id: 3,
        nombre: "Auriculares Bluetooth",
        precio: 149.99,
        descripcion: "Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería."
    },
    {
        id: 4,
        nombre: "Tablet 10 pulgadas",
        precio: 329.00,
        descripcion: "Tablet con pantalla Full HD, 128GB de almacenamiento y soporte para stylus."
    },
    {
        id: 5,
        nombre: "Teclado Mecánico",
        precio: 89.99,
        descripcion: "Teclado mecánico RGB con switches Cherry MX Blue para gaming y productividad."
    }
];

// Función para crear la plantilla HTML de un producto
function crearPlantillaProducto(producto) {
    return `
        <li class="product-item" data-id="${producto.id}">
            <div class="product-header">
                <h3 class="product-name">${producto.nombre}</h3>
                <span class="product-price">$${producto.precio.toFixed(2)}</span>
            </div>
            <p class="product-description">${producto.descripcion}</p>
            <div class="product-actions">
                <button class="btn-remove" onclick="eliminarProducto(${producto.id})">Eliminar</button>
            </div>
        </li>
    `;
}

// Función para renderizar todos los productos
function renderizarProductos() {
    const listaProductos = document.getElementById('productsList');

    // Limpiar la lista actual
    listaProductos.innerHTML = '';

    // Generar HTML para cada producto usando la plantilla
    const productosHTML = productos.map(producto => crearPlantillaProducto(producto)).join('');

    // Insertar el HTML generado en la lista
    listaProductos.innerHTML = productosHTML;

    console.log(`Se renderizaron ${productos.length} productos`);
}

// Función para agregar un nuevo producto
function agregarProducto() {
    // Obtener valores de los campos de entrada
    const nombre = document.getElementById('productName').value.trim();
    const precio = parseFloat(document.getElementById('productPrice').value);
    const descripcion = document.getElementById('productDescription').value.trim();

    // Validar que todos los campos estén completos
    if (!nombre || !precio || !descripcion) {
        alert('Por favor, completa todos los campos');
        return;
    }

    if (precio <= 0) {
        alert('El precio debe ser mayor a 0');
        return;
    }

    // Crear nuevo producto con ID único
    const nuevoProducto = {
        id: Date.now(), // Usar timestamp como ID único
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    // Agregar el producto al array
    productos.push(nuevoProducto);

    // Volver a renderizar la lista
    renderizarProductos();

    // Limpiar los campos del formulario
    limpiarFormulario();

    console.log('Producto agregado:', nuevoProducto);
}

// Función para eliminar un producto
function eliminarProducto(id) {
    // Confirmar eliminación
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        // Filtrar el array para remover el producto con el ID especificado
        productos = productos.filter(producto => producto.id !== id);

        // Volver a renderizar la lista
        renderizarProductos();

        console.log(`Producto con ID ${id} eliminado`);
    }
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productDescription').value = '';
}

// Función que se ejecuta cuando la página se carga completamente
function inicializar() {
    console.log('Página cargada - Inicializando lista de productos');

    // Renderizar productos iniciales
    renderizarProductos();

    // Configurar event listener para el botón de agregar
    const btnAgregar = document.getElementById('addProductBtn');
    btnAgregar.addEventListener('click', agregarProducto);

    // Permitir agregar producto con Enter en los campos de texto
    const campos = ['productName', 'productPrice', 'productDescription'];
    campos.forEach(campoId => {
        const campo = document.getElementById(campoId);
        campo.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                agregarProducto();
            }
        });
    });

    console.log('Inicialización completada');
}

// Ejecutar inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializar);

// Mensaje de bienvenida en la consola
console.log('Script de Lista Dinámica de Productos cargado');
console.log('Semana 7 - Desarrollo de Aplicaciones Web');
console.log('Estudiante: Emilio Senguana');