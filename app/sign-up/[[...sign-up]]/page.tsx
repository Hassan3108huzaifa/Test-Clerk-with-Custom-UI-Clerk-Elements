'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa'

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <SignUp.Root>
          <SignUp.Step name="start" className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-900/5">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6 text-center">Create an account</h1>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <Clerk.Connection
                name="google"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                <FaGoogle className="mr-2" />
                Google
              </Clerk.Connection>
              <Clerk.Connection
                name="github"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                <FaGithub className="mr-2" />
                GitHub
              </Clerk.Connection>
              <Clerk.Connection
                name="facebook"
                className="w-full flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
              >
                <FaFacebook className="mr-2" />
                Facebook
              </Clerk.Connection>
            </div>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-zinc-500">Or continue with</span>
              </div>
            </div>

            <Clerk.Field name="emailAddress" className="mb-4">
              <Clerk.Label className="block text-sm font-medium text-zinc-700 mb-1">Email</Clerk.Label>
              <Clerk.Input className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm" />
              <Clerk.FieldError className="mt-1 text-sm text-red-600" />
            </Clerk.Field>

            <Clerk.Field name="password" className="mb-4">
              <Clerk.Label className="block text-sm font-medium text-zinc-700 mb-1">Password</Clerk.Label>
              <Clerk.Input className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm" />
              <Clerk.FieldError className="mt-1 text-sm text-red-600" />
            </Clerk.Field>

            <SignUp.Action submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
              Sign up
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="continue" className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-900/5">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6 text-center">Fill in missing fields</h1>

            <SignUp.Action submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
              Continue
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="verifications" className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-zinc-900/5">
            <SignUp.Strategy name="phone_code">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6 text-center">Check your phone for an SMS</h1>

              <Clerk.Field name="code" className="mb-4">
                <Clerk.Label className="block text-sm font-medium text-zinc-700 mb-1">Phone Code</Clerk.Label>
                <Clerk.Input className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm" />
                <Clerk.FieldError className="mt-1 text-sm text-red-600" />
              </Clerk.Field>

              <SignUp.Action submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
                Verify
              </SignUp.Action>
            </SignUp.Strategy>

            <SignUp.Strategy name="email_code">
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-6 text-center">Check your email</h1>

              <Clerk.Field name="code" className="mb-4">
                <Clerk.Label className="block text-sm font-medium text-zinc-700 mb-1">Email Code</Clerk.Label>
                <Clerk.Input className="appearance-none block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-zinc-500 focus:border-zinc-500 sm:text-sm" />
                <Clerk.FieldError className="mt-1 text-sm text-red-600" />
              </Clerk.Field>

              <SignUp.Action submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500">
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </div>
  )
}

