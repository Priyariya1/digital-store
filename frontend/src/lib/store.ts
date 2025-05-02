// This is a temporary in-memory store
// In a real application, this would be replaced with a database

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

class Store {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }

  findUserByEmail(email: string) {
    return this.users.find(user => user.email === email);
  }

  getAllUsers() {
    return this.users;
  }
}

// Export a singleton instance
export const store = new Store(); 