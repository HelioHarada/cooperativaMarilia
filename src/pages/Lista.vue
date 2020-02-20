<template>
  <q-page padding>
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
          </q-card-actions>

          <!-- conteudo expadandido (Recomendação) -->
          <q-slide-transition>
            <div v-show="id == expanded">
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
      id: "",
      token: "e303014f-5c11-3632-980e-f027ab95c30b"
    };
  },
  methods: {
    getDoenca() {
      this.$axios.get("http://localhost:8081/doenca").then(res => {
        this.doencas = res.data;
      });
    },
    getCultura() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` }
      };

      const bodyParameters = {
        key: "cultura"
      };

      this.$axios.get("https://api.cnptia.embrapa.br/agritec/v1/", config).then(res => {
        console.log(res.data);
      });
    }
  },
  created() {
    this.getDoenca();
    this.getCultura();
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
