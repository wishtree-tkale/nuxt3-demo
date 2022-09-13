<template>
    <TheHeader />
    <div>
        <form @submit="submit">
            <label for="uname">User Name</label>
            <input type="text" v-model="userName" placeholder="Your name..">

            <label for="email">Email</label>
            <input type="text" v-model="email" placeholder="Your email..">

            <label for="email">Phone</label>
            <input type="text" v-model="phone" placeholder="Your Phone..">
        
            <input type="submit" value="Submit">
        </form>
    </div>
</template>

<script setup>
    const userName = ref('');
    const email = ref('');
    const phone = ref('');

    async function submit(){
        let formData = new FormData();

        formData.append('userName', userName.value);
        formData.append('email', email.value);
        formData.append('phone', phone.value);

        await $fetch( 'https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: formData
        } );
    }
</script>

<style>
input[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>