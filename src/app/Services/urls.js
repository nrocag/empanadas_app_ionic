const domain = `http://shoppingproducts.herokuapp.com/`
const Api = {
  GET_LIST: `${domain}products`,
  GET_ONE: `${domain}Medidor/v1/Recarga/PropietarioMedidor`,
  ADD_CART: `${domain}Medidor/v1/Precarga/PropietarioMedidor`,
  DELIVERY: `${domain}Medidor/v1/AlumbradoPublico/PropietarioMedidor`
}

export default Api;