import { NavigationMobileMenu } from "./NavigationMobileMenu"

type NavigationMenuProps = {

}

export const navigationItems = [
    {
        label: 'Home',
        value: 'home'
    },
    {
        label: 'About',
        value: 'about'
    },
    {
        label: 'Skills',
        value: 'skills'
    },
    {
        label: 'Experience',
        value: 'experience'
    },
    {
        label: 'Contact',
        value: 'contact'
    }
]

export const NavigationMenu = (props: NavigationMenuProps) => {
    return (
        <nav>
            <NavigationMobileMenu />
            <ul className="hidden md:flex md:gap-8">
                {
                    navigationItems.map(navItem => (
                        <li key={navItem.value}>
                            {navItem.label}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

