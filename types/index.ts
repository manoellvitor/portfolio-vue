export interface ProjectData {
  id: number;
  name: string;
  description: string;
  image: string;
  stack: Stack[];
  urls: URL[];
}

export interface Stack {
  id: number;
  name: string;
  icon: string;
}

export interface URL {
  id: number;
  type: string;
  url: string;
}
