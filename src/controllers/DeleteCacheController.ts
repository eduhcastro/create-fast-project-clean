import NodeCacheService from "../services/NodeCacheService";

/**
 * @class DeleteCacheController
 * @description Controller for deleting cache using the module node-cache
 */
class DeleteCacheController{
  constructor(){
    const NodeCache = new NodeCacheService();
    NodeCache.del("User")
    NodeCache.del("Config")
  }
}

export default DeleteCacheController