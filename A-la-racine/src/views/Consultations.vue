<script setup>
import Menu from "/src/components/Menu.vue";
</script>

<template>
  <Menu />
  <div id="title" class="text-center">Méthode de consultation</div>
  <div class="flex flex-col items-center">
    <div style="width: 70%">
      <div class="subTitles pt-5">
        une prise en charge complète accompagnée se déroule sur plusieurs mois
        (théorique & pratique). Les premières consultations sont nécessaires à
        l'étude et à la compréhension théorique. Les consultations pratiques
        s'établissent en fonction de vos besoins, de votre environnement,
        entièrement personnalisables, suivant une fiche de route afin de vous
        donner les techniques élémentaires (et plus...).
      </div>
      <div class="subTitles pt-5 pb-5">
        Ci dessous, un détail non exhaustif de la base de la méthode de
        consultation :
      </div>
      <div class="containerItems">
        <div class="subTitles titleItems">1ère consultation :<br />(1h30)</div>
        <div class="contentItems">
          Établir les bases (Collection de données / Questionnaire personnalisé
          / Journal alimentaire /Etablissement des axes de suivi/ Réponse aux
          questions...)
        </div>
      </div>
      <div class="containerItems">
        <div class="subTitles titleItems">
          consultations suivi Théorique : <br />(1h chacune)
        </div>
        <div class="contentItems">
          Etude (Bilan alimentaire / Bilan complémentaire (selles, urine...) /
          Remise de documentation personnalisée expliquée/ en fonction du bilan
          à l'ordre du jour : étude complémentaire/ choix de l'origine des
          prochaines consultations/...)
        </div>
      </div>
      <div class="containerItems">
        <div class="subTitles titleItems">
          consultations suivi Pratique : <br />
          (2h ou 3h chacune)
        </div>
        <div class="contentItems">
          Entièrement personnalisables pouvant prendre la forme : de cours de
          cuisine (élaboration de recettes, maîtrise de découpes, cuissons,
          assaisonnement, lactofermentation, conservations, ...) d'aménagement
          (organisation espace et astuces pour gain de temps, argent, qualité,
          écologique, ...) accompagnement aux courses (pouvoir examiner les
          produits, étudier nos choix en fonction du prix, de la qualité, de la
          composition, comprendre les enjeux marketing, site en ligne ...)
        </div>
      </div>
      <div class="containerItems">
        <div class="subTitles titleItems">
          consultations long terme : <br />
          (1h chacune)
        </div>
        <div class="contentItems">
          Consultation en fonction du besoin sous forme d'échange afin de faire
          le point, pérenniser votre parcours, apporter des réponses à de
          nouvelles interrogations....
        </div>
      </div>
      <div class="containerItems">
        <div class="subTitles titleItems">Atelier Demi journée :</div>
        <div class="contentItems">
          Pour enrichir le suivi, les ateliers de cuisine permettent de partager
          à plusieurs (avec votre entourage ou d'autres personnes que sous ma
          prise en charge), pour apprendre mais aussi échanger autour d'un thème
          choisi au préalable.
          <router-link to="/ateliers">(Cf rubrique Atelier)</router-link>.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#title {
  font-family: "Sunborn";
  font-size: 2em;
  color: white;
  background-color: #ff4500;
  padding: 20px;
}

.subTitles {
  font-family: "Sailors";
  font-size: 1.4em;
  color: #ff4500;
}

.containerItems {
  display: flex;
  margin: auto;
  flex-direction: row;
  color: #ff4500;
  padding-top: 20px;
}

.titleItems {
  font-size: 1.2em;
  width: 40%;
}

.contentItems {
  font-size: 1.3em;
  font-weight: 300;
  width: 60%;
}
</style>
