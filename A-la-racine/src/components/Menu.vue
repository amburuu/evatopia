<template>
  <div id="menuContainer">
    <div class="flex flex-row items-center justify-between p-10">
      <router-link to="/" class="flex flex-row items-center">
        <img
          id="logo"
          src="../assets/imgs/onion_logo_blue.jpeg"
          alt="Logo Onion"
        />
        <div id="title">À la racine.</div>
      </router-link>
      <div id="menu" class="flex flex-row justify-between">
        <router-link class="menuLinks" to="/">Accueil.</router-link>
        <router-link class="menuLinks" to="/consultations"
          >Consultations.</router-link
        >
        <router-link class="menuLinks" to="/professionnels"
          >Professionnels.</router-link
        >
        <router-link class="menuLinks" to="/ateliers">Ateliers.</router-link>
        <router-link class="menuLinks" to="/tarifs">Tarifs.</router-link>
      </div>
      <div>
        <button id="contact">Me contacter.</button>
      </div>
    </div>
  </div>
</template>
<style scoped>

#menuContainer {
  height: 20vh;
}

#title {
  font-family: "Sunborn";
  color: #ff4500;
  font-size: 2em;
}

#logo {
  width: 60px;
  padding-right: 10px;
}

#menu {
  width: 50%;
}

.menuLinks {
  font-family: "Sailors";
  color: #ff4500;
  padding-right: 8px;
}

#contact {
  background-color: #ff4500;
  color: white;
  padding: 10px;
  font-family: "Sailors";
}
</style>
