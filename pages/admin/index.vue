<template>
  <div>hello there!</div>
</template>

<script>
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import db from "~/plugins/firebase";
// import firbase from "firebase";

// const db = getFirestore();

// console.log(db);
export default {
  setup() {
    definePageMeta({
      middleware: ["auth"],
    });
  },
  methods: {
    getEvents() {
      // getFirestore
      //   .collection("events")
      //   .get()
      //   .then((querySnapshot) => {
      //     querySnapshot.forEach((doc) => {
      //       console.log(doc);
      //     });
      //   });
    },
  },
  mounted() {
    this.getEvents();
  },
};
</script>

<style></style>
