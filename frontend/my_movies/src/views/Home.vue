<template>

</template>

<script>
export default {
  components:{
    MoviesComponent
  },
  data(){
    return{movie_list=[]}
  },
async mounted(){
  try {
    const response = await axios.get()'https://github.com/Jadesaadouni/MyMovies/',
        this.movie_list = response.data()
  }catch (error){
    console.error(error);
     }
  }}
</script>

<style scoped>

</style>