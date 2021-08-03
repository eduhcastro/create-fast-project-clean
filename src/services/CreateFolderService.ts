import fs from 'fs'
import path from 'path'
import NodeCacheService from './NodeCacheService'

interface ICreateFolderService{
    folderName: string;
    folderPath: string;
}

class After{

    /**
     * @function tempTime
     * @description Create a temporary name to folder project
     */
    public tempTime() {
        return new Date().getTime()
    }

    /**
     * @function existindFolder
     * @description Check if the folder exist in path and folder "./projects"
     */
    public existindFolder(folderPath: string) {
        return fs.existsSync(folderPath)
    }

}

class CreateFolderService extends After {
    /**
     * @function handler
     * @description Create a folder in the path
     * 
     */
    public handler({
        folderName,
        folderPath
    }: ICreateFolderService){
        try {
            let tempFolderName;

            if (folderName.length === 0 || typeof folderName !== 'string') {
                throw "Invalid folder name"
            }

            if(folderPath === "./projects"){
                const nodeCache = new NodeCacheService()
                tempFolderName = `${this.tempTime()}-${folderName}`
                nodeCache.set("Config", {
                    nameFolder: tempFolderName // Update cache
                })
            }else{
                tempFolderName = folderName
            }

            let folderPathCreate = path.join('./projects', tempFolderName);
            if (this.existindFolder(folderPathCreate)) {
                throw "There is already a folder with the same name"
            }
            fs.mkdirSync(folderPathCreate)
            return true
        } catch (e) {
            throw Error(`Unable to create project in folder, ${e}`)
        }
    }
}

export default CreateFolderService