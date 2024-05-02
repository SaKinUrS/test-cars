export interface ICarBase {
  id: string;
  title: string;
}

export interface ICarSubCategory extends ICarBase {
  parentId: string
  subcategories?: ICarSubCategory[]
}

export interface ICarModel extends ICarBase {
  subcategories: ICarSubCategory[]
}