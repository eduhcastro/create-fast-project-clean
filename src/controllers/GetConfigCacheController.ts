import NodeCacheService from "../services/NodeCacheService";

/**
 * @class GetConfigCacheController
 * @description Controller for the get config cache install project details
 */
class GetConfigCacheController{
  public handler(){
    const NodeCache = new NodeCacheService();
    return NodeCache.get("Config") as any
  }
}

export default GetConfigCacheController;