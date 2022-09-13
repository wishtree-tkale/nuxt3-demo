<template>
    <div>
      <h1>Here is the list...</h1>
      <ol>
        <li v-for="user of users" :key="user.id">
          <nuxt-link :to="user.id">{{user.name}}</nuxt-link>
        </li>
      </ol>
    </div>
</template>

<script setup>
    import Vue from 'vue'
    //const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
    const users = userData().fetchUsers();
    //return users;
</script>

<style>
ol {
  list-style-type: none;
  padding: 0;
  border: 1px solid #ddd;
}

ol li {
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
}

ol li:last-child {
  border-bottom: none
}

</style>
