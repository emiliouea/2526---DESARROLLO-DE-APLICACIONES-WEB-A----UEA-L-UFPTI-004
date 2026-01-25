# Semana 7: Lista Dinámica de Productos

## Descripción del Proyecto

Este proyecto implementa una lista dinámica de productos utilizando plantillas básicas en JavaScript. Los usuarios pueden ver productos existentes y agregar nuevos productos a la lista de forma interactiva.

## Características Implementadas

### ✅ Requisitos Cumplidos

- **Lista dinámica**: Los productos se renderizan automáticamente desde un array de JavaScript
- **Plantillas HTML**: Uso de template strings para generar el HTML de cada producto
- **Información completa**: Cada producto incluye nombre, precio y descripción
- **Funcionalidad de agregar**: Botón para agregar nuevos productos
- **Carga automática**: Los productos se muestran al cargar la página
- **Elemento `<ul>`**: Lista no ordenada para mostrar los productos

### 🚀 Características Adicionales

- **Eliminación de productos**: Botón para remover productos de la lista
- **Validación de formulario**: Verificación de campos obligatorios
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla
- **Interfaz moderna**: Diseño atractivo con gradientes y animaciones
- **Interactividad mejorada**: Soporte para tecla Enter en el formulario
- **IDs únicos**: Cada producto tiene un identificador único
- **Confirmación de eliminación**: Diálogo de confirmación antes de eliminar

## Estructura del Proyecto

```
semana7-lista-productos/
├── index.html          # Estructura HTML principal
├── script.js           # Lógica JavaScript y plantillas
├── styles.css          # Estilos CSS modernos
└── README.md           # Documentación del proyecto
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS, gradientes y animaciones
- **JavaScript ES6+**: Template strings, arrow functions, métodos de array

## Funcionalidades JavaScript

### Plantillas Dinámicas

```javascript
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
```

### Renderizado Dinámico

- Los productos se generan automáticamente al cargar la página
- La lista se actualiza en tiempo real al agregar o eliminar productos
- Uso de `map()` y `join()` para generar HTML eficientemente

### Gestión de Estado

- Array de productos como fuente de datos
- Funciones para agregar y eliminar productos
- Validación de entrada de datos

## Productos de Ejemplo

El proyecto incluye 5 productos iniciales:

1. Laptop Gaming - $1,299.99
2. Smartphone Android - $699.50
3. Auriculares Bluetooth - $149.99
4. Tablet 10 pulgadas - $329.00
5. Teclado Mecánico - $89.99

## Instrucciones de Uso

1. **Ver productos**: Los productos se cargan automáticamente al abrir la página
2. **Agregar producto**:
   - Completa los campos: nombre, precio y descripción
   - Haz clic en "Agregar Producto" o presiona Enter
3. **Eliminar producto**: Haz clic en el botón "Eliminar" de cualquier producto

## Desarrollado por

**Emilio Senguana**  
Semana 7 - Desarrollo de Aplicaciones Web  
UEA-L-UFPTI-004

## Entrega

- 📦 **Repositorio GitHub**: [URL del repositorio]
- 🌐 **GitHub Pages**: [URL de GitHub Pages]

---

_Proyecto desarrollado como parte del curso de Desarrollo de Aplicaciones Web_
