<template>
  <v-main fluid>
    <title-page title="Cotización" />
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <v-overlay :value="overlay2">
      <v-card>
        <v-card-title class="headline" v-if="ok">Envio exitoso</v-card-title>
        <v-card-title class="headline" v-if="!ok">Error al Enviar</v-card-title>
        <v-card-text>
          <v-row align="center" justify="space-around">
            <v-icon v-if="ok" x-large color="green darken-2"
              >mdi-check-circle-outline
            </v-icon>
            <v-icon v-if="!ok" x-large color="red darken-2"
              >mdi-check-circle-outline
            </v-icon>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn v-if="ok" color="green darken-1" @click="dialog = false" to="/"
            >Ok</v-btn
          >
          <v-btn
            v-if="!ok"
            to="/"
            color="red darken-1"
            @click="overlay2 = false"
            >Ok</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-overlay>
    <v-main
      style="padding-bottom: 2%;padding-top: 2%;padding-left: 10%;padding-right: 12%"
    >
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
          label="Correo"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Teléfono"
          required
        ></v-text-field>
        <v-textarea
          filled
          v-model="message"
          label="Descripción"
          auto-grow
          value=""
        ></v-textarea>
        <v-file-input
          v-model="file"
          color="deep-purple accent-4"
          counter
          label="Agregar Archivos"
          placeholder="Selecciona Tu Archivo : Archivos PDF, Imagenes y De office"
          prepend-icon="mdi-paperclip"
          outlined
          :rules="rules"
          :show-size="1000"
          accept="image/*, application/pdf,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
        application/vnd.openxmlformats-officedocument.wordprocessingml.document,
        application/vnd.ms-powerpoint,
        application/vnd.ms-powerpoint.presentation.macroenabled.12,
        application/vnd.openxmlformats-officedocument.presentationml.presentation,
        application/x-mspublisher,
        application/vnd.ms-excel,
        application/msword,
        application/zip"
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
              +{{ file.length - 1 }} File(s)
            </span>
          </template>
        </v-file-input>

        <div class="text-center">
          <v-btn
            :disabled="!valid"
            right
            color="success"
            class="mr-4"
            @click="sendForm"
          >
            Enviar
          </v-btn>
        </div>
        <span class="color_rojo">* Tambien se hacen entregas a domicilio </span>
      </v-form>
    </v-main>
  </v-main>
</template>

<script>
import title_page from "../components/title_page";
import postRequest from "@/plugins/Api.js";
//import axios from "axios";
export default {
  components: {
    "title-page": title_page,
  },
  data() {
    return {
      overlay: false,
      overlay2: false,
      valid: false,
      ok: false,
      name: "",
      nameRules: [
        (v) => !!v || "Escribe Un Nombre",
        (v) => (v && v.length <= 25) || "Name must be less than 25 characters",
      ],
      phoneRules: [
        (v) => !!v || "Ingrese un Celular",
        (v) =>
          (v && v.length <= 13) ||
          "El celular debe tener menos de 13 Caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Ingrese tu correo",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phone: "",
      file: null,
      message: "",
      valid_type: [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-powerpoint",
        "application/vnd.ms-powerpoint.presentation.macroenabled.12",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/x-mspublisher",
        "application/vnd.ms-excel",
        "application/msword",
      ],

      rules: [
        (value) =>
          !value ||
          value.size < 20000000 ||
          "El archivo debe pesar menos de  20 MB!",
      ],
    };
  },
  methods: {
    async sendForm() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.overlay = true;
      const files = [this.file];
      const filesBase64 = await Promise.all(
        files.filter((f) => !!f).map(this.toBase64)
      );
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        file: filesBase64[0],
      };
      postRequest("/cotizacion", data)
        .then((response) => {
          this.overlay = false;
          this.overlay2 = true;
          if (response.data.res != 200) {
            this.ok = true;
          } else {
            this.ok = false;
          }
        })
        .catch((e) => {
          this.overlay = false;
          this.overlay2 = true;
          this.ok = false;
          console.log(e);
        });
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
  },
};
</script>

<style>
.color_rojo {
  color: #ff0000;
}
</style>
