import CreateUserCacheController from "../controllers/CreateUserCacheController";
import UpdateUserCacheController from "../controllers/UpdateUserCacheController";

interface IInsertUserPharse{
  text: string;
}

class InsertUserPharse{
    handler({
      text
    }: IInsertUserPharse){

      const createUser = new CreateUserCacheController({
       user: text.toString().trim()
      })

      const updateUser = new UpdateUserCacheController({
        level: 1,
        system: "",
        user: text.toString().trim()
      })
    }
}

export default InsertUserPharse