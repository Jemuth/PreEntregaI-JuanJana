# E-commerce: Venta de herramientas

**Proyecto React para Coderhouse**

*Premisa*: Generar un ecommerce relacionado a la venta de herramientas y accesorios relacionados, con sus respectivas
categorías(ej:eléctricas, manuales, equipo de seguridad,etc) acorde a las exigencias del curso React de Coderhouse.

*Workflow general del proyecto*:

* Instalación y creación de proyecto React con integración a GitHub
* Creación de navegación y componentes esenciales(Navbar, CartWidget, etc)
* Mock de productos y sus respectivos detalles para visualizacion en sus respectivos contenedores(ItemListContainer, ItemDetailContainer) y componentes(ItemCount, Item, etc)
* Aplicación de routing por medio de react-router-dom
* Instauración de visualización de carro de compras aplicando CartContext
* Integración con Firebase/Firestore
* Aplicación de css y otros componentes y navegación personalizada

*Usabilidad*

1. *Navegación* : El catálogo despliega todos los productos disponibles, los cuales pueden filtrarse al hacer click en los links correspondientes a cada categoría. También se incorpora filtrado por marca, accesible tanto por la barra de navegacion como el sidebar.

![](https://github.com/Jemuth/PreEntregaI-JuanJana/blob/main/public/ToolAppTest1.gif)

2. *Detalles y orden de compra* : Cada producto del catálogo puede verse a detalle, con sus especificaciones, precio y stock. El producto puede agregarse al carro, lo cual se refleja en el componente CartWidget de la barra de navegacion. Al ver el carro, se vera un detalle de los productos y la posibilidad de hacer una orden de compra por medio de un formulario, el cual al ser enviado generará un nuevo documento en la correspondiente colección de Firebase.

![](https://github.com/Jemuth/PreEntregaI-JuanJana/blob/main/public/ToolAppTest2.gif)

*Para ejecutar el proyecto*

    npm run dev

*Librerías utilizadas*

* Vite
* React Router Dom
* Bootstrap(Estilo general del sitio)
* SweetAlert2(Display de alerta para orden de compra)
* Firebase/Firestore