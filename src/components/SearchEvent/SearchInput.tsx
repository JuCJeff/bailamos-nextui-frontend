import { Input } from "@nextui-org/react";

export default function SearchInput() {
  return (
    <Input
      classNames={{
        base: "max-w-full",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Type to search for city..."
      size="sm"
      //   startContent={<SearchIcon size={18} />}
      type="search"
    />
  );
}
