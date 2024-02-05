"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


interface LanguageOption {
    value: string;
    label: string;
  }
  
const languageOptions: LanguageOption[] = [
    { value: "eng", label: "English" },
    { value: "pol", label: "Polish" },
    { value: "dut", label: "Dutch" },
  ];
  
  export function DropdownMenuRadioGroupDemo() {
    const [selectedLanguage, setSelectedLanguage] = React.useState(languageOptions[0]);
  
    const handleLanguageChange = (value:String) => {
      const selectedOption = languageOptions.find(option => option.value === value);
      if (selectedOption) {
        setSelectedLanguage(selectedOption);
      }
    };
  
    return (
        <div className="pr-4">
            <DropdownMenu >
                <DropdownMenuTrigger asChild >
                <Button variant="outline" className="w-32">{selectedLanguage.label}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedLanguage.value} onValueChange={handleLanguageChange}>
                    {languageOptions.map(option => (
                    <DropdownMenuRadioItem key={option.value} value={option.value}>
                        {option.label}
                    </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
  }
