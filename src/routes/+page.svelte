<script>
    import Header from "./Header.svelte";

    let loggedUser = $state('Eduardo');
    let users = $state([ {id: 1, userName: 'eduardo'} ])
    let newUser = $state('');
    
    function addUser () {
       // Make sure newUser is not empty before adding
       if (newUser) {
            const newId = users.length + 1; // Generate new ID based on the current list size
            users = [...users, { id: newId, userName: newUser }]; // Add the new user to the list
            newUser = ''; // Clear the input field after adding the user
        }
    }
</script>

<Header {loggedUser} />

<ul>
    {#each users as user (user.id)}
        <li>{user.userName}</li>
    {/each}
</ul>

<input type="text" bind:value={newUser}>
<button type="submit" onclick={addUser}>Add New User</button>
