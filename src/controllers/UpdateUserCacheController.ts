import NodeCacheService from "../services/NodeCacheService";

interface IUpdateUserCacheController{
  level: number,
  system: string
  user: string;
}

/**
 * @class UpdateUserCacheController
 * @classdesc Controller for updating the user cache to data "User"
 * @param {number} level - The level of the user
 * @param {string} user - The user
 */
class UpdateUserCacheController{
  constructor({
    level,
    user
  }: IUpdateUserCacheController){
    const NodeCache = new NodeCacheService()
    NodeCache.set("User", { 
      name: user,
      level
     })
  }
}

export default UpdateUserCacheController