import { useUserContext } from "../../hooks/hooks";
import { Character } from "./Character";

export type User = {
    username?: string,
    password?:string,
    // additional fields...
    email?: string;
    email_verified?: boolean;
    exp?: number;
    family_name?: string;
    given_name?: string; 
    iat?: number;
    iss?:string;
    jti?: string;
    name?: string; 
    nbf?: number;
    picture?: string;
    sub?: string;    
}

  