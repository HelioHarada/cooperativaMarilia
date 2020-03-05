<template>
  <q-page padding>
    <h2 class="text-center">Editar Doença</h2>
    <div class="q-pa-md row q-gutter-xl">
      <div v-if="!doencas">
        <q-btn class="justify-center" @click="getDoenca()" label="Carregar" />
      </div>
      <div class="box-card" v-for="doenca in doencas" :key="doenca.id">
        <q-card class="my-card overflow-hidden">
          <img :src="doenca.imagem" />

          <q-card-section>
            <div class="text-h6">{{doenca.nome}}</div>
            <div class="text-subtitle2">{{doenca.categoria}}</div>
          </q-card-section>

          <q-card-section class="desc q-pt-none scroll">{{doenca.descricao}}</q-card-section>

          <!-- btn recomendação -->
          <q-card-actions>
            <q-btn flat color="primary" label="Recomendação" @click="id = doenca.id" />
            <q-btn flat color="warning" label="Editar Doença" :to="{ name: 'editarDoenca', params: { id: doenca.id }}"/>
          </q-card-actions>

          <!-- conteudo expadandido (Recomendação) -->
          <q-slide-transition>
            <div v-show="id == doenca.id">
              <q-card-section class="text-subtitle2">{{doenca.recomendacao}}</q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data() {
    return {
      doencas: {},
      expanded: false,
      id: "x",
      token: "24b1a440-6bae-34e9-bffd-b0eb8c0d3cdf"
    };
  },
  methods: {
    getDoenca() {
      this.$axios.get("http://localhost:8081/doenca").then(res => {
        this.doencas = res.data;
        console.log(this.doencas)
      });
    },
    getCultura() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      };

      const bodyParameters = {
        key: "cultura"
      };

      this.$axios
        .get("https://api.cnptia.embrapa.br/agritec/v1/", config)
        .then(res => {
          console.log(res.data);
        });
    }
  },
  mounted() {
    this.getDoenca();
    // this.getCultura();
  }
};
</script>

<style lang="scss">
.my-card {
  width: 100%;
  max-width: 350px;
}

.desc {
  max-height: 100px;
}

.my-card .recomendacao {
}
</style>
