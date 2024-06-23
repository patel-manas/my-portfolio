import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { TextAlignLeftIcon } from '@radix-ui/react-icons';

import { navigationItems } from "./NavigationMenu"


type NavigationMobileMenuProps = {}

export const NavigationMobileMenu = (props: NavigationMobileMenuProps) => {
    return (
        <div className="block md:hidden">
            <Popover>
                <PopoverTrigger>
                    <TextAlignLeftIcon width={32} height={32} />
                </PopoverTrigger>
                <PopoverContent className="w-36">
                    <ul className="flex flex-col gap-4">
                        {
                            navigationItems.map(navItem => (
                                <li key={navItem.value} className="cursor-pointer hover:font-bold">{navItem.label}</li>
                            ))
                        }
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    )
}