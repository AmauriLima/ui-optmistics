import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "./app/contexts/theme-provider";
import { queryClient } from "./app/lib/query-client";
import { Header } from "./components/header";
import { Toaster } from "./components/ui/toaster";
import { UserForm } from "./components/user-form";
import { UsersList } from "./components/users-list";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="max-w-[500px] mx-auto mt-20">
          <Header />
          <main className="mt-10 space-y-4">
            <UserForm />
            <UsersList />
          </main>
        </div>
        <Toaster />
      </ThemeProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
};
