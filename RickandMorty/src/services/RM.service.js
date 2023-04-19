import { APIRM } from "./../constants/Api.constants";
class RMService {
  async getAllCharacters() {
    const reponse = await fetch(APIRM.CHARACTES());
    //Intercetor
    return reponse.json();
  }
  
  async getCharacterById(id) {
    const reponse = await fetch(APIRM.CHARACTES_BY_ID(id));
    //Intercetor
    return reponse.json();
  }
}
export default new RMService();
