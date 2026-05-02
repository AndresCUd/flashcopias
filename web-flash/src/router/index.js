import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Inicio",
      description:
        "Bienvenido a Flashcopias. Calidad y servicio al mejor precio en fotocopias e impresiones láser.",
    },
  },
  {
    path: "/impresiones",
    name: "Impresiones",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ImpresionesView.vue"),
    meta: {
      title: "Impresiones B&N y Color",
      description:
        "Servicio de impresiones en blanco y negro y color láser con la mejor calidad.",
    },
  },
  {
    path: "/cd",
    name: "CD",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CdView.vue"),
    meta: {
      title: "CDs y DVDs",
      description: "Grabación y copiado de CDs y DVDs.",
    },
  },
  {
    path: "/plotter",
    name: "Plotter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PlotterView.vue"),
    meta: {
      title: "Impresión en Plotter",
      description:
        "Impresión en plotter de alta calidad para planos y formato ancho.",
    },
  },
  {
    path: "/escaner",
    name: "Escanee",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EscanerView.vue"),
    meta: {
      title: "Servicio de Escáner",
      description: "Escaneo de documentos en alta resolución y gran formato.",
    },
  },
  {
    path: "/empaste/fino",
    name: "Fina",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FinaView.vue"),
    meta: {
      title: "Encuadernación Fina",
      description:
        "Encuadernación fina tradicional, en cuero, madera MDF y empresarial.",
    },
  },
  {
    path: "/empaste/empastes",
    name: "Empastes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmpastesView.vue"),
    meta: {
      title: "Empastes",
      description: "Empastes argollados, velobind, rústicos y más.",
    },
  },
  {
    path: "/cotiza",
    name: "Cotiza",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CotizaView.vue"),
    meta: {
      title: "Cotiza tu Servicio",
      description:
        "Solicita una cotización para tus proyectos de impresión y encuadernación.",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const defaultTitle = "Flashcopias";
  const defaultDesc =
    "Flashcopias: 30 años de experiencia prestando servicios de fotocopias, impresiones láser, plotter y encuadernación de alta calidad y al mejor precio.";

  document.title = to.meta.title
    ? `${to.meta.title} | ${defaultTitle}`
    : defaultTitle;

  let descriptionElement = document.querySelector('meta[name="description"]');
  if (descriptionElement) {
    descriptionElement.setAttribute(
      "content",
      to.meta.description || defaultDesc
    );
  }

  let ogTitleElement = document.querySelector('meta[property="og:title"]');
  if (ogTitleElement) {
    ogTitleElement.setAttribute(
      "content",
      to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle
    );
  }

  let ogDescElement = document.querySelector('meta[property="og:description"]');
  if (ogDescElement) {
    ogDescElement.setAttribute("content", to.meta.description || defaultDesc);
  }

  next();
});

export default router;
