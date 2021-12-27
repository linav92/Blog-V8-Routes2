<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('../assets/img/home-bg.jpg')"
    >
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
             <h1>{{  nivel  }}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    nivel() {
      let nivel = this.$route.params.nivel.toLowerCase();
      let mensaje = "La ruta no existe";
      if (nivel === "simple") {
        mensaje = "Bienvenido a la página de administración";
      } else if (nivel === "avanzado") {
        mensaje =
          "Esta página de administración está en construcción. Intente como administrador simple";
      }

      return mensaje;
    },
  },
};
</script>