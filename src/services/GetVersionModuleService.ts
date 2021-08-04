import { NpmsIO } from 'npms.io'


class GetVersionModuleService {

  async handler(moduleName: string): Promise<Object> {
    const npms = new NpmsIO();
    return npms.api.package.packageInfo(moduleName).then((data: any) => {
      return data.collected.metadata.version
    })
  }
}

export default GetVersionModuleService