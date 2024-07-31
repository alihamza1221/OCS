import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";
export default function DropDown({
  trigger,
  label,
  items,
}: {
  trigger: string;
  label?: string;
  items: Array<string>;
}) {
  console.log(trigger, items);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex justify-between w-full md:justify-center items-center">
          {trigger} <FaCaretDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item) => (
          <DropdownMenuItem key={item}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
