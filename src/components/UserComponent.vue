<!-- UserComponent.vue -->
<template>
  <div>
    <h1>User Information</h1>
    <button @click="fetchUser">Fetch User</button>
    <div v-if="user">
      <p>User ID: {{ user.id }}</p>
      <p>User Name: {{ user.name }}</p>
    </div>
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { getUser } from '@/services/userService';
import {ref} from "vue";

const user = ref(null);
const error = ref(null)

const fetchUser = async () => {
  try {
    user.value = await getUser(1);
    error.value = null;
  } catch (e) {
    user.value = null;
    error.value = `Error fetching user: ${e.message}`;
  }
}
</script>
