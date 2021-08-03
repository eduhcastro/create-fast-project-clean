
interface IConfigureFilePackageService {
  modules: object
  author: string
  name: string
  system: string
}

class ConfigureFilePackageService {
  formated: any

  constructor({
    modules,
    author,
    name,
    system,
  }: IConfigureFilePackageService) {

    const format = {
      name: null,
      version: "1.0.0",
      main: "index.js",
      license: "MIT",
      scripts: {
      },
      devDependencies: {

      },
      dependencies: {
      }
    }

    let dependencies = {}
    for(let dependencie of Object.keys(modules)){
      dependencies.push()
    }

    this.formated = Object.assign(format, {
      name: author + "/" + name,
      dependencies: {
        "systemjs": system
      }
    })
  }

  public handler(){
    return this.formated
  }
}

export default ConfigureFilePackageService