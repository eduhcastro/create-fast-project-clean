import DeleteFolderService from "../services/DeleteFolderService"

interface IDeleteFolderController{
  folderName : string;
}

/**
 * @class DeleteFolderController
 * @classdesc Controller for deleting a folder using the module rimraf
 */
class DeleteFolderController{
  async execute({
    folderName
  }: IDeleteFolderController){
    const DeleteFolder = new DeleteFolderService()
    return await DeleteFolder.handler({
      folderName
    })
  }
}

export default DeleteFolderController