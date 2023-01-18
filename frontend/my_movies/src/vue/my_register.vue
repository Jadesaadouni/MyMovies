<template>
    <meta charset="UTF-8">
    <title>register page</title>
    <link rel="stylesheet" href="register.css">

  <div id="register">REGISTER</div>

    <div id="username" class="input_field">
      <input type="text" minlength="2" maxlength="255" placeholder="Username...">
    </div>
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
      <button id="register" class="switchButtons">
        Register
      </button>
      <div id="noAccountText">Already have an account ?</div>
      <button id="login" class="switchButtons" v-on:click="this.router.push('/login')">
        Login
      </button>
    </div>
</template>

<script>
export default {
  name: "my_register"
}


</script>

<style scoped>

</style>



