#Crear este proyecto de angular
ng new AngularBasics

#Crear un modulo
ng g n componentes

#Crear dos componentes
ng g c componentes/topbar
ng g c componentes/cards

#Para añadir este modulo y componentes a app.component.html 
Debemmos ir a componentes.module.ts y añadir a @NgModule lo siguiente:
  exports: [
    TopbarComponent,
    CardsComponent
  ]
Despues debemos ir a app.module.ts y en imports añadir la linea ComponentesModule lo que
importará el múdulo y sus componentes podrán ser utilizados

#Añadir Bootstrap
Añadimos a index.html la siguiente linea:
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
Con esto podremos utilizar bootstrap en nuestro proyecto