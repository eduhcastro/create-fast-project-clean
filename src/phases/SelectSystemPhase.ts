import UpdateUserCacheController from "../controllers/UpdateUserCacheController";
import GetUserCacheController from "../controllers/GetUserCacheController";
import CreateFolderController from "../controllers/CreateFolderController";

interface ISelectSystemPharse {
    system: number
}

class SelectSystemPharse{
  private select = [
    {
      number: 1,
      system: "NodeJS(Puro)",
      abrevie: "NodeJS(P)",
    },
    {
      number: 2,
      system: "NodeJS(TypeScript)",
      abrevie: "NodeJS(TS)",
    },
    {
      number: 3,
      system: "NodeJS(NextJS)",
      abrevie: "NodeJS(N)",
    }
  ]
  handler({
    system
  }: ISelectSystemPharse){
    const Select = this.select.find(x => x.number === system)

    if(!Select){
      throw new Error(`Not found system: ${system}`)
    }

    const courrentUser = new GetUserCacheController()
    
    const updateUser = new UpdateUserCacheController({
      user: courrentUser.handler().name,
      system: Select.abrevie,
      level: 2
    })

    const CriarProjeto = new CreateFolderController()

    CriarProjeto.execute({
        folderName: courrentUser.handler().name+"-"+Select.abrevie,
        folderPath: "./projects"
    })
  }
}

export default SelectSystemPharse