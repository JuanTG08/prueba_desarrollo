import Hook from "../config/utils";
import { IDataRol, IToBack } from '../interface/IDataRol';
import UserModel from "../model/user.model";

class UserCtrl {
  static async createNewUser(req: any, res: any) {
    const { email, password, name, last_name, role } = req.body;
    const data = {
      email: Hook._length(email, 64, 4),
      password: Hook._length(password, 64, 8),
      name: Hook._length(name, 64, 1),
      last_name: Hook._length(last_name, 64, 1),
      role: Hook._length(role, 15, 1),
    };
    const dataVerify = Hook.verifyDataObject(data);
    if (dataVerify !== true)
      return res.json(Hook.Message(true, 0, "Campos Vacios", dataVerify));
    const _new = await UserModel.createNewUser(data);
    return res.json(_new);
  }

  static async listAllUsers(req: any, res: any) {
    return res.json(await UserModel.listAllUsers());
  }

  static async findOneById(req: any, res: any) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await UserModel.findOneById(_id));
  }

  static async modify(req: any, res: any) {
    const { _id } = req.params;
    const { email, password, name, last_name, role, status } = req.body;
    const data = {
      email: Hook._length(email, 64, 4),
      password: Hook._length(password, 64, 8),
      name: Hook._length(name, 64, 1),
      last_name: Hook._length(last_name, 64, 1),
      role: Hook._length(role, 15, 1),
      status: Hook.isBoolean(status),
    };
    const strObject = await Hook.structureObject(data);
    if (!strObject || !_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await UserModel.modifyOneUser(strObject, _id));
  }

  static async disable(req: any, res: any) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await UserModel.disable(_id));
  }

  static async delete(req: any, res: any) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await UserModel.delete(_id));
  }
}
export default UserCtrl;
