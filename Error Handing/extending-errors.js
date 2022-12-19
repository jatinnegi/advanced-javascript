class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
    this.favouriteSnack = "Grapes";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionError";
  }
}

try {
  //   throw new AuthenticationError("Incorrect username or password!");
  //   throw new DatabaseError("Database connection failed...");
  throw new PermissionError("Error 403 (Forbidden)");
} catch (error) {
  if (error instanceof AuthenticationError) console.log(error.message);
  else if (error instanceof DatabaseError) console.log(error.message);
  else if (error instanceof PermissionError) console.log(error.message);
}
