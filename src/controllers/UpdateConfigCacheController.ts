import NodeCacheService from "../services/NodeCacheService";

interface IUpdateConfigCacheController {
    objects: object;
}
/**
 * @class UpdateConfigCacheController
 * @description Controller for the update config cache
 * @param {object} objects - The objects to be used in the controller
 */ 
class UpdateConfigCacheController{
  constructor({
    objects
  }: IUpdateConfigCacheController){
    const NodeCache = new NodeCacheService()
    NodeCache.set("Config", Object.assign(NodeCache.get("Config"), objects)
    )
  }
}

export default UpdateConfigCacheController