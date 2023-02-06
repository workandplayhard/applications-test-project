import AppStateProvider from "@/providers/AppStateProvider";
import ThemeProvider from "@/providers/ThemeProvider";

function AllProviders({ children }) {
  return (
    <ThemeProvider>
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  );
}

export default AllProviders;
