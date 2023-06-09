import { css } from "styled-components";
import { down } from "styled-breakpoints";
import styled from "styled-components";

import { ThemedProps } from "../theme";

interface LinkButton extends ThemedProps {
    primary?: boolean;
    secondary?: boolean;
}

export const LinkButton = styled.a<LinkButton>`
    background: transparent;
    color: ${({ theme }) => theme.colors.blackAlpha};
    border: 2px solid ${({ theme }) => theme.colors.white};
    padding: 16px 24px;
    border-radius: 24px;

    &:hover {
        color: ${({ theme }) => theme.colors.blackLight};
    }

    ${({ primary }) =>
        primary &&
        css`
            background: ${({ theme }) => theme.colors.pantone2};
            color: ${({ theme }) => theme.colors.white};
            border: none;

            &:hover {
                background: ${({ theme }) => theme.colors.pantone};
                color: ${({ theme }) => theme.colors.pantone2};
            }
        `}

    ${({ secondary }) =>
        secondary &&
        css`
            color: ${({ theme }) => theme.colors.white};

            &:hover {
                color: ${({ theme }) => theme.colors.whiteLight};
            }
        `}

    ${down("xs")} {
        padding: 8px 12px;
    }
`;
