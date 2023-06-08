import { ReactNode, cloneElement, createContext, useContext, useEffect, useRef, useState } from "react";

type PopoverContextType = {
    isOpen: boolean;
    openPopover: () => void;
}

const PopoverContext = createContext<PopoverContextType | undefined>(
    undefined
);

interface PopoverRootProps {
    children: ReactNode;
}

function PopoverRoot({ children }: PopoverRootProps) {
    const [isOpen, setIsOpen] = useState(false);

    const targetRef = useRef<HTMLDivElement>(null)

    // Handle click out and escape key events
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, []);

    const openPopover = () => {
        setIsOpen(true)
    }

    return (
        <PopoverContext.Provider value={{ isOpen, openPopover }}>
            <div ref={targetRef}>
                {children}
            </div>
        </PopoverContext.Provider>
    )
}

interface PopoverTriggerProps {
    asChild?: boolean,
    children: ReactNode,
}

function PopoverTrigger({ asChild, children }: PopoverTriggerProps) {
    const popoverContext = useContext(PopoverContext)
    //error handler
    if (!PopoverContext) throw new Error("PopoverTrigger must be used within a PopoverRoot component")

    const handleClick = () => {
        popoverContext?.openPopover();
    }

    if (asChild) return (
        <div onClick={handleClick}>{children}</div>
    )

    return cloneElement(children as React.ReactElement<any>, {
        onClick: handleClick,
    });
}

interface PopoverContentProps {
    children: ReactNode;
};

function PopoverContent({ children }: PopoverContentProps) {
    const popoverContext = useContext(PopoverContext);

    if (!popoverContext) {
        throw new Error(
            'PopoverContent must be used within a PopoverRoot component'
        );
    }

    if (!popoverContext.isOpen) {
        return null;
    }

    return (
        <div>
            {children}
        </div>
    );
}

export { PopoverRoot, PopoverTrigger, PopoverContent }
