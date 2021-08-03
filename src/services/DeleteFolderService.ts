import rimraf from "rimraf"

interface IDeleteFolderService {
    folderName: string
}

/**
 * @class DeleteFolderService
 * @description Service for deleting a folder
 * @param {string} folderName - The name of the folder to delete
 */
class DeleteFolderService{
  public async handler({
    folderName
  }: IDeleteFolderService){
    if(typeof folderName === "undefined"){
      throw new Error("folderName is undefined")
    }
    return new Promise((resolve, reject) => {
      rimraf("./projects/"+folderName, (err) => {
        if(err) reject(err)
        else resolve(this)
      })
    })
  }
}

export default DeleteFolderService
