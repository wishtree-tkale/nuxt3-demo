<template>
  <div class="header">
    <h1>Nuxt3 App</h1>
    <p>Composition API with typescript</p>
    <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/users/UsersIndex">User List</NuxtLink></li>
        <li><NuxtLink to="/users/UsersAddUser">Add User</NuxtLink></li>
    </ul> 
  </div> 
</template>

<style>
.header {
  padding: 60px;
  text-align: center;
  background: #1abc9c;
  color: white;
  font-size: 30px;
}
.header ul li {
  font-size: 16px;
  color: white;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  float: inherit;
  padding-left: 42%;
}

li {
  float: left;
}

li a {
  display: block;
  padding: 8px;
}
</style>