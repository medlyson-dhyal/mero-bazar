import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  headerTitle?: string;
  showSearch?: boolean;
  showBack?: boolean;
  hideHeader?: boolean;
}

export function Layout({
  children,
  headerTitle,
  showSearch = true,
  showBack = false,
  hideHeader = false,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {!hideHeader && (
        <Header
          title={headerTitle}
          showSearch={showSearch}
          showBack={showBack}
        />
      )}
      <main className="flex-1 pb-20 max-w-md mx-auto w-full">{children}</main>
      <BottomNav />
    </div>
  );
}
