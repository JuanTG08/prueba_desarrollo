import Hook from "../config/utils";
import AccessPages from "../model/access-pages.model";

class AccessPagesCtrl {
  static async createNewPage(req, res) {
    const { namePath, descriptionPath, path, nameMiniature } = req.body;
    const data = {
      namePath: Hook._length(namePath, 32, 4),
      descriptionPath: Hook._length(descriptionPath, 64, 4),
      path: Hook._length(path, 64, 1),
      nameMiniature: Hook._length(nameMiniature, 64, 1),
    };
    const dataVerify = Hook.verifyDataObject(data);
    if (dataVerify !== true)
      return res.json(Hook.Message(true, 0, "Campos Vacios", dataVerify));
    const newPage = await AccessPages.createNewPage(data);
    return res.json(newPage);
  }

  static async listAllPages(req, res) {
    return res.json(await AccessPages.listAllPages());
  }

  static async findOnePageByPath(req, res) {
    const { path } = req.params;
    if (!Hook._length(path, 64, 1))
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await AccessPages.findOnePageByPath(path));
  }

  static async findOnePageById(req, res) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await AccessPages.findOnePageById(_id));
  }

  static async modifyOneAccessPage(req, res) {
    const { _id } = req.params;
    const { namePath, descriptionPath, path, nameMiniature, status } = req.body;
    const data = {
      namePath: Hook._length(namePath, 32, 4),
      descriptionPath: Hook._length(descriptionPath, 64, 4),
      path: Hook._length(path, 64, 1),
      nameMiniature: Hook._length(nameMiniature, 32, 1),
      status: Hook.isBoolean(status),
    };
    const strObject = await Hook.structureObject(data);
    if (!strObject || !_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await AccessPages.modifyOneAccessPage(strObject, _id));
  }

  static async disableAccessPages(req, res) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await AccessPages.disableAccessPages(_id));
  }

  static async deleteAccessPage(req, res) {
    const { _id } = req.params;
    if (!_id || _id.length === 0)
      return res.json(Hook.Message(true, 0, "Campos Vacios"));
    return res.json(await AccessPages.deleteAccessPage(_id));
  }
}
export default AccessPagesCtrl;
