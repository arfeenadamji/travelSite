export interface Trip {
  ageid: number;
  agegroup: string;
  data: Data[];
  splice(arg0: number, arg1: number): any;
}


export interface Page {
  pgid: number;
  pgtitle: string;
  pgpara: string;
  data: Data[];
}

export interface Data {

  showItem: boolean;
  ageid: number;
  agegroup: string;
  trid: number;
  trhead: string;

  // tripheading: string;

  trpara: string;
  trimg;
  pgid: number;
  pgtitle: string;
  pgpara: string;
  tripremove;
  username: string;
  password: string;
}

export interface Age {
  age: Age;
  ageid: number;
  agegroup: string;
}

export interface Password {
  data: Data[];
  username;
  password;
}
