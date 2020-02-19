<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Cooperativa Sul Brasil</q-toolbar-title>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      side="right"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Menu</q-item-label>

        <menu-list v-for="link in menu" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import MenuList from "components/MenuList";
export default {
  name: "MainLayout",

  components: {
    EssentialLink,
    "menu-list": MenuList
  },

  data() {
    return {
      leftDrawerOpen: false,
      menu: [
        {
          title: "Home",
          caption: "Página inicial",
          icon: "home",
          link: "/"
        },
        {
          title: "Cadastrar Doença",
          caption: "Cadastro de doença",
          icon: "school",
          link: "/cadastrar"
        }
      ]
    };
  }
};
</script>
