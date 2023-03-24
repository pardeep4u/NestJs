import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

let service: AuthService;

beforeEach(async () => {});

describe(' Testing Auth_Serivce ', () => {
    it(' This is just for testing the Auth service ', async () => {
        // Fake user service

        const fakeUser: Partial<UsersService> = {
            find: () => Promise.resolve([]),
            create: (email: string, password: string) =>
                Promise.resolve({ id: 1, email, password }),
        };

        /**
         *
         *
         *  Unit Testing is all About creating
         *
         *
         *
         *
         */

        const arr = fakeUser.find('souravvashisht@gmail.com');

        const module = await Test.createTestingModule({
            providers: [
                AuthService,
                {
                    provide: UsersService,
                    useValue: fakeUser,
                },
            ],
        }).compile();

        service = module.get(AuthService);

        it(' It Should Be defined ', () => {
            expect(service).toBeDefined();
        });
    });
});
