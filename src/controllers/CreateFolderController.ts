import CreateFolderService from "../services/CreateFolderService";

interface ICreateFolderController{
  folderName: string;
  folderPath: string;
}

/**
 * @class CreateFolderController
 * @classdesc Controller for the CreateFolder, Creates a folder responsible for receiving the requested project.
 */
class CreateFolderController extends CreateFolderService{

    /**
     * @function execute
     * @desc Executes the CreateFolderController
     * @param {ICreateFolderController} request - The request object
     * @param {string} request.folderName - The name of the folder to be created
     * 
     */
      public execute({
        folderName,
        folderPath
      }: ICreateFolderController){
        
        if(this.handler({
          folderName,
          folderPath
        })){
          return false
        }
        return true
    }
}

export default CreateFolderController