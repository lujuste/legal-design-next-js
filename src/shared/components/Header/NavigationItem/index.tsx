import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

interface NavigationItemProps {
  label: string;
  href?: string;
}

export default function NavigationItem({ label, href }: NavigationItemProps) {
  return (
    <List as="ul">
      <Link href={href}>
        <ListItem
          cursor="pointer"
          fontSize={["15px", "15px", "15px", "15px", "16px"]}
          as="li"
          fontWeight="normal"
          textDecoration="none"
        >
          {label}
        </ListItem>
      </Link>
    </List>
  );
}
