import fs from 'fs'
import PackageTemplate from '../models/PackageTS.Modal';
import ConfigureFilePackageService from './ConfigureFilePackageService';

interface ICreateFilePackageService{
  modules: object
  author: string
  name: string
  system: string
  path: string
}

class CreateFilePackageService{
  async execute({
    modules,
    author,
    name,
    system,
    path
  }: ICreateFilePackageService){
    return new Promise(async (resolve, reject) => {
      const packageTemplate = new ConfigureFilePackageService({
        modules,
        author,
        name,
        system,
      });


      fs.writeFile(`./projects/${path}/package.json`, JSON.stringify(await packageTemplate.handler(), null , 4), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(this);
        }
      })
    })
  }
}

export default CreateFilePackageService

