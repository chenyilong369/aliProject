import SqlBase from '../sqlBase';
import { getCurrentTime } from '../sqlUtil';

export default class UserBase extends SqlBase {
  constructor() {
    super('code_test_list', 'id');
  }

  createTest(params?: {[index: string] : any}) {
    return this.insert({...params, create_time: getCurrentTime()});
  }

  updateTest(params: {[index: string]: any}, controlUpdate?: { [index: string]: any }) {
    return this.update({...params, update_time: getCurrentTime()}, {...controlUpdate});
  }

  updateTestById(id: number, params: {[idnex: string]: any}) {
    return this.update({...params, update_time: getCurrentTime()}, {id})
  }

  deleteTestById(id: number) {
    return this.delete({id})
  }
}
