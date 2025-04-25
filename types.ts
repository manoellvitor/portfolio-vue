export interface ProjectData {
  name: string;
  description: string;
  stack: Array<{
    id: string | number;
    name: string;
    icon: string;
  }>;
  urls: Array<{
    id: string | number;
    type: string;
    url: string;
  }>;
}
