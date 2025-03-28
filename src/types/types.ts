// Tipos para os componentes
export interface Pastor {
    name: string;
    role: string;
    image: string;
    description: string;
  }
  
  export interface Ministry {
    name: string;
    description: string;
  }
  
  export interface WorshipTime {
    title: string;
    times: string[];
  }