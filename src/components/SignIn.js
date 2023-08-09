import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, sendEmailVerification } from 'firebase/auth';
import firebase from './firebase/firebase'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully.');
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);

      // Send email verification
      const user = auth.currentUser;
      if (user) {
        await sendEmailVerification(user);
        console.log('Verification email sent.');
      }

      console.log('User signed up successfully.');
    } catch (error) {
      setError(error.message);
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const auth = getAuth();
      await signInWithPopup(auth, provider);
      console.log('User signed in with Google.');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    const facebookProvider = new FacebookAuthProvider();
    try {
      const auth = getAuth();
      await signInWithPopup(auth, facebookProvider);
      console.log('User signed in with Facebook.');
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Log In</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>

      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <input type="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignIn;
