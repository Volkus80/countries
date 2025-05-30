import type { FunctionComponent } from "react";
import styled from "styled-components";

const BoldSpan = styled.span`
    font-weight: 600;
`;

interface DataItemProps {
    name: string,
    value: string | number,
    color: string
}

const DataItem: FunctionComponent<DataItemProps> = ({ name, value, color }) => {
    return <p style={{ color: color }}>
        <BoldSpan>{name + " "}</BoldSpan>
        {value}
    </p>
}

export { DataItem }