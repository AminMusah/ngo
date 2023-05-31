<template>
  <div>hello there!</div>
</template>

<script>
import { collection, getDocs, getFirestore } from "firebase/firestore";
// import db from "../../plugins/firebase";
const db = getFirestore();

console.log(db);
export default {
  setup() {
    definePageMeta({
      middleware: ["auth"],
    });
  },
  methods: {
    async getEvents() {
      const querySnapshot = await collection(db, "events");

      getDocs(querySnapshot).then((snapshot) => {
        console.log(snapshot);
      });

      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });
    },
  },
  mounted() {
    this.getEvents();
  },
};
</script>

<style></style>
