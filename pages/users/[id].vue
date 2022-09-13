<template>
  <div>
    <div>
      <TheHeader />
      <p> Here are the details of user {{user.name}}</p>
      <div>
        <table>
          <tr>
            <td class="bold">Name</td>
            <td>:</td>
            <td>{{user.name}}</td>
          </tr>
          <tr>
            <td class="bold">Email</td>
            <td>:</td>
            <td>{{user.email}}</td>
          </tr>
          <tr>
            <td class="bold">User Name</td>
            <td>:</td>
            <td>{{user.username}}</td>
          </tr>
          <tr>
            <td class="bold">Address</td>
            <td>:</td>
            <td>{{user.address.street}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Vue from 'vue'
  const route = useRoute();
  const { data: user } = await useFetch('https://jsonplaceholder.typicode.com/users/'+route.params.id)
</script>
  
<style>
  .bold{
    font-weight: bold;
  }

</style>