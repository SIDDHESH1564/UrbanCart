import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from "../shadcn/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../shadcn/components/ui/form";
import { Input } from "../shadcn/components/ui/input";
import LoadingSpinner from "../shadcn/components/ui/LoadingSpinner";

export function Signup() {
  const form = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    // Handle form submission logic here
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <main className="w-[550px] " >
        <section className="text-black body-font dark bg-gray-100">
          <div className="container px-5 py-20 mx-auto max-w-lg">
            <h1 className="text-4xl mb-8 font-bold text-center">Signup</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="firstName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input className="focus-visible:ring-white" placeholder="First Name" autoComplete="given-name" {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="lastName" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input className="focus-visible:ring-white" placeholder="Last Name" autoComplete="family-name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input className="focus-visible:ring-white" placeholder="Email" autoComplete="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="password" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="focus-visible:ring-white" placeholder="Password" autoComplete="new-password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="confirmPassword" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" className="focus-visible:ring-white" placeholder="Confirm Password" autoComplete="new-password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button variant="outline" type="submit" className="mt-4 w-full" disabled={loading}>
                  {loading ? <LoadingSpinner /> : "Signup"}
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </main>
    </div>
  );
}
