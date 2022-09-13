export default function userData() {
    let user = ref({});
    let users = ref([]);
  
    function fetchUsers() {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => (users.value = data));
    }
  
    return { fetchUsers };
  }
  