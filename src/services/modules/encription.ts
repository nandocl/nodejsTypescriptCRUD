import bcrypt from 'bcrypt';

export class Encription{

    static saltRounds: number = 10;

    static encript_password(password: string): string {
        return bcrypt.hashSync(password, this.saltRounds);
    };
    
}