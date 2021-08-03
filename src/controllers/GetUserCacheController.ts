import NodeCacheService from "../services/NodeCacheService";

/**
 * @class GetUserCacheController
 * @description Controller for the get user cache
 */
class GetUserCacheController{
  handler(){
    const NodeCache = new NodeCacheService();
     return NodeCache.get("User") as any
  }
}

export default GetUserCacheController