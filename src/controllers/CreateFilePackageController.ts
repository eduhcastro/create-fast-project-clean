import CreateFilePackageService from '../services/CreateFilePackageService';

interface ICreateFilePackageController {
  modules: object
  author: string
  name: string
  system: string
  path: string
}

class CreateFilePackageController{
  public async execute({
    modules,
    author,
    name,
    system,
    path
  }: ICreateFilePackageController){
    const CreateFile = new CreateFilePackageService()
    await CreateFile.execute({
      modules,
      author,
      name,
      system,
      path
    })
  }
}

export default CreateFilePackageController