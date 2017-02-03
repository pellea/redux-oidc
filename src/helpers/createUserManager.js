import { UserManager } from 'oidc-client-fetch';

export default function createUserManager(config) {
  return new UserManager(config);
}
