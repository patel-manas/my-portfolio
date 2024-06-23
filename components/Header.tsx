import { NavigationMenu } from "./NavigationMenu"

type HeaderProps = {}

export const Header = (props: HeaderProps) => {
    return (
        <header className="flex justify-between items-center">
            <section className="text-xl font-bold">Manas.</section>
            <NavigationMenu />
        </header>
    )
}

