import { Role } from "../enums/role.enum";

export interface User {
  id: number;
  name: string;
  cpf: string;
  role: Role;
  password: string;
}
