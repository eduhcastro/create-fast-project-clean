import UpdateConfigCacheController from "../controllers/UpdateConfigCacheController"
import DeleteFolderController from "../controllers/DeleteFolderController"
import GetConfigCacheController from "../controllers/GetConfigCacheController"
import CreateProjectPhase from "./CreateProjectPhase"
interface ISelectModulePhase{
  modules: string
}

/**
 * @class SelectModulePhase
 * @classdesc This phase is responsible for selecting the module to be used for the next phase.
 * @param {string} modules - The modules to be used for the next phase.
 * 
 */
class SelectModulePhase{

  private modules: Array<any> = [
    {number: 1,name: "Express", install: "express", type: "framework"},
    {number: 2,name: "MySQL1",  install: "mysql",   type: "database"},
    {number: 3,name: "MySQL2",  install: "typeorm mysql", type: "database"},
    {number: 4,name: "PgSQL1",  install: "pg", type: "database"},
    {number: 5,name: "PgSQL2",  install: "typeorm pg", type: "database"},
    {number: 6,name: "JWT",     install: "jsonwebtoken", type: "security"},
    {number: 7,name: "Chalk",   install: "chalk", type: "utilities"},
  ]

  public async handler({
    modules
  }: ISelectModulePhase){
   

    if(modules.search("/") === -1){

      if(parseInt(modules) === 0){
        const deleteFolder = new DeleteFolderController()
        const getConfigCache = new GetConfigCacheController()
        
        await deleteFolder.execute({
          folderName: getConfigCache.handler().nameFolder
        })
        
        console.log('Cancelado')
        process.exit()
      }

      const Select = this.modules.find(x => x.number === parseInt(modules))

      if(!Select){
        throw new Error(`Not found system: ${modules}`)
      }

      return new UpdateConfigCacheController({
        objects: Select
      })
    }
    
    let modulesSelectedList = []
    let secureModulesSelectedList: Array<string> = []

    for(let moduleSelected of modules.split("/")){
      const Select = this.modules.find(x => x.number === parseInt(moduleSelected))
      
      if(!Select){
        throw new Error(`Not found system: ${moduleSelected}`)
      }
      modulesSelectedList.push({module: Select.install})
      secureModulesSelectedList.push(Select.type)
    }

    if(secureModulesSelectedList.length !== secureModulesSelectedList.filter((item, pos, self) => self.indexOf(item) === pos).length){
      throw new Error("Duplicate values in the list of secure modules")
    }

    new UpdateConfigCacheController({
      objects: {
        modules: modulesSelectedList
      }
    })

    console.log('Inciando a projeção em 3s')

    setTimeout(async () => {
      const createProject = new CreateProjectPhase()
      await createProject.execute()
    }, 3000)
  }
}

export default SelectModulePhase