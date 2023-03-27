interface User {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface Account {
  user: User;
  age: number;
  avatar: any;
}
