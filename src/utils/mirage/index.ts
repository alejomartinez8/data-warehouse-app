/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Model, Factory } from 'miragejs';
import faker from 'faker';
import { User } from 'components/molecules';

export function makeServer({ environment = 'test' } = {}) {
  return createServer({
    environment,

    factories: {
      user: Factory.extend({
        firstName() {
          return faker.name.firstName();
        },
        lastName() {
          return faker.name.lastName();
        },
        username() {
          return faker.internet.userName(this.firstName, this.lastName);
        },
        password() {
          return faker.internet.password();
        },
        email() {
          return faker.internet.email(this.firstName, this.lastName);
        },
        role() {
          const roles = ['user', 'admin'];
          return roles[Math.floor(Math.random() * roles.length)];
        },
        avatar() {
          return faker.internet.avatar();
        },
      }),
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = 'api';
      // this.resource("users")
      this.get('/users');
      this.get('/users/:id');
      this.post('/users');
      this.put('/users/:id');
      this.del('/users/:id');
    },

    seeds(server) {
      server.createList('user', 20);
    },
  });
}
