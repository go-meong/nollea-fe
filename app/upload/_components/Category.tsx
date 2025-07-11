"use client";

import { X } from "lucide-react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Text } from "@vapor-ui/core";
import { Command as CommandPrimitive } from "cmdk";
import { v4 as uuidv4 } from "uuid";

type Category = Record<"value" | "label" | "id", string>;

// 야시장, 음식점, 야경 명소, 산책길, 자연, 테마파크, 드라이브, 정원, 산책길, 유적지, 사찰, 공연, 유네스코 무형유산
const FRAMEWORKS = [
  {
    value: "NIGHT_MARKET",
    label: "야시장",
    id: uuidv4(),
  },
  {
    value: "FOOD",
    label: "음식점",
    id: uuidv4(),
  },
  {
    value: "WALKING_PATH",
    label: "산책길",
    id: uuidv4(),
  },
  {
    value: "NATURE",
    label: "자연",
    id: uuidv4(),
  },
  {
    value: "FESTIVAL",
    label: "축제",
    id: uuidv4(),
  },
  {
    value: "FESTIVAL",
    label: "야경",
    id: uuidv4(),
  },
  {
    value: "FESTIVAL",
    label: "로맨틱",
    id: uuidv4(),
  },
] satisfies Category[];

export function Category({
  category: selected,
  setCategory: setSelected,
}: {
  category: Category[];
  setCategory: React.Dispatch<React.SetStateAction<Category[]>>;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback((framework: Category) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, []);

  const selectables = FRAMEWORKS.filter((framework) => !selected.includes(framework));

  return (
    <div className="flex flex-col gap-2">
      <Text
        typography="body2"
        style={{
          color: "var(--vapor-color-white)",
        }}
        asChild
      >
        <label htmlFor="category">카테고리</label>
      </Text>

      <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
        <div
          className="group rounded-md border px-3 py-2 text-sm"
          style={{
            borderColor: "var(--vapor-color-gray-900)",
            backgroundColor: "var(--vapor-color-gray-900)",
            color: "var(--vapor-color-white)",
          }}
        >
          <div className="flex flex-wrap gap-1">
            {selected.map((framework) => {
              return (
                <Badge key={framework.id} variant="secondary">
                  {framework.label}
                  <button
                    className="ml-1 rounded-full outline-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(framework);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onClick={() => handleUnselect(framework)}
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </Badge>
              );
            })}
            {/* Avoid having the "Search" Icon */}
            <CommandPrimitive.Input
              id="category"
              ref={inputRef}
              value={inputValue}
              onValueChange={setInputValue}
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
              placeholder="카테고리를 선택해주세요."
            />
          </div>
        </div>
        <div className="relative mt-2">
          <CommandList>
            {open && selectables.length > 0 ? (
              <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
                <CommandGroup className="h-full overflow-auto">
                  {selectables.map((framework) => {
                    return (
                      <CommandItem
                        key={framework.id}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onSelect={() => {
                          setInputValue("");
                          setSelected((prev) => [...prev, framework]);
                        }}
                        className={"cursor-pointer"}
                      >
                        {framework.label}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </div>
            ) : null}
          </CommandList>
        </div>
      </Command>
    </div>
  );
}
