import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { store } from '@/lib/store';

// This is a mock database for demonstration
// In a real application, you would use a proper database
let users: any[] = [];

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    // Basic validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    if (store.findUserByEmail(email)) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password: hashedPassword,
    };

    // Save user
    store.addUser(newUser);

    // Create user object without password for the response
    const userWithoutPassword = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    // Generate a mock token (in a real app, use proper JWT)
    const token = Buffer.from(JSON.stringify(userWithoutPassword)).toString('base64');

    return NextResponse.json({
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    );
  }
} 