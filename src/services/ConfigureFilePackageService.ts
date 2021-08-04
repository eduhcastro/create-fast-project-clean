import GetVersionModuleService from "./GetVersionModuleService"

interface IConfigureFilePackageService {
  modules: any
  author: string
  name: string
  system: string
}

class ConfigureFilePackageService {
  format: any
  modules: Array<any>
  author: string
  name: string
  system: string

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

    this.modules = modules
    this.author = author
    this.name = name
    this.system = system
    this.format = format
  }

  private typeScript(){
    return {
      "build": "tsc",
      "start": "node build/index.js",
      "dev": "ts-node-dev --ignore-watch node_modules src/index.ts"
    }
  }

  private javaScript(){
    return {
      "start": "node index.js",
    }
  }

  public async handler(){

    const versionModule = new GetVersionModuleService()

    const dependencies = {} as Array<string>

    // add all modules to const teste
   
    for(let moduley of this.modules){
      dependencies[moduley.module] = `^${await versionModule.handler(moduley.module)}`
    }

    return Object.assign(this.format, {
      name: this.author + "/" + this.name,
      dependencies: dependencies,
      scripts: this.system === "NodeJS(TS)" ? this.typeScript() : this.javaScript(),
    })
  }
}

export default ConfigureFilePackageService