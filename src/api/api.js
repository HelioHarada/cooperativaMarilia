const url = process.env.API;



export function getDoencas () {
  console.log(url+"doenca")
  return this.$axios.get(url+"doenca")

}
