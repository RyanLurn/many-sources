import { ThemeProvider } from "@/components/providers/theme";
import { SidebarProvider } from "@/components/ui/sidebar";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      enableSystem
    >
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}

export { Providers };
