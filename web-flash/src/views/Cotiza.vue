<template>
  <v-main fluid>
    <title-page title="Cotización" />
    <v-main style="padding-top: 2%;padding-left: 10%;padding-right: 12%">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Telefono"
          required
        ></v-text-field>
        <v-file-input
          v-model="files"
          color="deep-purple accent-4"
          counter
          label="Agregar Archivos"
          placeholder="Selecciona Tu Archivo"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip
              v-if="index < 2"
              color="deep-purple accent-4"
              dark
              label
              small
            >
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>
        <div class="text-center">
          <v-btn
            :disabled="valid"
            right
            color="warning"
            class="mr-4"
            @click="validate"
          >
            Proximamente !
          </v-btn>
        </div>
      </v-form>
    </v-main>
  </v-main>
</template>

<script>
import title_page from "../components/title_page";
export default {
  components: {
    "title-page": title_page,
  },
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 15) || "Name must be less than 10 characters",
      ],
      phoneRules: [
        (v) => !!v || "Ingrese un Celular",
        (v) =>
          (v && v.length <= 13) ||
          "El celular debe tener menos de 13 Caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false,
      phone: "",
      files: null,
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      //:disabled="!valid"
    },
  },
};
</script>
