import styled, { keyframes } from "styled-components";
import type { ThemeType } from "../types/ThemeType";
import { useState, type FunctionComponent } from "react";
import { useTheme } from "../hooks/useTheme";
import { HiOutlineSelector } from "react-icons/hi";

type SelectTextValue = "Asia" | "Americas" | "Oceania" | "Africa" | "Europe" | "Antarctic" | "Select Region" | "All";


interface SelectItemObj {
    value: SelectTextValue
    text: SelectTextValue
    selected: boolean
}

const StyledSelect = styled.div<ThemeType>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    color: ${props => props.color};
    width: 200px;
    min-width: 200px;
    min-height: 3rem;
    background: ${props => props.background};
    box-shadow: ${props => "0px 1px 2px 2px " + props.secondarybackground};
    border-radius: .5rem;
    padding: 1rem;
    cursor: pointer;
    line-height: 1rem;
`;

const showAnim = keyframes`
    from {
        transform: scaleY(0);
    }
    to {
        transform: scaleY(1);
    }
`;

const hideAnim = keyframes`
    from {
        transform: scaleY(1);
    }
    to {
        transform: scaleY(0);
    }
`;



const SelectItems = styled(StyledSelect)`
    flex-direction: column;
    transform: scaleY(0);
    transform-origin: top;
    position: absolute;
    padding: 1rem 0;
    top: 4rem;
    left: 0;
    animation-duration: .1s;
    animation-fill-mode: forwards;
    &.hidden {
        animation-name: ${showAnim};
    };

    &.visible {
        animation-name: ${hideAnim};
    }
    
`;

const Item = styled.p<{ bg: string }>`
    padding: 0 1rem;
    line-height: 1.4rem;
    height: 1.5rem;
    &:hover {
        background: ${props => props.bg}
    };
`;


const selectItemsData: SelectItemObj[] = [
    { value: "All", selected: true, text: "Select Region" },
    { value: "Asia", selected: false, text: "Asia" },
    { value: "Europe", selected: false, text: "Europe" },
    { value: "Americas", selected: false, text: "Americas" },
    { value: "Oceania", selected: false, text: "Oceania" },
    { value: "Africa", selected: false, text: "Africa" },
    { value: "Antarctic", selected: false, text: "Antarctic" },
]


const RegionSelect: FunctionComponent = () => {
    const { theme } = useTheme();
    const [isShowSelect, setShowSelect] = useState(false);
    const [selected, setSelected] = useState<SelectItemObj[]>(selectItemsData);

    const handleSelected = (index: SelectTextValue) => {
        setSelected(selected.map((item) => item.value === index ? { ...item, selected: true } : { ...item, selected: false }));
    }


    return <StyledSelect
        color={theme.color}
        background={theme.background}
        secondarybackground={theme.secondarybackground}
        onClick={() => setShowSelect(!isShowSelect)}
    >
        <p >{selected.find(s => s.selected)?.text}</p>
        <HiOutlineSelector color={theme.color} />
        <SelectItems
            color={theme.color}
            background={theme.background}
            secondarybackground={theme.secondarybackground}
            className={!isShowSelect ? "visible" : "hidden"}
        >
            {selected.filter(s => !s.selected).map((item, index) => (
                <Item
                    bg={theme.secondarybackground}
                    key={index}
                    onClick={() => handleSelected(item.value)}>
                    {item.value}
                </Item>
            ))}

        </SelectItems>

    </StyledSelect>

}

export { RegionSelect };