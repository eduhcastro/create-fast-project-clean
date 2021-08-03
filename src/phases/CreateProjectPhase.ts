import GetConfigCacheController from "../controllers/GetConfigCacheController"
import GetUserCacheController from "../controllers/GetUserCacheController"
import CreateFilePackageController from "../controllers/CreateFilePackageController"
import CreateFolderController from "../controllers/CreateFolderController"

class CreateProjectPhase{

  private alternativesSystem = [
    {name: "NodeJS(P)", folders: "controllers/services", files: "routes.js/"},
    {name: "NodeJS(TS)", folders: "controllers/services", files: ""},
    {name: "NodeJS(N)", folders: "controllers/services/pages/api", files: ""}
  ]

  private alternativesModule = [
    {name: "express", system: "NodeJS(P)"},
    {name: "express", system: "NodeJS(TS)"},
    {name: "express", system: "NodeJS(N)"},
    {name: "mysql", system: "NodeJS(P)"},
    {name: "mysql", system: "NodeJS(TS)"},
    {name: "mysql", system: "NodeJS(N)"},
    {name: "typeorm mysql", system: "NodeJS(P)"},
    {name: "typeorm mysql", system: "NodeJS(TS)"},
    {name: "typeorm mysql", system: "NodeJS(N)"},
    {name: "pg", system: "NodeJS(P)"},
    {name: "pg", system: "NodeJS(TS)"},
    {name: "pg", system: "NodeJS(N)"},
    {name: "typeorm pg", system: "NodeJS(P)"},
    {name: "typeorm pg", system: "NodeJS(TS)"},
    {name: "typeorm pg", system: "NodeJS(N)"},
    {name: "jsonwebtoken", system: "NodeJS(P)"},
    {name: "jsonwebtoken", system: "NodeJS(TS)"},
    {name: "jsonwebtoken", system: "NodeJS(N)"},
    {name: "chalk", system: "any"},
  ]

   public async execute(){
    const cacheConfig = new GetConfigCacheController().handler()
    const cacheUser = new GetUserCacheController().handler()

    const CreatePackage = new CreateFilePackageController()
    await CreatePackage.execute({
      modules: cacheConfig.objects,
      author: cacheUser.name,
      name: "Teste",
      system: cacheUser.system,
      path: `${cacheConfig.nameFolder}`
    })
  }

}

export default CreateProjectPhase