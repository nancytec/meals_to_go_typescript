import {Searchbar} from "react-native-paper";
import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components/native";
import {DefaultTheme, ThemedStyledProps} from "styled-components";
import {TextProps} from "react-native";
import {LocationContext} from "../../../services/location/location.context";


const SearchContainer = styled.View`
  padding: ${(props: ThemedStyledProps<TextProps & React.RefAttributes<Text>, DefaultTheme>) => props.theme.space[3]};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    )
}