import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:60632/api';
    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(this.baseUrl+`/users/` + id);
    }

    register(user: User) {
        return this.http.post(this.baseUrl+`/users/register`, user);
    }

    update(user: User) {
        return this.http.put(this.baseUrl+`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl+`/users/` + id);
    }
}