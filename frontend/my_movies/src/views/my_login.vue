<template>
<meta charset="UTF-8">
<title>login page</title>


<div id="login">LOGIN</div>


<div id="email" class="input_field">
<input type="email" minlength="3" maxlength="320" placeholder="Email...">
</div>
<div id="password" class="input_field">
<input type="password" minlength="8" maxlength="127" placeholder="Password...">
</div>
<div id="re_password" class="input_field">
<input type="password" minlength="8" maxlength="127" placeholder="Repeat password...">
</div>
<div class="buttons">
<button id="login" class="switchButtons">
  login
</button>

</div>
</template>

<script>
export default {
  name: "my_login"
}

</script>


<style scoped>

</style>