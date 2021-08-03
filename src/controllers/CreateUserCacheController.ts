import NodeCacheService from "../services/NodeCacheService";

interface ICreateUserCacheController{
  user: string;
}

/**
 * @class CreateUserCacheController
 * @classdesc Controller for the CreateUserCache using the module node-cache
 */
class CreateUserCacheController{
  constructor({
    user
  }: ICreateUserCacheController){
    const NodeCache = new NodeCacheService();
    NodeCache.set("User", { 
      name: user,
      level: 0
     })
  }
}

export default CreateUserCacheController