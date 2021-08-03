import NodeCache from "node-cache";
const Cache = new NodeCache({
    stdTTL: 3600
})

/**
 * @class NodeCacheService
 * @description Service for caching data
 */
class NodeCacheService {
    cache: any;

    /**
     * @function get
     * @description Get data from cache
     * @param {string} key - key of the data only two values ​​allowed: User and Config
     * @returns any
     * @example get<any>("Data")
     */
    get(key: string) {
        if (typeof key === "undefined" || key !== "User" && key !== "Config") {
            throw new Error("invalid key ");
        }
        return Cache.get(key) as any
    }

    /**
     * @function set
     * @description Set data to cache
     * @param {string} key - key of the data only two values ​​allowed: User and Config
     * @param {any} value - value of the data
     * @example set<any>("Data", {Name: "John"})
     */
    set(key: string, value: any) {
        if (typeof key === "undefined" || key !== "User" && key !== "Config") {
            throw new Error("invalid key ");
        }
        if (key === "User" && typeof value.name !== "string") {
            throw new Error("name must be a string");
        }

        if (key === "User" && typeof value.level !== "number") {
            throw new Error("level must be a number");
        }
        return Cache.set(key, value)
    }

    /**
     * @function del
     * @description Remove data from cache
     * @param {string} key - key of the data
     * @example del<any>("Data")
     */
    del(key: string) {
        return Cache.del(key);
    }
}

export default NodeCacheService