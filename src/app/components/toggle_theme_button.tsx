"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const ToggleTheme = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []); 

    if (!mounted) {
        return <Button variant="secondary" size="icon" disabled={true} aria-label="Loading theme"></Button>
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    const dark = currentTheme === "dark"

    return (
        <Button variant={"secondary"} size={"icon"} onClick={() => setTheme(`${dark ? "light" : "dark"}`)} className="hover:cursor-pointer hover:bg-primary" aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun  /> : <Moon />}</Button>
    );

};

export default ToggleTheme;