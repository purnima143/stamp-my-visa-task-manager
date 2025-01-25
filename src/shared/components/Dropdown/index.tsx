import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type DropdownProps<T> = {
    options: readonly T[];
    selectedValue?: T;
    onSelect: (value: T) => void;
    label: string;
};

const Dropdown = <T extends string | number>({
    options,
    selectedValue,
    onSelect,
    label,
}: DropdownProps<T>) => {
    return (
        <Menu as="div" className="relative inline-block text-left w-full md:w-auto">
            <MenuButton className="inline-flex w-full justify-between md:justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                {selectedValue || label}
                <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-gray-400"
                />
            </MenuButton>
            <MenuItems className="absolute right-0 mt-2 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-none">
                <div className="py-1">
                    {options.map((option) => (
                        <MenuItem key={option}>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => onSelect(option)}
                            >
                                {option}
                            </button>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    );
};

export default Dropdown;
