// Tipos para os componentes
export interface Pastor {
    name: string;
    role: string;
    image: string;
    description: string;
  }
  
  export interface Ministry {
    name: string;
    description?: string;
    logo: string;
  }
  
  export interface WorshipTime {
    title: string;
    times: string[];
  }

 export interface Video {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
    };
  }