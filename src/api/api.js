const url = process.env.API;



export function getDoencas () {
  console.log(url+"doenca")
  return this.$axios.get(url+"doenca")

}

export function postDoenca(data){
  console.log(data)
  return this.$axios.post(url+"doenca", data)
}
