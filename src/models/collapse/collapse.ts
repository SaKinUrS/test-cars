export interface ICollapseItem {
  value: string;
  label: string | React.ReactNode;
  children?: ICollapseItem[]
} 