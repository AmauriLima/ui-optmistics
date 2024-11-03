import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="font-bold text-3xl -tracking-wide">theusers</h1>
        <small className="text-muted-foreground">Gerencie os seus usuários.</small>
      </div>

      <ThemeSwitcher />
    </header>
  )
}
