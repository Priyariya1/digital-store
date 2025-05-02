import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { store } from '@/lib/store';

// Access the users array from the registration endpoint
// In a real app, this would be a database query
declare const users: any[];

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find user
    const user = store.findUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create user object without password for the response
    const userWithoutPassword = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    // Generate a mock token (in a real app, use proper JWT)
    const token = Buffer.from(JSON.stringify(userWithoutPassword)).toString('base64');

    return NextResponse.json({
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
} 